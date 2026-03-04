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
                    { title: 'Basic POS System', price: '75,000', description: 'Perfect for small shops and startups', features: ['Up to 2 user accounts', 'Up to 1000 products', 'Basic POS & Billing', 'Inventory Management', 'Basic Reports', '2 hours training', '12 months support'], isRecommended: false },
                    { title: 'Standard POS System', price: '120,000', description: 'Best value for growing businesses', features: ['Up to 5 user accounts', 'Unlimited products', 'Barcode scanner support', 'Customer Management', 'Returns & Refunds', 'Advanced Reports', 'Up to 2 terminals', '4 hours training'], isRecommended: true },
                    { title: 'Professional POS System', price: '150,000', description: 'Perfect for expanding businesses', features: ['Up to 10 user accounts', 'Supplier Management', 'Purchase Order Management', 'Credit Sales Management', 'Expense Management', 'Cloud Backup', '6 hours training', 'Priority support'], isRecommended: false },
                    { title: 'Premium POS System', price: '250,000', description: 'Complete enterprise solution', features: ['Multi-store (2 branches)', 'Loyalty Points Program', 'Advanced Analytics', 'Employee Management', 'Accounting Integration', 'Up to 5 terminals', '8 hours training', 'Dedicated support'], isRecommended: false }
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
                portfolio: [
                    { title: 'Kumara Enterprises', category: 'POS', image: '/portfolio/kumara_pos.png', description: 'Comprehensive POS implementation for a retail chain.', features: ['User Management', 'Order Processing', 'Product Management', 'Loyalty Card System'], link: '', technologies: ['Next.js', 'PostgreSQL'] },
                    { title: 'FIT PRO System', category: 'POS', image: '/portfolio/gym.png', description: 'Gym management and billing system.', features: ['Customer Satisfaction focus', 'Administrative tasks automation', 'Inventory tracking'], link: '', technologies: ['React', 'Node.js'] },
                    { title: 'Enterprise Management System', category: 'Enterprise Solutions', image: '/portfolio/image.png', description: 'Scalable management for multi-branch operations.', features: ['Multi-branch management', 'Advanced analytics', 'Cloud infrastructure'], link: '', technologies: ['Java', 'Spring Boot'] },
                    { title: 'NFT Marketplace Platform', category: 'NFT web', image: '/portfolio/Gemini_Generated_Image_6g09cz6g09cz6g09.png', description: 'Web3 platform for digital art trading.', features: ['Blockchain integration', 'Wallet connectivity', 'Smart contracts'], link: '', technologies: ['Solidity', 'Ethereum'] },
                    { title: 'CINETOON', category: 'Mobile development', image: '/portfolio/Gemini_Generated_Image_5ev5q5ev5q5ev5q5.png', description: 'Entertainment and animation mobile application.', features: ['200,000+ Downloads', 'Increased engagement', 'Seamless experience'], link: '', technologies: ['Flutter', 'Firebase'] }
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
