'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartNavItem = () => {
  const { totalCount } = useCart();

  return (
    <Link 
      href="/checkout" 
      className={`relative p-2 text-gray-700 hover:text-corporate-blue transition-all duration-200 ${totalCount > 0 ? 'scale-110' : ''}`}
    >
      <ShoppingBag className="h-5 w-5" />
      {totalCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-corporate-blue text-white text-[10px] font-black h-5 w-5 flex items-center justify-center rounded-full border-2 border-white shadow-lg animate-in zoom-in duration-300">
          {totalCount}
        </span>
      )}
    </Link>
  );
};

export default CartNavItem;
