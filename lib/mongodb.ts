import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/greencodesolution';

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            // Performance optimizations
            maxPoolSize: 10,            // Connection pool
            minPoolSize: 2,             // Keep minimum connections alive
            serverSelectionTimeoutMS: 5000,  // Fail fast if server unreachable
            socketTimeoutMS: 45000,     // Close sockets after 45s of inactivity
            connectTimeoutMS: 10000,    // Give up initial connection after 10s
            heartbeatFrequencyMS: 10000, // Check server status every 10s
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            console.log('✅ MongoDB connected successfully');
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;

// ============================================
// In-memory cache for portal data
// ============================================
interface CacheEntry {
    data: any;
    timestamp: number;
}

const dataCache: Map<string, CacheEntry> = (global as any).__portalCache || new Map();
(global as any).__portalCache = dataCache;

const CACHE_TTL = 60 * 1000; // 60 seconds cache TTL

/**
 * Get cached data or fetch fresh from MongoDB.
 * Uses an in-memory cache with configurable TTL to avoid
 * hammering MongoDB on every page load.
 */
export async function getCachedPortalData(
    cacheKey: string = 'portal_data',
    ttl: number = CACHE_TTL,
    projection: string | null = null
): Promise<any> {
    const now = Date.now();
    const cached_entry = dataCache.get(cacheKey);

    // If whole data is cached, return it (filtering in memory is faster than DB trip)
    if (cached_entry && (now - cached_entry.timestamp) < ttl) {
        return cached_entry.data;
    }

    // Import here to avoid circular dependency
    const PortalData = (await import('@/models/PortalData')).default;
    await connectDB();

    console.time(`⏱️ MongoDB Fetch: ${cacheKey}`);
    const query = PortalData.findOne().sort({ createdAt: -1 }).lean();
    
    if (projection) {
        query.select(projection);
    }

    const data = await query.exec();
    console.timeEnd(`⏱️ MongoDB Fetch: ${cacheKey}`);

    if (data && !projection) {
        // Cache the full object only if no projection was used
        dataCache.set(cacheKey, { data, timestamp: now });
    }

    return data;
}

/**
 * Invalidate the cache (call after writes/updates)
 */
export function invalidateCache(cacheKey?: string) {
    if (cacheKey) {
        dataCache.delete(cacheKey);
    } else {
        dataCache.clear();
    }
}
