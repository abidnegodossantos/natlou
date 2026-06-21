"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <Image
            src="/logo-natlou.png"
            alt="Natlou - Ar Condicionado"
            width={200}
            height={75}
            style={{ 
              objectFit: 'contain', 
              height: 'auto', 
              maxHeight: '60px', 
              width: 'auto',
              maxWidth: '150px'
            }}
            priority
          />
        </Link>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link href="/" onClick={() => setMenuOpen(false)} className="nav-link">Início</Link></li>
        <li><Link href="/about" onClick={() => setMenuOpen(false)} className="nav-link">Sobre Nós</Link></li>
        <li><Link href="/services" onClick={() => setMenuOpen(false)} className="nav-link">Serviços</Link></li>
        <li><Link href="/shop" onClick={() => setMenuOpen(false)} className="nav-link">Loja</Link></li>
        <li><Link href="/faq" onClick={() => setMenuOpen(false)} className="nav-link">FAQ</Link></li>
        <li><Link href="/contact" onClick={() => setMenuOpen(false)} className="nav-link">Contactos</Link></li>
      </ul>

      <div className="navbar-actions">
        <ThemeToggle />
        <button 
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ zIndex: 9999 }}
        >
          {menuOpen ? (
            <svg width="32" height="32" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" fill="none">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
