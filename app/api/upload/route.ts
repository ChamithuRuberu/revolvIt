import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
    try {
        const data = await request.formData();
        const file: File | null = data.get('file') as unknown as File;

        if (!file) {
            return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Sanitize filename and create unique name
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const originalName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '');
        const filename = `${uniqueSuffix}-${originalName}`;
        
        const publicDir = join(process.cwd(), 'public');
        const uploadDir = join(publicDir, 'uploads');
        const path = join(uploadDir, filename);

        // Ensure directory exists, though Next.js handles public folder, we might need to create 'uploads'
        const fs = require('fs');
        if (!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        await writeFile(path, buffer);
        
        // Return URL accessible from frontend
        const url = `/uploads/${filename}`;
        
        return NextResponse.json({ success: true, url });
    } catch (error: any) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
