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
                    { title: 'Desktop Core', price: '24,900', description: 'One-Time Payment. Yours Forever. No WiFi Needed.', features: ['100% Offline Resilience', 'Zero Monthly Subscriptions', 'Basic Inventory Protection', 'One-Click Daily Profit Reports', 'Staff Theft Tracking', 'Lifetime Support Access'], isRecommended: false },
                    { title: 'Growth Hybrid', price: '49,900', description: 'The Sweet Spot. Local Speed Meets Cloud Power.', features: ['Real-time Mobile Sales Dashboard', 'Auto-Cloud Data Backup', 'WhatsApp Digital Receipts', 'Customer Loyalty & Rewards', 'Low-Stock Early Warnings', 'Online-Offline Seamless Sync'], isRecommended: true },
                    { title: 'Enterprise Command', price: '89,900', description: 'Absolute Control for Multi-Branch Empires.', features: ['Unlimited Branch Management', 'Centralised HQ Inventory Control', 'AI-Powered Sales Forecasting', 'Multi-Warehouse Transfer Logic', 'Dedicated Priority SLA', 'Open API for Integrations'], isRecommended: false },
                    { title: 'Restaurant Premium', price: '59,900', description: 'Built for Speed. Master The Rush Hour.', features: ['Direct KOT Kitchen Printing', 'Visual Table Management', 'Smart Recipe & Ingredient Costing', 'Waiter App Integration', 'Split-Bill & Dynamic Tax', 'QR Code Contactless Menus'], isRecommended: false }
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
                    { title: 'Enterprise Management System', category: 'Cloud Base Enterprise', image: '/portfolio/image.png', description: 'Scalable management for multi-branch operations.', features: ['Multi-branch management', 'Advanced analytics', 'Cloud infrastructure'], link: '', technologies: ['Java', 'Spring Boot'] }
                ],
                posPricing: {
                    hero: {
                        headline: 'Don\'t Rent Your POS. Own it Forever.',
                        subheadline: 'Zero Monthly Fees · 100% Offline Resilience · Local Sri Lankan Support. Join 500+ local retail leaders who have eliminated subscription fatigue.',
                        kokoText: 'Available Koko 3-month interest-free splitting',
                        joinText: 'Join 500+ Sri Lankan businesses',
                        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800'
                    },
                    softwarePlans: [
                        { name: 'Lite', price: '24,900', description: 'Small retail & kiosks', features: ['100% Offline Mode', 'Inventory Tracking', 'Daily Sales Reports'], badge: 'Best for Small Shops', isPopular: false },
                        { name: 'Pro', price: '44,900', description: 'Pharmacy & Supermarkets', features: ['Customer Loyalty', 'Low Stock Alerts', 'Multi-Terminal Sync'], badge: 'Most Popular', isPopular: true },
                        { name: 'Max', price: '74,900', description: 'High-volume Restaurants', features: ['KOT Printing', 'Table Management', 'Advanced Analytics'], badge: 'Advanced Features', isPopular: false }
                    ],
                    hardwareBundles: [
                        { name: 'Lite Bundle', price: '145,000', description: 'Standard System', roiText: 'Pays for itself in 4 months', features: ['POS Terminal', 'Thermal Printer', 'Cash Drawer'], image: 'https://images.unsplash.com/photo-1556740753-b2904692b3cd?auto=format&fit=crop&q=80&w=800' },
                        { name: 'Pro Plus', price: '195,000', description: 'Dual Display System', roiText: 'Maximum efficiency', features: ['Dual Screen Terminal', 'High-speed Printer', 'Barcode Scanner'], image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800' }
                    ],
                    savings: {
                        competitorMonthly: '15,000',
                        competitor5Year: '900,000',
                        savingsText: 'SAVE OVER LKR 800,000'
                    }
                },
                hardwareHero: [
                    {
                        badge: 'Authorized Provider',
                        title1: 'Industrial Grade',
                        titleHighlight: 'Hardware Ecosystem.',
                        description: 'Build your perfect checkout stack with our vetted selection of POS terminals, printers, and accessories. Engineered for 24/7 reliability.',
                        features: ['Direct Local Warranty', 'Next-Day Delivery', 'Priority Installation'],
                        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800',
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
                        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800',
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
                        image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800',
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
                        image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800',
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
                        image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=800',
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
                        image: 'https://images.unsplash.com/photo-1556742387-a36c568f6a9e?auto=format&fit=crop&q=80&w=800',
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
                        image: 'https://images.unsplash.com/photo-1556745757-8d76befa174a?auto=format&fit=crop&q=80&w=800',
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
                        image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800',
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
                        image: 'https://images.unsplash.com/photo-1610444583731-9e151d040719?auto=format&fit=crop&q=80&w=800',
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
                        image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800',
                        tag: 'Sale',
                        onSale: true
                    }
                ]
            });
        }

        // Merge defaults for any missing sections
        const result = data.toObject ? data.toObject() : data;

        const defaults: Record<string, any> = {
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
            posPricing: {
                hero: {
                    headline: "Stop Renting. Own Your Profits.",
                    subheadline: "The only system in Sri Lanka with one-time payment and 100% Offline Resilience. No monthly fees, no internet needed, no USD stress.",
                    kokoText: "Pay in 3 Installments with KOKO",
                    joinText: "Join 500+ leaders who stopped renting and started owning.",
                    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
                },
                setups: [
                    {
                        id: 'desktop',
                        label: 'Desktop Standard',
                        description: '"The reliable workhorse for Pharmacists, Groceries & Retailers who want a massive display at the lowest cost."',
                        price: '114,800',
                        features: ['Reliable i3/i5 Tower PC', 'Large 19" LED Monitor', 'Easily service/upgrade anywhere', 'Rugged industrial build']
                    },
                    {
                        id: 'touch',
                        label: 'Professional Touch',
                        description: '"The speed king for busy Restaurants, Cafes & Boutiques. Spill-proof and space-saving."',
                        price: '189,800',
                        features: ['High-Sensitivity Industrial Touch', 'Integrated Bill Printer', 'Fanless & Spill-Proof Design', 'Premium Customer Presence']
                    }
                ],
                softwarePlans: [
                    {
                        name: "Essential Lite",
                        price: "24,900",
                        description: '"Modernize your grocery or small kiosk. Stop manual billing today."',
                        features: ['Direct Receipt Billing', 'Daily Sales Management', 'Offline Local Database', 'Standard Profit Reporting', 'Free Remote Install'],
                        badge: "LKR 0/mo Lifetime",
                        isPopular: false
                    },
                    {
                        name: "Business Pro",
                        price: "44,900",
                        description: '"Master your pharmacy or retail empire. Total stock intelligence."',
                        features: ['Advanced Expiry Tracking', 'Low-Stock Early Warnings', 'Loyalty Rewards & SMS', '24/7 Priority VIP Hotline', 'Batch & Serial Tracking'],
                        badge: "The Pharmacist's Peace of Mind · Most Popular",
                        isPopular: true
                    },
                    {
                        name: "Specialist Max",
                        price: "74,900",
                        description: '"Build for the Restaurant Rush. Zero-latency multi-terminal speed."',
                        features: ['Visual Table Management', 'Direct Kitchen Printing (KOT)', 'Ingredient-Level Costing', 'Multi-Branch HQ Sync', 'Full Enterprise API Access'],
                        badge: "LKR 0/mo Lifetime",
                        isPopular: false
                    }
                ],
                hardwareBundles: [
                    {
                        name: "Desktop Starter Kit",
                        price: "89,900",
                        description: "Industrial Grade Parts",
                        features: ['i3/i5 Optimized PC', '80mm Thermal Printer', 'Automatic Blue-Steel Drawer', '1D Laser Scanner Stack'],
                        roiText: "Ideal for: Pharmacists & Retail counters",
                        image: "https://images.unsplash.com/photo-1556740753-b2904692b3cd?auto=format&fit=crop&q=80&w=800"
                    },
                    {
                        name: "Premium Touch Kit",
                        price: "144,900",
                        description: "Elite Reliability",
                        features: ['15" Industrial Touch', 'Spill-Proof Panel', 'Integrated Printer', 'Advanced 2D Scanner'],
                        roiText: '"If you bill 100 customers daily, saving 5s per order saves you 50+ hours of staff time per year. The Touch system pays for itself in ~3 months through pure efficiency."',
                        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800"
                    }
                ],
                savings: {
                    competitorMonthly: "5,000+",
                    competitor5Year: "300,000+",
                    savingsText: "255,100"
                }
            }
        };

        // Fill in any missing/empty arrays or objects with defaults
        for (const [key, defaultValue] of Object.entries(defaults)) {
            const val = result[key];
            const isEmpty = !val || 
                (Array.isArray(val) && val.length === 0) || 
                (typeof val === 'object' && !Array.isArray(val) && Object.keys(val).length === 0);
            
            if (isEmpty) {
                result[key] = defaultValue;
            } else if (key === 'posPricing' && typeof val === 'object' && !Array.isArray(val)) {
                // deep merge posPricing
                for (const [subKey, subDefault] of Object.entries(defaultValue)) {
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
                        
                        // Special check for images in hardwareBundles if it was an array
                        if (subKey === 'hardwareBundles' && Array.isArray(subVal)) {
                            const defaultBundles = subDefault as any[];
                            subVal.forEach((bundle, idx) => {
                                const defaultBundle = defaultBundles[idx];
                                if (defaultBundle) {
                                    for (const [fieldKey, fieldValue] of Object.entries(defaultBundle)) {
                                        if (bundle[fieldKey] === undefined || bundle[fieldKey] === null || bundle[fieldKey] === '') {
                                            bundle[fieldKey] = fieldValue;
                                        }
                                    }
                                }
                            });
                        }
                    } else if (Array.isArray(subVal) && Array.isArray(subDefault)) {
                        // Merge arrays of objects (softwarePlans, setups, hardwareBundles)
                        subVal.forEach((item, idx) => {
                            const defaultItem = subDefault[idx];
                            if (defaultItem && typeof item === 'object' && item !== null) {
                                for (const [fieldKey, fieldValue] of Object.entries(defaultItem)) {
                                    if (item[fieldKey] === undefined || item[fieldKey] === null || item[fieldKey] === '') {
                                        item[fieldKey] = fieldValue;
                                    }
                                }
                            }
                        });
                    }
                }
            } else if (key === 'welcome' && typeof val === 'object' && !Array.isArray(val)) {
                if (!val.image) val.image = defaultValue.image;
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
