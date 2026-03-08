const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://greencodesolution:greencodesolution@avaira.pzcnx.mongodb.net/revolvit?appName=AVAIRA';

async function updatePaperRollImages() {
    try {
        await mongoose.connect(MONGODB_URI);
        const collection = mongoose.connection.db.collection('portaldatas');
        
        const doc = await collection.findOne({}, { sort: { createdAt: -1 } });
        if (doc && doc.hardware) {
            let updatedHardware = doc.hardware.map(h => {
                if (h.name === 'POS 110mm/4inch Thermal Paper Roll') {
                    return { ...h, image: '/uploads/1772937857804-276724575-16387856831632576321Thermalrolls-110x50.jpg' };
                } else if (h.name === 'POS Thermal Paper Jumbo Roll 80mm x 80mm' || h.name === 'POS 58mm/2inch Thermal Paper Roll') {
                    // Set to empty string because remote URL 404s
                    // Next.js will use the Image Pending placeholder
                    return { ...h, image: '' };
                }
                return h;
            });
            
            await collection.updateOne(
                { _id: doc._id },
                { $set: { hardware: updatedHardware } }
            );
            console.log("Updated Paper Roll Images successfully.");
        } else {
            console.log("No portal data found.");
        }
    } catch(err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}
updatePaperRollImages();
