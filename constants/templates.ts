// Define the shape of a single template object
export interface Template {
    src: string;
    title: string;
    description: string;
    tokenCost: number;
}

// Data for Web 2.0 templates - Updated with new images bg1.jpg - bg20.jpg
export const web2_templates: Template[] = [
    { src: '/bg1.jpg', title: 'Web 2.0 Portfolio', description: 'A sleek, modern portfolio perfect for developers and designers.', tokenCost: 100 },
    { src: '/bg2.jpg', title: 'E-commerce Store', description: 'A feature-rich storefront with a clean user interface.', tokenCost: 150 },
    { src: '/bg3.jpg', title: 'SaaS Landing Page', description: 'Capture leads with this professional and engaging landing page.', tokenCost: 120 },
    { src: '/bg4.jpg', title: 'Agency Website', description: 'Showcase your company\'s services and projects.', tokenCost: 200 },
    { src: '/bg5.jpg', title: 'Blog Platform', description: 'A content-focused design for writers and publishers.', tokenCost: 80 },
    { src: '/bg6.jpg', title: 'Mobile App Showcase', description: 'A dedicated page to highlight your mobile application.', tokenCost: 90 },
    { src: '/bg7.jpg', title: 'Creative Studio', description: 'A visually-driven site for creative agencies.', tokenCost: 110 },
    { src: '/bg8.jpg', title: 'Restaurant Booking', description: 'An elegant solution for online reservations and menus.', tokenCost: 130 },
    { src: '/bg9.jpg', title: 'Online Course Hub', description: 'Platform to host and sell educational content.', tokenCost: 180 },
    { src: '/bg10.jpg', title: 'Real Estate Listings', description: 'A professional site for property listings.', tokenCost: 160 },
    { src: '/bg11.jpg', title: 'Fitness & Wellness', description: 'Engaging design for gyms, trainers, and wellness coaches.', tokenCost: 95 },
    { src: '/bg12.jpg', title: 'Digital Magazine', description: 'A modern layout for online publications.', tokenCost: 85 },
    { src: '/bg13.jpg', title: 'Corporate Site', description: 'A clean and professional template for businesses.', tokenCost: 140 },
    { src: '/bg14.jpg', title: 'Travel Blog', description: 'Share your adventures with this stunning travel blog template.', tokenCost: 75 },
    { src: '/bg15.jpg', title: 'Podcast Platform', description: 'Showcase your podcast with episode lists and player integration.', tokenCost: 105 },
    { src: '/bg16.jpg', title: 'Startup Landing Page', description: 'A compelling page to attract investors and early users.', tokenCost: 125 },
    { src: '/bg17.jpg', title: 'Event Promotion', description: 'Promote your conference or event with a dedicated site.', tokenCost: 115 },
    { src: '/bg18.jpg', title: 'Photography Portfolio', description: 'A beautiful, image-focused portfolio for photographers.', tokenCost: 135 },
    { src: '/bg19.jpg', title: 'Non-Profit Organization', description: 'A template to drive donations and awareness for a cause.', tokenCost: 90 },
    { src: '/bg20.jpg', title: 'Musician/Band Page', description: 'Promote your music, tour dates, and merchandise.', tokenCost: 100 },
    { src: '/YoutubeClone.png', title: 'Community Forum', description: 'A template for building an online community forum.', tokenCost: 170 },
];

// Data for Web 2.5 templates - uses original placeholders as the new images have been used
export const web2_5_templates: Template[] = [
    { src: '/TravelWebsite.png', title: 'Hybrid E-commerce', description: 'Combines centralized speed with decentralized trust features.', tokenCost: 250 },
    { src: '/YoutubeClone.png', title: 'Decentralized Social Feed', description: 'A social media platform where users control their data.', tokenCost: 300 },
    { src: '/FigmaClone.png', title: 'Token-Gated Content Platform', description: 'Restrict access to content based on token ownership.', tokenCost: 280 },
    // ... rest of web2_5_templates data
];

// Data for Web 3.0 templates - uses original placeholders
export const web3_templates: Template[] = [
    { src: '/YoutubeClone.png', title: 'Full DAO Platform', description: 'A complete solution for launching and managing a DAO.', tokenCost: 500 },
    { src: '/FigmaClone.png', title: 'NFT Marketplace', description: 'A marketplace for minting, buying, and selling NFTs.', tokenCost: 450 },
    // ... rest of web3_templates data
];

// A combined array of all templates for easy searching and infinite scroll
export const allTemplates = [...web2_templates, ...web2_5_templates, ...web3_templates];