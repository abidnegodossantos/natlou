'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string; // Additional classes for the wrapper usually (like 'w-full') or for the element itself
    delay?: 0 | 100 | 200 | 300 | 400 | 500; // Constrain standard delays for cleaner CSS usage
    threshold?: number; // 0 to 1, how much of the element must be visible
}

export default function RevealOnScroll({ children, className = "", delay = 0, threshold = 0.1, ...props }: RevealOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger only once
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: threshold, // Trigger when percentage of target is visible
                rootMargin: '0px 0px -50px 0px' // Offset to trigger slightly before/after
            }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [threshold]);

    // Construct delay class string
    const delayClass = delay > 0 ? `delay-${delay}` : '';

    return (
        <div
            ref={ref}
            className={`reveal ${isVisible ? 'active' : ''} ${delayClass} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
