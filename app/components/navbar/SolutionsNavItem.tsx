'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SolutionsNavItemProps {
  onClick?: () => void;
  isMobile?: boolean;
}

const SolutionsNavItem = ({ onClick, isMobile = false }: SolutionsNavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === '/solutions' || pathname.startsWith('/solutions');

  const baseClasses = isMobile
    ? `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive
      ? 'text-corporate-blue bg-blue-50 font-semibold'
      : 'text-gray-700 hover:text-corporate-blue hover:bg-gray-50'
    }`
    : `px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive
      ? 'text-corporate-blue border-b-2 border-corporate-blue'
      : 'text-gray-700 hover:text-corporate-blue'
    }`;

  return (
    <Link
      href="/solutions"
      className={baseClasses}
      onClick={onClick}
    >
      Solutions
    </Link>
  );
};

export default SolutionsNavItem;

