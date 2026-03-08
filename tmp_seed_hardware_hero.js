const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://greencodesolution:greencodesolution@avaira.pzcnx.mongodb.net/revolvit?appName=AVAIRA';

async function seedHardwareHero() {
    try {
        await mongoose.connect(MONGODB_URI);
        const collection = mongoose.connection.db.collection('portaldatas');
        
        const doc = await collection.findOne({}, { sort: { createdAt: -1 } });
        if (doc) {
            if (!doc.hardwareHero || doc.hardwareHero.length === 0) {
                const hardwareHero = [
                    {
                        badge: 'Authorized Provider',
                        title1: 'Industrial Grade',
                        titleHighlight: 'Hardware Ecosystem.',
                        description: 'Build your perfect checkout stack with our vetted selection of POS terminals, printers, and accessories. Engineered for 24/7 reliability.',
                        features: ['Direct Local Warranty', 'Next-Day Delivery', 'Priority Installation'],
                        image: 'https://elitepos.lk/wp-content/uploads/2026/02/BN-SP999-DUAL-1.jpg',
                        statusLabel: 'Stock Status',
                        statusValue: 'Available Now'
                    },
                    {
                        badge: 'Special Offer',
                        title1: 'Upgrade Your Business',
                        titleHighlight: 'Save up to 15%.',
                        description: 'Get exclusive discounts on our premium collection of barcode scanners and complete POS setups this month only.',
                        features: ['Free Software Integration', '2-Year Warranty', 'Premium Support'],
                        image: '/hardware/pos_dual.png',
                        statusLabel: 'Offer Ends In',
                        statusValue: '5 Days'
                    }
                ];
                await collection.updateOne(
                    { _id: doc._id },
                    { $set: { hardwareHero } }
                );
                console.log("Seeded hardwareHero successfully.");
            } else {
                console.log("hardwareHero array already exists with items.");
            }
        } else {
            console.log("No portal data found.");
        }
    } catch(err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}
seedHardwareHero();
