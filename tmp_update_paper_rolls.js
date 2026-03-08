const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://greencodesolution:greencodesolution@avaira.pzcnx.mongodb.net/revolvit?appName=AVAIRA';

const newPaperRolls = [
    {
        category: 'paper_rolls',
        name: 'POS Thermal Paper Jumbo Roll 80mm x 80mm',
        model: 'PR-80x80',
        price: '275',
        originalPrice: '350',
        description: 'Standard 80x80mm thermal paper jumbo roll for standard POS receipt printers.',
        specs: ['Size: 80mm x 80mm', 'Universal Compatibility', 'Jumbo Length', 'Premium Grade'],
        image: 'https://elitepos.lk/wp-content/uploads/2025/11/WhatsApp-Image-2023-01-09-at-13.06.45-300x300.jpeg',
        tag: 'Best Seller',
        onSale: true
    },
    {
        category: 'paper_rolls',
        name: 'POS 58mm/2inch Thermal Paper Roll',
        model: 'PR-56x45',
        price: '90',
        description: 'Premium quality 56mm x 45mm thermal paper for 58mm mobile and POS printers.',
        specs: ['Size: 56mm x 45mm', 'Length: 18M', 'Premium Quality', 'Universal Compatibility'],
        image: 'https://elitepos.lk/wp-content/uploads/2025/11/98cecb8357afb9b007d4b46571ba6fb5-300x300.jpg',
        tag: 'Standard'
    },
    {
        category: 'paper_rolls',
        name: 'POS 110mm/4inch Thermal Paper Roll',
        model: 'PR-110x45',
        price: '300',
        originalPrice: '590',
        description: 'Wide-format 110mm x 45mm thermal paper for 4-inch mobile and POS printers.',
        specs: ['Size: 110mm x 45mm', 'Premium Quality', 'Wide Format Printing', 'Universal Compatibility'],
        image: 'https://elitepos.lk/wp-content/uploads/2025/11/a9f935fcc2bbabeb271e84d43be2fe08-300x300.jpg',
        tag: 'Sale',
        onSale: true
    }
];

async function updateDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        const collection = mongoose.connection.db.collection('portaldatas');
        
        const doc = await collection.findOne({}, { sort: { createdAt: -1 } });
        if (doc) {
            // Filter out existing paper rolls and accessories if they exist
            let updatedHardware = (doc.hardware || []).filter(h => h.category !== 'accessories' && h.category !== 'paper_rolls');
            
            // Push the new paper rolls
            updatedHardware.push(...newPaperRolls);
            
            await collection.updateOne(
                { _id: doc._id },
                { $set: { hardware: updatedHardware } }
            );
            console.log("Updated existing portal data with POS Paper Rolls.");
        } else {
            console.log("No portal data found.");
        }
    } catch(err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}
updateDB();
