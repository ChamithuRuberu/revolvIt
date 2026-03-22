import { NextResponse } from 'next/server';
import connectDB, { getCachedPortalData } from '@/lib/mongodb';
import { PORTAL_DEFAULTS } from '@/lib/defaults';

export const dynamic = 'force-dynamic';

/**
 * Deep merge DB results with defaults
 */
function mergeWithDefaults(dbData: any) {
    const result = dbData && dbData.toObject ? dbData.toObject() : (dbData || {});
    
    // Fill in missing top-level keys
    for (const [key, defaultValue] of Object.entries(PORTAL_DEFAULTS)) {
        const val = result[key];
        const isEmpty = !val || 
            (Array.isArray(val) && val.length === 0) || 
            (typeof val === 'object' && !Array.isArray(val) && Object.keys(val).length === 0);
        
        if (isEmpty) {
            result[key] = defaultValue;
        } else if (key === 'posPricing' && typeof val === 'object' && !Array.isArray(val)) {
            // Nested merge for posPricing
            const defaultPos = (defaultValue as any);
            for (const [subKey, subDefault] of Object.entries(defaultPos)) {
                const subVal = val[subKey];
                const subIsEmpty = !subVal || 
                    (Array.isArray(subVal) && subVal.length === 0) || 
                    (typeof subVal === 'object' && !Array.isArray(subVal) && Object.keys(subVal).length === 0);
                
                if (subIsEmpty) {
                    val[subKey] = subDefault;
                } else if (typeof subVal === 'object' && !Array.isArray(subVal)) {
                    // Deep merge sub-objects like 'hero' or 'savings'
                    for (const [fieldKey, fieldValue] of Object.entries(subDefault as any)) {
                        if (subVal[fieldKey] === undefined || subVal[fieldKey] === null || subVal[fieldKey] === '') {
                            subVal[fieldKey] = fieldValue;
                        }
                    }
                }
            }
        }
    }
    return result;
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const fields = searchParams.get('fields');

        // 1. Fetch from MongoDB (highly optimized with caching & projection)
        const data = await getCachedPortalData(
            fields ? `portal_public_${fields}` : 'portal_public', 
            undefined, 
            fields ? fields.replace(/,/g, ' ') : null
        );

        // 2. Optimization: If data is missing or we need to merge defaults
        const result = mergeWithDefaults(data);

        // 3. Selection of requested fields
        let finalResult = result;
        if (fields) {
            finalResult = {};
            const fieldList = fields.split(',');
            fieldList.forEach(f => {
                const trimmed = f.trim();
                if (result[trimmed] !== undefined) {
                    finalResult[trimmed] = result[trimmed];
                }
            });
            if (result.user && !finalResult.user) finalResult.user = result.user;
        }

        return NextResponse.json(finalResult);
    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await connectDB();
        const body = await request.json();
        
        const PortalData = (await import('@/models/PortalData')).default;
        const data = await PortalData.findOneAndUpdate(
            {}, 
            body, 
            { upsert: true, new: true }
        );

        const { invalidateCache } = await import('@/lib/mongodb');
        invalidateCache();

        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
