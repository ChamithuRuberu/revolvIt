import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import PortalData from '@/models/PortalData';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await connectDB();
        const data = await PortalData.findOne().sort({ createdAt: -1 });

        if (!data) {
            // Return default data if none exists
            return NextResponse.json({
                user: { name: 'John Wickramasinghe', role: 'Super Admin', initials: 'JW' },
                welcome: {
                    title: 'Master Your Business Operations.',
                    description: 'Everything you need to scale your multi-branch operations is right here. Your inventory sync is optimal across all 12 terminals.',
                    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800'
                },
                stats: [
                    { label: 'Total Revenue', value: 'LKR 4.2M', icon: 'CreditCard', color: 'text-blue-600', bg: 'bg-blue-50', growth: '+15.2%' },
                    { label: 'Active Terminals', value: '12', icon: 'Monitor', color: 'text-green-600', bg: 'bg-green-50', growth: '+2' },
                    { label: 'Inventory Items', value: '2,840', icon: 'Package', color: 'text-amber-600', bg: 'bg-amber-50', growth: '98% Stock' },
                    { label: 'Uptime Score', value: '99.98%', icon: 'ShieldCheck', color: 'text-purple-600', bg: 'bg-purple-50', growth: 'Excellent' },
                ],
                services: [
                    { name: 'Enterprise POS Solution', status: 'Active', expiry: 'Oct 2026', type: 'Annual Plan', usage: '82%' },
                    { name: 'Cloud Inventory Engine', status: 'Active', expiry: 'Oct 2026', type: 'Pro Bundle', usage: '45%' },
                    { name: 'Mobile Sales App', status: 'Active', expiry: 'Dec 2025', type: 'Add-on', usage: '30%' },
                    { name: 'Premium Support Link', status: 'Active', expiry: 'Lifetime', type: 'Enterprise', usage: '24/7' },
                ],
                solutions: [
                    {
                        title: 'Enterprise POS Systems',
                        description: 'Transform your retail or hospitality business with our powerful Point of Sale solution. Features multi-store management, offline mode, and real-time inventory.',
                        features: ['Advanced Inventory Tracking', 'Customer Loyalty Programs', 'Employee Performance Analytics', 'Integrated Payment Gateways'],
                        image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800',
                        icon: 'ShoppingCart',
                        color: 'bg-blue-600'
                    },
                    {
                        title: 'Custom ERP Solutions',
                        description: 'Tailor-made Enterprise Resource Planning systems to streamline your operations, from supply chain to human resources and financial management.',
                        features: ['Unified Dashboard', 'Automated Workflows', 'Departmental Integration', 'Secure Data Management'],
                        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
                        icon: 'Building2',
                        color: 'bg-indigo-600'
                    },
                    {
                        title: 'Cloud Infrastructure',
                        description: 'Scalable and secure cloud hosting and infrastructure management for your applications, ensuring high availability and global reach.',
                        features: ['Auto-scaling Capabilities', 'Proactive Monitoring', 'Disaster Recovery', 'Optimized Performance'],
                        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
                        icon: 'Cloud',
                        color: 'bg-sky-600'
                    },
                    {
                        title: 'Mobile Applications',
                        description: 'Engage your customers anywhere with native and cross-platform mobile apps designed for seamless user experience and performance.',
                        features: ['iOS & Android Development', 'Offline Functionality', 'Push Notifications', 'Real-time Sync'],
                        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
                        icon: 'Smartphone',
                        color: 'bg-violet-600'
                    }
                ],
                pricing: [
                    { title: 'Desktop Core', price: '25,000', description: '100% Offline performance for single-station retail.', features: ['Works 100% Offline', 'Lifetime License (No Fees)', 'Inventory Management', 'Sales & PDF Reports', 'All Printers/Scanners Support', 'Staff Performance Tracking'], isRecommended: false },
                    { title: 'Hybrid Professional', price: '45,000', description: 'Local reliability with cloud-sync & mobile access.', features: ['Real-time Cloud Sync', 'Mobile Sales Dashboard', 'Automated Cloud Backups', 'WhatsApp/Sms Receipts', 'Customer Loyalty System', 'Inventory Alerts'], isRecommended: true },
                    { title: 'Enterprise Cloud', price: '85,000', description: 'Centralized management for multi-branch chains.', features: ['Unlimited Branch Support', 'Centralized Inventory Control', 'Advanced AI Analytics', 'Multi-Warehouse Logistics', 'Dedicated API Access', 'Priority 2-Hour Support'], isRecommended: false },
                    { title: 'Restaurant Elite', price: '55,000', description: 'Tailored for cafes and high-volume dining.', features: ['KOT Kitchen Printing', 'Table Management Grid', 'Recipe/Ingredient Costing', 'Waiter App Integration', 'Split-Bill & Dynamic Tax', 'QR Menu Ordering'], isRecommended: false }
                ],
                jobs: [
                    { title: 'Senior Full Stack Developer', location: 'Colombo, Sri Lanka (On-site)', type: 'Full-time', department: 'Engineering', description: 'We are looking for an experienced Full Stack Developer to join our team and help build innovative solutions for our clients.', requirements: ['Minimum 5 years experience', 'React, Spring Boot, and TypeScript', 'Cloud platforms (AWS/Azure/GCP)', 'Excellent problem-solving'] },
                    { title: 'UX/UI Designer', location: 'Remote', type: 'Full-time', department: 'Design', description: 'Join our design team to create beautiful and intuitive user experiences for web and mobile applications.', requirements: ['Minimum 3 years experience', 'Proficiency in Figma', 'Web and mobile design portfolio', 'User research and testing'] },
                    { title: 'Product Manager', location: 'Remote', type: 'Full-time', department: 'Product', description: 'Lead product strategy and development for our enterprise solutions, working closely with clients and development teams.', requirements: ['Minimum 5 years experience', 'Strong technical background', 'Excellent stakeholder management', 'Agile methodologies'] }
                ],
                websiteServices: [
                    { icon: 'Code', title: 'Software Development', description: 'Enterprise-grade software solutions built with cutting-edge technologies and best practices.', features: ['Custom Software Solutions', 'Enterprise Applications', 'Microservices', 'API Development'] },
                    { icon: 'Layout', title: 'UI/UX Design', description: 'User-centered design solutions that create engaging and intuitive interfaces.', features: ['User Interface Design', 'User Experience Design', 'Wireframing', 'Design Systems'] },
                    { icon: 'Server', title: 'Web Development', description: 'Modern web applications built with Next.js and Spring Boot.', features: ['Full-stack Development', 'RESTful APIs', 'Real-time Applications'] },
                    { icon: 'Cloud', title: 'Cloud Services', description: 'Comprehensive cloud solutions leveraging AWS, Azure, and Google Cloud.', features: ['Cloud Migration', 'Container Orchestration', 'DevOps & CI/CD'] },
                    { icon: 'Shield', title: 'Security & Compliance', description: 'Enterprise-grade security solutions to protect your applications and data.', features: ['Security Audits', 'Penetration Testing', 'Compliance'] },
                    { icon: 'Cpu', title: 'Custom Software Solutions', description: 'Robust backend solutions using Spring Boot and modern technologies.', features: ['Database Design', 'Performance Optimization'] }
                ],
                testimonials: [
                    { rating: 5, text: "I recently had a website developed and I couldn't be happier with the experience. The team was extremely professional.", name: 'Mr. Chamathka Nimsara', role: 'CEO, outbaze' },
                    { rating: 5, text: "The team behind Cinetoon's website did an outstanding job! They delivered a fast, responsive site.", name: 'Mr. Thathsara Dananjana', role: 'CEO, CINETOON' },
                    { rating: 5, text: "A true technology partner that understands our business needs. Their solutions have significantly improved our efficiency.", name: 'Michael Chen', role: 'Director, Global Solutions' }
                ],
                values: [
                    { icon: 'Trophy', title: 'Excellence', description: 'We strive for excellence in everything we do, from code quality to client service.' },
                    { icon: 'Target', title: 'Innovation', description: 'Constantly exploring new technologies and approaches to solve complex problems.' },
                    { icon: 'Users', title: 'Collaboration', description: 'Working together with our clients to achieve the best possible outcomes.' },
                    { icon: 'Rocket', title: 'Growth', description: 'Committed to continuous learning and professional development.' }
                ],
                team: [
                    { name: 'Chamithu Ruberu', role: 'CEO & Founder', image: '/team/john-smith.jpg', bio: 'With over 5 years of experience in software development and business leadership.' },
                    { name: 'Sarah Johnson', role: 'CTO', image: '/team/sarah-johnson.jpg', bio: 'Expert in cloud architecture and emerging technologies.' },
                    { name: 'Michael Chen', role: 'Lead Developer', image: '/team/michael-chen.jpg', bio: 'Full-stack developer with a passion for clean code and innovation.' },
                    { name: 'Emily Brown', role: 'UX Director', image: '/team/emily-brown.jpg', bio: 'Creating user-centered designs that drive engagement and satisfaction.' }
                ],
                brands: [
                    { name: 'AVAIRA', logo: '/brands/avaira.png' },
                    { name: 'CINETOON', logo: '/brands/cinetoon.jpg' },
                    { name: 'KUMARA ENTERPRISES', logo: '/brands/kumara_enterprises.jpg' },
                    { name: 'PROMANAGEX', logo: '/brands/py_logo.png' },
                ],
                portfolio: [
                    { title: 'Kumara Enterprises', category: 'POS Desktop POS', image: '/portfolio/kumara_pos.png', description: 'Comprehensive POS implementation for a retail chain.', features: ['User Management', 'Order Processing', 'Product Management', 'Loyalty Card System'], link: '', technologies: ['Next.js', 'PostgreSQL'] },
                    { title: 'FIT PRO System', category: 'Desktop + Cloud', image: '/portfolio/gym.png', description: 'Gym management and billing system.', features: ['Customer Satisfaction focus', 'Administrative tasks automation', 'Inventory tracking'], link: '', technologies: ['React', 'Node.js'] },
                    { title: 'Enterprise Management System', category: 'Cloud Base Enterprise', image: '/portfolio/image.png', description: 'Scalable management for multi-branch operations.', features: ['Multi-branch management', 'Advanced analytics', 'Cloud infrastructure'], link: '', technologies: ['Java', 'Spring Boot'] },
                    { title: 'NFT Marketplace Platform', category: 'NFT web', image: '/portfolio/Gemini_Generated_Image_6g09cz6g09cz6g09.png', description: 'Web3 platform for digital art trading.', features: ['Blockchain integration', 'Wallet connectivity', 'Smart contracts'], link: '', technologies: ['Solidity', 'Ethereum'] },
                    { title: 'CINETOON', category: 'Mobile development', image: '/portfolio/Gemini_Generated_Image_5ev5q5ev5q5ev5q5.png', description: 'Entertainment and animation mobile application.', features: ['200,000+ Downloads', 'Increased engagement', 'Seamless experience'], link: '', technologies: ['Flutter', 'Firebase'] }
                ],
                hardwareHero: [
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
                ],
                hardwareCategories: [
                    { id: 'pos', name: 'POS Systems', icon: 'Monitor' },
                    { id: 'printers', name: 'Thermal Printers', icon: 'Printer' },
                    { id: 'scanners', name: 'Scanning & Barcode', icon: 'ScanLine' },
                    { id: 'cash', name: 'Cash Management', icon: 'Calculator' },
                    { id: 'paper_rolls', name: 'POS Paper Rolls', icon: 'Package' }
                ],
                hardware: [
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
                    },
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
                ]
            });
        }

        // Merge defaults for any missing sections
        const result = data.toObject ? data.toObject() : data;

        const defaults: Record<string, any[]> = {
            websiteServices: [
                { icon: 'Code', title: 'Software Development', description: 'Enterprise-grade software solutions built with cutting-edge technologies and best practices.', features: ['Custom Software Solutions', 'Enterprise Applications', 'Microservices', 'API Development'] },
                { icon: 'Layout', title: 'UI/UX Design', description: 'User-centered design solutions that create engaging and intuitive interfaces.', features: ['User Interface Design', 'User Experience Design', 'Wireframing', 'Design Systems'] },
                { icon: 'Server', title: 'Web Development', description: 'Modern web applications built with Next.js and Spring Boot.', features: ['Full-stack Development', 'RESTful APIs', 'Real-time Applications'] },
                { icon: 'Cloud', title: 'Cloud Services', description: 'Comprehensive cloud solutions leveraging AWS, Azure, and Google Cloud.', features: ['Cloud Migration', 'Container Orchestration', 'DevOps & CI/CD'] },
                { icon: 'Shield', title: 'Security & Compliance', description: 'Enterprise-grade security solutions to protect your applications and data.', features: ['Security Audits', 'Penetration Testing', 'Compliance'] },
                { icon: 'Cpu', title: 'Custom Software Solutions', description: 'Robust backend solutions using Spring Boot and modern technologies.', features: ['Database Design', 'Performance Optimization'] }
            ],
            testimonials: [
                { rating: 5, text: "I recently had a website developed and I couldn't be happier with the experience. The team was extremely professional.", name: 'Mr. Chamathka Nimsara', role: 'CEO, outbaze' },
                { rating: 5, text: "The team behind Cinetoon's website did an outstanding job! They delivered a fast, responsive site.", name: 'Mr. Thathsara Dananjana', role: 'CEO, CINETOON' },
                { rating: 5, text: "A true technology partner that understands our business needs. Their solutions have significantly improved our efficiency.", name: 'Michael Chen', role: 'Director, Global Solutions' }
            ],
            values: [
                { icon: 'Trophy', title: 'Excellence', description: 'We strive for excellence in everything we do, from code quality to client service.' },
                { icon: 'Target', title: 'Innovation', description: 'Constantly exploring new technologies and approaches to solve complex problems.' },
                { icon: 'Users', title: 'Collaboration', description: 'Working together with our clients to achieve the best possible outcomes.' },
                { icon: 'Rocket', title: 'Growth', description: 'Committed to continuous learning and professional development.' }
            ],
            team: [
                { name: 'Chamithu Ruberu', role: 'CEO & Founder', image: '/team/john-smith.jpg', bio: 'With over 5 years of experience in software development and business leadership.' },
                { name: 'Sarah Johnson', role: 'CTO', image: '/team/sarah-johnson.jpg', bio: 'Expert in cloud architecture and emerging technologies.' },
                { name: 'Michael Chen', role: 'Lead Developer', image: '/team/michael-chen.jpg', bio: 'Full-stack developer with a passion for clean code and innovation.' },
                { name: 'Emily Brown', role: 'UX Director', image: '/team/emily-brown.jpg', bio: 'Creating user-centered designs that drive engagement and satisfaction.' }
            ],
            brands: [
                { name: 'AVAIRA', logo: '/brands/avaira.png' },
                { name: 'CINETOON', logo: '/brands/cinetoon.jpg' },
                { name: 'KUMARA ENTERPRISES', logo: '/brands/kumara_enterprises.jpg' },
                { name: 'PROMANAGEX', logo: '/brands/py_logo.png' },
            ],
            hardwareCategories: [
                { id: 'pos', name: 'POS Systems', icon: 'Monitor' },
                { id: 'printers', name: 'Thermal Printers', icon: 'Printer' },
                { id: 'scanners', name: 'Scanning & Barcode', icon: 'ScanLine' },
                { id: 'cash', name: 'Cash Management', icon: 'Calculator' },
                { id: 'paper_rolls', name: 'POS Paper Rolls', icon: 'Package' }
            ],
            hardwareHero: [
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
            ],
        };

        // Fill in any missing/empty arrays with defaults
        for (const [key, defaultValue] of Object.entries(defaults)) {
            if (!result[key] || result[key].length === 0) {
                result[key] = defaultValue;
            }
        }

        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await connectDB();
        const body = await request.json();

        // For simplicity, we just save a new document or update the latest
        const data = await PortalData.findOneAndUpdate(
            {}, // filter
            body, // update
            { upsert: true, new: true } // options
        );

        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
