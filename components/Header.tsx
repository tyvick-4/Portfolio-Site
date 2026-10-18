
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Writing', path: '/writing' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClass = "text-muted hover:text-accent transition-colors duration-250";
  const activeLinkClass = "!text-accent";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-line">
      <nav className="page-container py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="font-display text-xl font-semibold text-ink hover:text-accent transition-colors duration-250">
            {PERSONAL_INFO.name}
          </NavLink>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `text-small ${linkClass} ${isActive ? activeLinkClass : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-ink" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `block px-2 py-1 text-body-lg ${linkClass} ${isActive ? activeLinkClass : ''}`}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
