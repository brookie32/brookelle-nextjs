'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  return (
    <header className="site-header">
      <div className="container header-wrapper">
        <Link href="/" className="logo-text">BROOKELLE</Link>
        
        {/* Mobile Navigation Toggle */}
        <input 
          type="checkbox" 
          id="nav-toggle" 
          hidden 
          checked={isNavOpen}
          onChange={() => setIsNavOpen(!isNavOpen)}
        />
        <label className="burger" htmlFor="nav-toggle"><span></span></label>
        
        {/* Navigation */}
        <nav className={`main-nav ${isNavOpen ? 'is-open' : ''}`}>
          <Link href="/about" onClick={() => setIsNavOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setIsNavOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setIsNavOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
