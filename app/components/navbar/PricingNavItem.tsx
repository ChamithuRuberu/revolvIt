'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface PricingNavItemProps {
  onClick?: () => void;
  isMobile?: boolean;
}

const PricingNavItem = ({ onClick, isMobile = false }: PricingNavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === '/pricing' || pathname.startsWith('/pricing/');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen && !isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isMobile]);

  const baseClasses = isMobile
    ? `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
        isActive 
          ? 'text-corporate-blue bg-blue-50 font-semibold' 
          : 'text-gray-700 hover:text-corporate-blue hover:bg-gray-50'
      }`
    : `px-4 py-2 text-sm font-medium transition-all duration-200 relative ${
        isActive 
          ? 'text-corporate-blue border-b-2 border-corporate-blue' 
          : 'text-gray-700 hover:text-corporate-blue'
      }`;

  const dropdownItems = [
    { label: 'POS', href: '/pricing/pos' },
    { label: 'Enterprise Solutions', href: '/pricing/enterprise' },
    { label: 'NFT web', href: '/pricing/nft' },
    { label: 'Mobile development', href: '/pricing/mobile' },
  ];

  const handleItemClick = () => {
    setIsOpen(false);
    if (onClick) onClick();
  };

  if (isMobile) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between ${baseClasses}`}
        >
          <span>Pricing</span>
          <ChevronDown 
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>
        {isOpen && (
          <div className="pl-6 space-y-1">
            {dropdownItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleItemClick}
                className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-corporate-blue hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className={`flex items-center gap-1 ${baseClasses}`}
      >
        Pricing
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-professional-lg border border-gray-200 py-2 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {dropdownItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleItemClick}
              className="block px-4 py-2 text-sm text-gray-700 hover:text-corporate-blue hover:bg-blue-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PricingNavItem;

