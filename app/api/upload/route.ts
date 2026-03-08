import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.formData();
        const file: File | null = data.get('file') as unknown as File;

        if (!file) {
            return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Convert file buffer to base64 string to avoid 'EROFS' error on Vercel (read-only file system)
        const mimeType = file.type || 'image/jpeg';
        const base64Url = `data:${mimeType};base64,${buffer.toString('base64')}`;
        
        return NextResponse.json({ success: true, url: base64Url });
    } catch (error: any) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
