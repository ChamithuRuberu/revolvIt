const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://greencodesolution:greencodesolution@avaira.pzcnx.mongodb.net/revolvit?appName=AVAIRA';

const hardwareCategories = [
    { id: 'pos', name: 'POS Systems', icon: 'Monitor' },
    { id: 'printers', name: 'Thermal Printers', icon: 'Printer' },
    { id: 'scanners', name: 'Scanning & Barcode', icon: 'ScanLine' },
    { id: 'cash', name: 'Cash Management', icon: 'Calculator' },
    { id: 'paper_rolls', name: 'POS Paper Rolls', icon: 'Package' }
];

async function updateDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        const collection = mongoose.connection.db.collection('portaldatas');
        
        const doc = await collection.findOne({}, { sort: { createdAt: -1 } });
        if (doc) {
            await collection.updateOne(
                { _id: doc._id },
                { $set: { hardwareCategories } }
            );
            console.log("Updated DB with hardware categories.");
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
