'use client';

import { useState, useEffect } from 'react';
import NavbarLogo from './navbar/NavbarLogo';
import DesktopNav from './navbar/DesktopNav';
import MobileNavButton from './navbar/MobileNavButton';
import MobileNav from './navbar/MobileNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-professional-lg border-b border-gray-200' 
        : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavbarLogo />
          <DesktopNav />
          <MobileNavButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar; 