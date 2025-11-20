'use client';

import { Menu, X } from 'lucide-react';

interface MobileNavButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileNavButton = ({ isOpen, onClick }: MobileNavButtonProps) => {
  return (
    <div className="md:hidden">
      <button
        onClick={onClick}
        className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-corporate-blue hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-corporate-blue/20 transition-all"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default MobileNavButton;

