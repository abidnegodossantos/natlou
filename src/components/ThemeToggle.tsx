"use client";

import { useEffect, useState, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Read theme from DOM on mount to keep in sync with blocking head script
  useEffect(() => {
    setMounted(true);
    const isDark =
      document.documentElement.classList.contains('dark') ||
      (!document.documentElement.classList.contains('light') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    const initialTheme = isDark ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    const updateDOM = () => {
      if (newTheme === 'dark') {
        root.classList.remove('light');
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        setTheme('light');
      }
    };

    // Check View Transitions API support and prefers-reduced-motion
    const doc = typeof document !== 'undefined' ? (document as any) : null;
    const supportsViewTransition =
      doc &&
      typeof doc.startViewTransition === 'function' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsViewTransition || !buttonRef.current) {
      updateDOM();
      return;
    }

    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    try {
      const transition = doc.startViewTransition(() => {
        updateDOM();
      });

      transition.ready
        .then(() => {
          try {
            document.documentElement.animate(
              {
                clipPath: [
                  `circle(0px at ${x}px ${y}px)`,
                  `circle(${endRadius}px at ${x}px ${y}px)`
                ]
              },
              {
                duration: 520,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                pseudoElement: '::view-transition-new(root)'
              }
            );
          } catch (animErr) {
            // Fallback gracefully if pseudoElement animate is not supported
          }
        })
        .catch(() => {
          // Transition was aborted or superseded, DOM is already updated
        });
    } catch (err) {
      updateDOM();
    }
  };

  const isDark = theme === 'dark';

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={`theme-toggle-btn ${isDark ? 'theme-toggle-dark' : 'theme-toggle-light'}`}
      aria-label="Alternar tema"
      title={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      type="button"
    >
      {!mounted ? (
        <span className="theme-toggle-icon-wrap" key="unmounted">
          <Moon size={22} strokeWidth={2} aria-hidden="true" style={{ opacity: 0.85 }} />
        </span>
      ) : isDark ? (
        <span className="theme-toggle-icon-wrap" key="dark">
          <Moon size={22} strokeWidth={2} aria-hidden="true" />
        </span>
      ) : (
        <span className="theme-toggle-icon-wrap" key="light">
          <Sun size={22} strokeWidth={2} aria-hidden="true" />
        </span>
      )}
    </button>
  );
}
