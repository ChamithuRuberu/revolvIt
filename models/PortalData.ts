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
    solutions: [SolutionsSchema],
    pricing: [PricingSchema],
    jobs: [JobSchema],
    portfolio: [PortfolioProjectSchema],
}, { timestamps: true });

const PortalData = models.PortalData || model('PortalData', PortalDataSchema);

export default PortalData;
