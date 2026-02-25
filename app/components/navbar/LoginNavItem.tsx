'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from 'lucide-react';

interface LoginNavItemProps {
    onClick?: () => void;
    isMobile?: boolean;
}

const LoginNavItem = ({ onClick, isMobile }: LoginNavItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === '/login' || pathname === '/portal';

    if (isMobile) {
        return (
            <Link
                href="/login"
                onClick={onClick}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-bold transition-all duration-200 ${isActive
                        ? 'bg-corporate-blue text-white shadow-md'
                        : 'text-corporate-blue bg-blue-50 hover:bg-corporate-blue hover:text-white'
                    }`}
            >
                <User className="h-5 w-5" />
                Portal Login
            </Link>
        );
    }

    return (
        <Link
            href="/login"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${isActive
                ? 'bg-corporate-blue text-white shadow-md'
                : 'text-corporate-blue border-2 border-corporate-blue hover:bg-corporate-blue hover:text-white'
                }`}
        >
            <User className="h-4 w-4" />
            Portal Login
        </Link>
    );
};

export default LoginNavItem;
