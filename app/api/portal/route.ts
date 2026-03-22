import { NextResponse } from 'next/server';
import connectDB, { getCachedPortalData, invalidateCache } from '@/lib/mongodb';
import PortalData from '@/models/PortalData';
import { PORTAL_DEFAULTS } from '@/lib/defaults';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const data = await getCachedPortalData('portal_main');

        if (!data) {
            // Return default data if none exists
            return NextResponse.json(PORTAL_DEFAULTS);
        }

        // Merge defaults for any missing sections
        const result = data.toObject ? data.toObject() : data;

        // Perform deep merge with defaults to ensure UI stability
        for (const [key, defaultValue] of Object.entries(PORTAL_DEFAULTS)) {
            const val = result[key];
            const isEmpty = !val || 
                (Array.isArray(val) && val.length === 0) || 
                (typeof val === 'object' && !Array.isArray(val) && Object.keys(val).length === 0);
            
            if (isEmpty) {
                result[key] = defaultValue;
            } else if (key === 'posPricing' && typeof val === 'object' && !Array.isArray(val)) {
                // Nested deep merge for nested objects like posPricing
                const defaultPos = defaultValue as any;
                for (const [subKey, subDefault] of Object.entries(defaultPos)) {
                    const subVal = val[subKey];
                    const subIsEmpty = !subVal || 
                        (Array.isArray(subVal) && subVal.length === 0) || 
                        (typeof subVal === 'object' && !Array.isArray(subVal) && Object.keys(subVal).length === 0);
                    
                    if (subIsEmpty) {
                        val[subKey] = subDefault;
                    } else if (typeof subVal === 'object' && !Array.isArray(subVal)) {
                        for (const [fieldKey, fieldValue] of Object.entries(subDefault as any)) {
                            if (subVal[fieldKey] === undefined || subVal[fieldKey] === null || subVal[fieldKey] === '') {
                                subVal[fieldKey] = fieldValue;
                            }
                        }
                    }
                }
            }
        }

        return NextResponse.json(result);
    } catch (error: any) {
        console.error('Portal API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await connectDB();
        const body = await request.json();

        const data = await PortalData.findOneAndUpdate(
            {}, 
            body, 
            { upsert: true, new: true }
        );

        invalidateCache();

        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
