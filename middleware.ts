import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = Buffer.from(process.env.JWT_SECRET || 'revolvit_admin_portal_secret_2026');

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the current path is protected
    const isProtected = pathname.startsWith('/portal') || pathname.startsWith('/api/portal');

    if (isProtected) {
        const token = request.cookies.get('portal_token')?.value;

        if (!token) {
            // Redirect to login if no token for protected pages
            if (pathname.startsWith('/api/')) {
                return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
            }
            return NextResponse.redirect(new URL('/login', request.url));
        }

        try {
            // Verify the token
            await jwtVerify(token, SECRET_KEY);
            return NextResponse.next();
        } catch (error) {
            // Token is invalid, redirect to login
            if (pathname.startsWith('/api/')) {
                return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
            }
            const response = NextResponse.redirect(new URL('/login', request.url));
            response.cookies.delete('portal_token');
            return response;
        }
    }

    return NextResponse.next();
}

// Config to specify matching paths
export const config = {
    matcher: ['/portal/:path*', '/api/portal/:path*'],
};
