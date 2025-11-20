'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AboutNavItemProps {
  onClick?: () => void;
  isMobile?: boolean;
}

const AboutNavItem = ({ onClick, isMobile = false }: AboutNavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === '/about';
  
  const baseClasses = isMobile
    ? `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
        isActive 
          ? 'text-corporate-blue bg-blue-50 font-semibold' 
          : 'text-gray-700 hover:text-corporate-blue hover:bg-gray-50'
      }`
    : `px-4 py-2 text-sm font-medium transition-all duration-200 ${
        isActive 
          ? 'text-corporate-blue border-b-2 border-corporate-blue' 
          : 'text-gray-700 hover:text-corporate-blue'
      }`;

  return (
    <Link
      href="/about"
      className={baseClasses}
      onClick={onClick}
    >
      About
    </Link>
  );
};

export default AboutNavItem;

