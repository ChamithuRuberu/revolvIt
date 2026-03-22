import mongoose, { Schema, model, models } from 'mongoose';

const StatSchema = new Schema({
    label: String,
    value: String,
    icon: String,
    color: String,
    bg: String,
    growth: String,
});

const ServiceSchema = new Schema({
    name: String,
    status: String,
    expiry: String,
    type: String,
    usage: String,
});

const WebsiteServiceSchema = new Schema({
    title: String,
    description: String,
    icon: String,
    features: [String],
});

const SolutionsSchema = new Schema({
    title: String,
    description: String,
    features: [String],
    image: String,
    icon: String,
    color: String,
});

const PricingSchema = new Schema({
    title: String,
    price: String,
    description: String,
    features: [String],
    isRecommended: Boolean,
});

const JobSchema = new Schema({
    title: String,
    location: String,
    type: String,
    department: String,
    description: String,
    requirements: [String],
});

const PortfolioProjectSchema = new Schema({
    title: String,
    category: String,
    image: String,
    description: String,
    link: String,
    features: [String],
    results: [String],
    technologies: [String],
    testimonial: String,
});

const TestimonialSchema = new Schema({
    rating: Number,
    text: String,
    name: String,
    role: String,
});

const ValueSchema = new Schema({
    icon: String,
    title: String,
    description: String,
});

const TeamMemberSchema = new Schema({
    name: String,
    role: String,
    image: String,
    bio: String,
});

const BrandSchema = new Schema({
    name: String,
    logo: String,
});

const HardwareSchema = new Schema({
    category: String,
    name: String,
    model: String,
    price: String,
    originalPrice: String,
    description: String,
    specs: [String],
    image: String,
    tag: String,
    onSale: Boolean,
});

const HardwareCategorySchema = new Schema({
    id: String,
    name: String,
    icon: String,
});

const HardwareHeroSchema = new Schema({
    badge: String,
    title1: String,
    titleHighlight: String,
    description: String,
    features: [String],
    image: String,
    statusLabel: String,
    statusValue: String,
});

const POSSoftwarePlanSchema = new Schema({
    name: String,
    price: String,
    description: String,
    features: [String],
    badge: String,
    isPopular: Boolean,
});

const POSHardwareBundleSchema = new Schema({
    name: String,
    price: String,
    description: String,
    features: [String],
    roiText: String,
    image: String,
});

const POSSetupSchema = new Schema({
    id: String,
    label: String,
    description: String,
    price: String,
    features: [String],
});

const POSPricingSchema = new Schema({
    hero: {
        headline: String,
        subheadline: String,
        kokoText: String,
        joinText: String,
        image: String,
    },
    setups: [POSSetupSchema],
    softwarePlans: [POSSoftwarePlanSchema],
    hardwareBundles: [POSHardwareBundleSchema],
    savings: {
        competitorMonthly: String,
        competitor5Year: String,
        savingsText: String,
    }
});

const PortalDataSchema = new Schema({
    user: {
        name: String,
        role: String,
        initials: String,
    },
    welcome: {
        title: String,
        description: String,
        image: String,
    },
    stats: [StatSchema],
    services: [ServiceSchema],
    websiteServices: [WebsiteServiceSchema],
    solutions: [SolutionsSchema],
    pricing: [PricingSchema],
    jobs: [JobSchema],
    portfolio: [PortfolioProjectSchema],
    testimonials: [TestimonialSchema],
    values: [ValueSchema],
    team: [TeamMemberSchema],
    brands: [BrandSchema],
    hardwareCategories: [HardwareCategorySchema],
    hardwareHero: [HardwareHeroSchema],
    hardware: [HardwareSchema],
    posPricing: POSPricingSchema,
}, { timestamps: true });

PortalDataSchema.index({ createdAt: -1 });

const PortalData = models.PortalData || model('PortalData', PortalDataSchema);

export default PortalData;
