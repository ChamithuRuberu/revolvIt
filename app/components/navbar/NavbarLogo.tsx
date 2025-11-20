'use client';

import Link from 'next/link';

const NavbarLogo = () => {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
        <img src="/logo.png" alt="logo" className="w-40 h-14" />
      </Link>
    </div>
  );
};

export default NavbarLogo;

