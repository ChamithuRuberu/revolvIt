const mongoose = require('mongoose');

const PortalDataSchema = new mongoose.Schema({
    pricing: [{
        title: String,
        price: String,
        description: String,
        features: [String],
        isRecommended: Boolean,
    }]
}, { strict: false });

const PortalData = mongoose.models.PortalData || mongoose.model('PortalData', PortalDataSchema);

const newPricing = [
    { title: 'Desktop Core', price: '24,900', description: 'One-Time Payment. Yours Forever. No WiFi Needed.', features: ['100% Offline Resilience', 'Zero Monthly Subscriptions', 'Basic Inventory Protection', 'One-Click Daily Profit Reports', 'Staff Theft Tracking', 'Lifetime Support Access'], isRecommended: false },
    { title: 'Growth Hybrid', price: '49,900', description: 'The Sweet Spot. Local Speed Meets Cloud Power.', features: ['Real-time Mobile Sales Dashboard', 'Auto-Cloud Data Backup', 'WhatsApp Digital Receipts', 'Customer Loyalty & Rewards', 'Low-Stock Early Warnings', 'Online-Offline Seamless Sync'], isRecommended: true },
    { title: 'Enterprise Command', price: '89,900', description: 'Absolute Control for Multi-Branch Empires.', features: ['Unlimited Branch Management', 'Centralised HQ Inventory Control', 'AI-Powered Sales Forecasting', 'Multi-Warehouse Transfer Logic', 'Dedicated Priority SLA', 'Open API for Integrations'], isRecommended: false },
    { title: 'Restaurant Premium', price: '59,900', description: 'Built for Speed. Master The Rush Hour.', features: ['Direct KOT Kitchen Printing', 'Visual Table Management', 'Smart Recipe & Ingredient Costing', 'Waiter App Integration', 'Split-Bill & Dynamic Tax', 'QR Code Contactless Menus'], isRecommended: false }
];

async function updateDB() {
    try {
        await mongoose.connect('mongodb+srv://greencodesolution:greencodesolution@avaira.pzcnx.mongodb.net/revolvit?appName=AVAIRA');
        console.log('Connected to MongoDB.');
        
        await PortalData.updateOne({}, { $set: { pricing: newPricing } }, { upsert: true });
        console.log('Successfully updated pricing plans in DB.');
        
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

updateDB();
