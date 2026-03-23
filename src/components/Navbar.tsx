import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'SERVICES', path: '/services' },
  { label: 'CONTACT', path: '/contact' },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] py-4 md:py-6 px-6 md:px-12 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
      {/* Logo */}
      <Link to="/" aria-label="MARGINZ Home" className="flex-shrink-0">
        <img
          src="/marginz-logo.jpg"
          alt="MARGINZ Logo"
          className="w-16 h-16 md:w-24 md:h-24 object-contain"
          loading="eager"
        />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex flex-col items-end gap-1">
        {NAV_ITEMS.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            className="text-xl lg:text-2xl font-display text-white hover:opacity-60 transition-opacity leading-none focus:outline-none focus:ring-2 focus:ring-urgency rounded px-2 py-1"
            aria-current={location.pathname === path ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-urgency rounded"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-forest/95 backdrop-blur-sm flex flex-col items-start px-6 py-6 gap-4 border-t border-white/10">
          {NAV_ITEMS.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-display text-white hover:opacity-60 transition-opacity focus:outline-none focus:ring-2 focus:ring-urgency rounded px-2 py-1 w-full"
              aria-current={location.pathname === path ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
