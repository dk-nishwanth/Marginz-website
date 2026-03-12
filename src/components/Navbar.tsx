import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const getPath = (item: string) => {
    switch(item) {
      case 'HOME': return '/';
      case 'ABOUT': return '/about';
      case 'SERVICES': return '/services';
      case 'CONTACT': return '/contact';
      default: return '/';
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] py-4 md:py-8 px-6 md:px-12 flex items-start justify-between pointer-events-none bg-gradient-to-b from-black/60 to-transparent">
      <div className="pointer-events-auto">
        <Link to="/" aria-label="MARGINZ Home">
          <img 
            src="/marginz-logo.jpg" 
            alt="MARGINZ Logo" 
            className="w-28 h-28 md:w-40 md:h-40 object-contain"
            loading="eager"
          />
        </Link>
      </div>

      <div className="flex flex-col items-end gap-2 pointer-events-auto mt-2 md:mt-0">
        {['HOME', 'ABOUT', 'SERVICES', 'CONTACT'].map((item) => (
          <Link 
            key={item} 
            to={getPath(item)}
            className="text-lg md:text-2xl font-display text-white hover:opacity-60 transition-opacity leading-none focus:outline-none focus:ring-2 focus:ring-urgency rounded px-2 py-1"
            aria-current={item === 'HOME' ? 'page' : undefined}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};
