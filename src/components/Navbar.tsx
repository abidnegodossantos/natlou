"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Contactos', id: 'contactos' },
];

const WHATSAPP_QUOTE_URL = `https://wa.me/244955475575?text=${encodeURIComponent(
  'Olá, NATLOU! Gostaria de pedir um orçamento para soluções de ar condicionado.'
)}`;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for compact floating navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to accurately track active section
  useEffect(() => {
    const sectionElements = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          const highest = visibleEntries.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActiveSection(highest.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-15% 0px -50% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Smooth scroll handler
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setMenuOpen(false);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
        setActiveSection(id);
      } else {
        window.location.href = `/#${id}`;
      }
    },
    []
  );

  return (
    <header className="navbar-wrapper" role="banner">
      <nav
        className={`navbar-floating ${scrolled ? 'navbar-floating-scrolled' : ''}`}
        aria-label="Navegação principal"
      >
        {/* 1. Logo Oficial */}
        <div className="navbar-logo">
          <Link
            href="/#inicio"
            onClick={(e) => handleNavClick(e, 'inicio')}
            aria-label="Natlou Climatização — Voltar ao início"
          >
            <Image
              src="/logo-natlou-official.png"
              alt="Natlou Climatização"
              width={140}
              height={68}
              priority
              className="navbar-logo-img"
            />
          </Link>
        </div>

        {/* 2. Links Desktop com Cápsula Ativa */}
        <div className="navbar-links-desktop" role="navigation">
          <ul className="navbar-pill-list" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="navbar-pill-item">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`navbar-pill-link ${isActive ? 'navbar-pill-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 3. Ações Direita: CTA + Tema + Botão Hambúrguer */}
        <div className="navbar-actions">
          <a
            href={WHATSAPP_QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta-btn"
            aria-label="Pedir Orçamento via WhatsApp"
          >
            <span>Pedir Orçamento</span>
          </a>

          <ThemeToggle />

          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* 4. Mobile Navigation Drawer / Fullscreen Overlay */}
      <div
        id="mobile-navigation-drawer"
        className={`navbar-mobile-drawer ${menuOpen ? 'drawer-open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação mobile"
      >
        <div className="navbar-mobile-backdrop" onClick={() => setMenuOpen(false)} />

        <div className="navbar-mobile-content">
          <div className="navbar-mobile-header">
            <div className="navbar-logo">
              <Image
                src="/logo-natlou-official.png"
                alt="Natlou Climatização"
                width={130}
                height={64}
                className="navbar-logo-img"
              />
            </div>
            <button
              type="button"
              className="navbar-mobile-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="navbar-mobile-list" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="navbar-mobile-item">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`navbar-mobile-link ${isActive ? 'mobile-link-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={18} className="navbar-mobile-link-arrow" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="navbar-mobile-footer">
            <a
              href={WHATSAPP_QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="navbar-mobile-cta"
              aria-label="Pedir Orçamento via WhatsApp"
            >
              Pedir Orçamento
            </a>

            <div className="navbar-mobile-theme-row">
              <span className="navbar-mobile-theme-label">Alternar tema:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

