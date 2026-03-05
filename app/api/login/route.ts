import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

const SECRET_KEY = Buffer.from(process.env.JWT_SECRET || 'greencodesolution_admin_portal_secret_2026');

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // Validate against environment variables
        const isValid =
            email === (process.env.PORTAL_USER || 'admin') &&
            password === (process.env.PORTAL_PASS || 'admin');

        if (!isValid) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Create a JWT
        const token = await new SignJWT({ email })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('24h')
            .sign(SECRET_KEY);

        // Set cookie
        cookies().set('portal_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 1 day
        });

        return NextResponse.json({ success: true, message: 'Logged in successfully' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
