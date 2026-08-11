'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src="/sms-logo.webp" alt="S.M.S Electronics Logo" style={{ maxHeight: '50px', width: 'auto', objectFit: 'contain' }} />
          <div>
            <h1>S.M.S ELECTRONICS</h1>
            <p>All Electronics Services Done Here</p>
          </div>
        </Link>
        <nav className={`nav-links${menuOpen ? ' active' : ''}`}>
          <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/services" className={pathname === "/services" ? "active" : ""} onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <div className="mobile-nav-actions">
            <a href="tel:9071299180" className="btn btn-dark"><i className="fa-solid fa-phone"></i> Call Now</a>
            <a href="tel:9071299180" className="btn btn-primary">Book Now</a>
          </div>
        </nav>
        <div className="header-actions">
          <a href="tel:9071299180" className="btn btn-dark" style={{ padding: '8px 16px' }}><i className="fa-solid fa-phone"></i> Call Now</a>
          <a href="tel:9071299180" className="btn btn-primary" style={{ padding: '8px 16px' }}>Book Service</a>
        </div>
        <div
          className="mobile-menu-btn"
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  );
}
