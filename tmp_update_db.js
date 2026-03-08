const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://greencodesolution:greencodesolution@avaira.pzcnx.mongodb.net/revolvit?appName=AVAIRA';

const newHardware = [
    {
        category: 'pos',
        name: 'BELDON BN-SP999-I7 Dual Touch',
        model: 'BN-SP999-I7-DUAL-T',
        price: '214,500',
        originalPrice: '222,000',
        description: 'Top-tier dual 15.6" capacitive touch screens with Intel i7 power for high-volume retail.',
        specs: ['Intel i7 4th Gen', '8GB RAM / 256GB SSD', '15.6" Dual Touch Displays', 'Cast Aluminum Stand'],
        image: 'https://elitepos.lk/wp-content/uploads/2026/02/BN-SP999-DUAL-1.jpg',
        tag: 'Enterprise',
        onSale: true
    },
    {
        category: 'pos',
        name: 'BELDON BN-SP999-I7 Dual Display',
        model: 'BN-SP999-I7-DUAL',
        price: '194,000',
        originalPrice: '198,000',
        description: 'Professional i7 dual display system with 15.6" touch main screen and 11.6" customer display.',
        specs: ['Intel i7 4th Gen', '8GB RAM / 256GB SSD', '15.6" Touch Screen', '11.6" Customer Display'],
        image: 'https://elitepos.lk/wp-content/uploads/2026/02/BN-SP999-DUAL-2.jpg',
        tag: 'Professional',
        onSale: true
    },
    {
        category: 'pos',
        name: 'X1 SENRAISE Android with Printer',
        model: 'X1-S-PRINT',
        price: '182,000',
        originalPrice: '190,000',
        description: 'All-in-one Android POS terminal with integrated 80mm thermal printer and auto-cutter.',
        specs: ['Android 14 OS', 'MTK 8 Core 2.3GHz', '10.95" Touch Screen', 'Inbuilt 80mm Printer'],
        image: 'https://elitepos.lk/wp-content/uploads/2026/02/Untitled-design-48.jpg',
        tag: 'Smart POS',
        onSale: true
    },
    {
        category: 'pos',
        name: 'POSMAX PM-I7-4GN-DUAL i7',
        model: 'PM-I7-DUAL',
        price: '175,000',
        originalPrice: '180,000',
        description: 'Powerful dual-screen i7 terminal designed for intensive retail management and engagement.',
        specs: ['Intel i7 Processor', '4GB RAM / 128GB SSD', 'Dual High-Res Touch', 'Industrial Grade'],
        image: '/hardware/pos_dual.png',
        tag: 'Sale',
        onSale: true
    },
    {
        category: 'pos',
        name: 'BELDON i7 Single Screen',
        model: 'BN-i7-SINGLE',
        price: '155,000',
        originalPrice: '165,000',
        description: 'Premium single-screen professional terminal with high-speed i7 performance and fanless design.',
        specs: ['Intel i7 Processor', '8GB RAM', '15.6" Capacitive Touch', 'Fanless Design'],
        image: '/hardware/pos_single.png',
        tag: 'Sale',
        onSale: true
    },
    {
        category: 'pos',
        name: 'X1 SENRAISE Android Desktop',
        model: 'X1-ANDROID',
        price: '150,000',
        originalPrice: '160,000',
        description: 'Sleek and responsive Android touch POS machine for modern, cloud-based retail operations.',
        specs: ['Android 13 OS', '11.6" HD Display', '4GB RAM / 32GB ROM', 'WiFi + Bluetooth'],
        image: 'https://elitepos.lk/wp-content/uploads/2025/01/X1-SINGLE.jpg',
        tag: 'Cloud Ready',
        onSale: true
    },
    {
        category: 'pos',
        name: 'BELDON Core i5 Dual Display',
        model: 'BN-TPT0027',
        price: '139,000',
        originalPrice: '150,000',
        description: 'Efficient i5 powered POS system featuring a main touch screen and a secondary customer display.',
        specs: ['Intel i5 Processor', '8GB RAM / 256GB SSD', '15.6" Capacitive Touch', 'Customer VFD Display'],
        image: 'https://elitepos.lk/wp-content/uploads/2025/11/combo-Recovered-67.jpg',
        tag: 'Best Value',
        onSale: true
    },
    {
        category: 'pos',
        name: 'POSMAX – PM-CRP-909-256 i5',
        model: 'PM-CRP-909',
        price: '130,000',
        originalPrice: '150,000',
        description: 'Reliable and efficient i5 powered POS system with integrated WiFi for modern businesses.',
        specs: ['Intel i5 Processor', '8GB RAM / 256GB SSD', 'Inbuilt WiFi', '15.6" HD Display'],
        image: '/hardware/pos_single.png',
        tag: 'Sale',
        onSale: true
    },
    {
        category: 'pos',
        name: 'BELDON BN-SP999-i7 Single',
        model: 'BN-SP999-S',
        price: '162,400',
        description: 'Premium single-screen professional terminal for standard retail outlets.',
        specs: ['Intel i7 Processor', '4GB DDR4 RAM', '15.6" Capacitive Touch', 'Fanless Design'],
        image: 'https://elitepos.lk/wp-content/uploads/2026/02/BN-SP999-1.png',
        onSale: true
    },
    {
        category: 'printers',
        name: 'XPRINTER XP-K200L High Speed',
        model: 'XP-K200L',
        price: '13,500',
        description: 'Ultra-fast 80mm thermal receipt printer with auto-cutter technology.',
        specs: ['250mm/s Print Speed', 'USB + LAN Connectivity', 'Auto-Cutter Included', 'Jam-Free Mechanism'],
        image: '/hardware/printer_high_speed.png',
        tag: 'Best Seller'
    },
    {
        category: 'printers',
        name: 'XPRINTER XP-E200L Wifi/Bluetooth',
        model: 'XP-E200L',
        price: '27,500',
        description: 'Wireless thermal printer for flexible counter-free retail environments.',
        specs: ['USB + Wifi + Bluetooth', 'Low Noise Printing', 'Compact Design', 'Dual Interface'],
        image: '/hardware/printer_wireless.png'
    },
    {
        category: 'scanners',
        name: 'Zebra DS9308 2D Desktop',
        model: 'DS9308',
        price: '37,500',
        description: 'Hands-free omni-directional scanner for high-volume grocery checkout.',
        specs: ['Reads 1D/2D/QR Codes', 'Aggressive Scanning', 'Adjustable Head', 'Plug & Play'],
        image: '/hardware/scanner_orbit.png',
        tag: 'Advanced',
        onSale: true
    },
    {
        category: 'scanners',
        name: 'Beldon BN-1200W Wireless',
        model: 'BN-1200W',
        price: '16,500',
        description: 'Long-range wireless scanner for warehouse and inventory management.',
        specs: ['100m Support Range', 'Anti-Drop Build', '1D Laser Precision', 'Backup Storage'],
        image: '/hardware/scanner_wireless.png'
    },
    {
        category: 'cash',
        name: 'BELDON BN-PVC045 Mix Value',
        model: 'BN-PVC045',
        price: '145,000',
        description: 'Heavy duty mix value cash counting machine with advanced fake note detection.',
        specs: ['Mix Note Counting', 'UV/MG/IR Detection', 'Report Detail View', 'External Display'],
        image: '/hardware/counting_mix.png',
        tag: 'Bank Grade'
    },
    {
        category: 'cash',
        name: 'POSMAX BASIC Bill Counter',
        model: 'PM-BASIC',
        price: '35,000',
        description: 'Reliable and fast batch counting for daily cash reconciliation.',
        specs: ['1000 Notes/Min', 'Batch & Add Function', 'Standard Detection', 'LED Display'],
        image: '/hardware/counting_basic.png'
    },
    {
        category: 'cash',
        name: 'POSMAX Heavy Duty Cash Drawer',
        model: 'PM-CD-410',
        price: '14,500',
        description: 'Robust metal cash drawer with RJ11 interface for auto-opening.',
        specs: ['5 Notes / 8 Coins', 'Metal Construction', 'Key Lock & Manual Open', 'Lifetime Springs'],
        image: '/hardware/cash_drawer.png',
        onSale: true
    }
];

async function updateDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        const collection = mongoose.connection.db.collection('portaldatas');
        
        const doc = await collection.findOne({}, { sort: { createdAt: -1 } });
        if (doc) {
            await collection.updateOne(
                { _id: doc._id },
                { $set: { hardware: newHardware } }
            );
            console.log("Updated existing portal data.");
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
