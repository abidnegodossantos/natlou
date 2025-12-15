"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/logo-natlou.png"
            alt="Natlou Logo"
            width={400}
            height={150}
            quality={100}
            style={{ objectFit: 'contain', height: 'auto', maxHeight: '100px', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' }}
            priority
          />
        </Link>
      </div>

      <button
        className="mobile-menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link
            href="/"
            className="nav-link"
            onClick={closeMenu}
            style={pathname === '/' ? { color: 'var(--primary-color)', fontWeight: '700' } : {}}
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="nav-link"
            onClick={closeMenu}
            style={pathname === '/about' ? { color: 'var(--primary-color)', fontWeight: '700' } : {}}
          >
            Sobre Nós
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="nav-link"
            onClick={closeMenu}
            style={pathname === '/services' ? { color: 'var(--primary-color)', fontWeight: '700' } : {}}
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link
            href="/shop"
            className="nav-link"
            onClick={closeMenu}
            style={pathname === '/shop' ? { color: 'var(--primary-color)', fontWeight: '700' } : {}}
          >
            Loja
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="nav-link"
            onClick={closeMenu}
            style={pathname === '/contact' ? { color: 'var(--primary-color)', fontWeight: '700' } : {}}
          >
            Contactos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
