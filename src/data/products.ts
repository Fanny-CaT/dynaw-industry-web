import type { Product, Category, FAQItem, ServiceSection } from '@/types';

export const categories: Category[] = [
  {
    id: 'sports-wear',
    name: 'Sports Wear',
    slug: 'sports-wear',
    image: '/assets/categories/asset_1.jpg',
    productCount: 141,
    subcategories: ['Baseball Uniforms', 'Basketball Uniforms', 'American Football Uniforms', '7 On 7 Uniforms', 'Tackle Uniforms', 'Cheer Leading Uniforms'],
  },
  {
    id: 'casual-wear',
    name: 'Casual Wear',
    slug: 'casual-wear',
    image: '/assets/categories/asset_2.jpg',
    productCount: 57,
    subcategories: ['Men Hoodies', 'Men Sweatshirts', 'Polo Shirts', 'Shorts', 'Summer Short Set', 'Sweat Pants', 'T-Shirts', 'Tracksuits'],
  },
  {
    id: 'fitness-wear',
    name: 'Fitness Wear',
    slug: 'fitness-wear',
    image: '/assets/categories/asset_3.jpg',
    productCount: 66,
    subcategories: ['Fitness Shorts', 'Fitness Tracksuits', 'Gym Bra', 'Gym T-Shirts', 'Rash Guards', 'Sleeveless Hoodies', 'Tank Tops', 'Women Leggings', 'Yoga Sets'],
  },
  {
    id: 'bags',
    name: 'Bags',
    slug: 'bags',
    image: '/assets/categories/asset_4.jpg',
    productCount: 42,
    subcategories: ['Duffle Bags', 'Travel Bags'],
  },
  {
    id: 'jackets',
    name: 'Jackets',
    slug: 'jackets',
    image: '/assets/categories/asset_5.jpg',
    productCount: 61,
    subcategories: ['Bomber Jackets', 'Coach Jackets', 'Hooded Jackets', 'Varsity Jackets'],
  },
  {
    id: 'sublimation-garments',
    name: 'Sublimation Garments',
    slug: 'sublimation-garments',
    image: '/assets/categories/asset_6.jpg',
    productCount: 86,
    subcategories: ['Sublimation Shirts', 'Sublimation Shorts'],
  },
];

export const products: Product[] = [
  {
    id: '1', slug: '7-on-7-uniform-1', name: '7 On 7 Uniform', category: 'Sports Wear', subcategory: '7 On 7 Uniforms',
    price: 0, image: '/assets/products/asset_1.png', images: ['/assets/products/asset_1.png', '/assets/products/asset_1.png', '/assets/products/asset_1.png'],
    badge: 'HOT', hot: true,
    sku: '1404',
    description: 'High-performance 7 on 7 football uniform with breathable fabric.',
    details: ['Characteristics: Attributable to the environment, breathable, oversized', 'Technics: Embroidery, Print, Sublimation', 'Material: 100% Polyester, Spandex', 'Completely Sublimated - Will Not Shrink At All', 'The Ideal 7on7 Football Jersey Or Uniform', 'Logos & Tags: Tackle twill, Chrome Embroidery, as well as woven labels & tags on the collar and front body are available options.'],
  },
  {
    id: '2', slug: 'american-football-uniform-1', name: 'American Football Uniform', category: 'Sports Wear', subcategory: 'American Football Uniforms',
    price: 0, image: '/assets/products/asset_2.png', images: ['/assets/products/asset_2.png'],
    badge: 'HOT', hot: true,
    sku: '1405',
    description: 'Professional American football uniform set.',
    details: ['Material: Double Knitted Polyester', 'Sublimated design - colors won\'t fade', 'Custom team names, numbers, and logos', 'Breathable and moisture-wicking fabric'],
  },
  {
    id: '3', slug: 'american-football-uniform-2', name: 'American Football Uniform', category: 'Sports Wear', subcategory: 'American Football Uniforms',
    price: 0, image: '/assets/products/asset_3.png', images: ['/assets/products/asset_3.png'],
    badge: 'HOT', hot: true,
    sku: '1406',
    description: 'Red and black American football uniform.',
    details: ['Material: Double Knitted Polyester', 'Custom design options available', 'Durable stitching for intense gameplay', 'Available in all sizes'],
  },
  {
    id: '4', slug: 'baseball-uniform-1', name: 'Baseball Uniform', category: 'Sports Wear', subcategory: 'Baseball Uniforms',
    price: 0, image: '/assets/products/asset_4.png', images: ['/assets/product-detail/asset_1.png', '/assets/product-detail/asset_2.png', '/assets/product-detail/asset_3.png'],
    badge: 'HOT', hot: true,
    sku: '1009',
    description: 'Classic baseball uniform with professional styling.',
    details: ['Material: Double Knitted Polyester', 'Tailor Team name, player name, digits, hue, format', 'Technical matters: Sublimated / Embroidered / Printed / Tackle Twill', 'Feature: Eco Friendly, Breathable, Can be used after several games', 'Included Items: Shirt/Hose/Garte/Mutze', 'Interlock jersey made of 100% polyester', 'Pants in knicker style feature elastic at the waist and cuffs, finishing at the level of the calves', 'The shirt has a round neck and a button band edged with black piping; it buttons up at the front', 'Short sleeves can be rolled up to your liking', 'Webbing belt features a brass-tone metal buckle and slides through the belt loops of pants', 'The baseball cap features a hook-and-loop size-adjustment band at the back'],
  },
  {
    id: '5', slug: 'basketball-uniform-1', name: 'Basketball Uniform', category: 'Sports Wear', subcategory: 'Basketball Uniforms',
    price: 0, image: '/assets/products/asset_5.png', images: ['/assets/products/asset_5.png'],
    badge: 'HOT', hot: true,
    sku: '1410',
    description: 'Vibrant basketball uniform for teams.',
    details: ['Lightweight breathable fabric', 'Full sublimation printing', 'Custom names and numbers', 'Available in multiple color schemes'],
  },
  {
    id: '6', slug: 'bomber-jacket-1', name: 'Bomber Jacket', category: 'Jackets', subcategory: 'Bomber Jackets',
    price: 0, image: '/assets/products/asset_6.png', images: ['/assets/products/asset_6.png'],
    badge: 'HOT', hot: true,
    sku: '2001',
    description: 'Classic bomber jacket with modern fit.',
    details: ['Premium quality materials', 'Ribbed cuffs and hem', 'Front zipper closure', 'Available in multiple colors'],
  },
  {
    id: '7', slug: 'cheer-leading-uniform-1', name: 'Cheer Leading Uniform', category: 'Sports Wear', subcategory: 'Cheer Leading Uniforms',
    price: 0, image: '/assets/products/asset_7.png', images: ['/assets/products/asset_7.png'],
    badge: 'HOT', hot: true,
    sku: '1411',
    description: 'Stylish cheerleading uniform set.',
    details: ['Stretch fabric for flexibility', 'Custom team colors', 'Durable construction', 'Comfortable fit for performance'],
  },
  {
    id: '8', slug: 'coach-jacket-1', name: 'Coach Jacket', category: 'Jackets', subcategory: 'Coach Jackets',
    price: 0, image: '/assets/products/asset_8.png', images: ['/assets/products/asset_8.png'],
    badge: 'HOT', hot: true,
    sku: '2002',
    description: 'Professional coach jacket.',
    details: ['Water-resistant material', 'Button-front closure', 'Team logo customization', 'Side pockets'],
  },
];

// More products section
export const moreProducts: Product[] = [
  { ...products[0], id: '9', slug: '7-on-7-uniform-2', image: '/assets/more-products/asset_1.png', images: ['/assets/more-products/asset_1.png'] },
  { ...products[0], id: '10', slug: '7-on-7-uniform-3', name: '7 On 7 Uniform', image: '/assets/more-products/asset_2.png', images: ['/assets/more-products/asset_2.png'] },
  { ...products[0], id: '11', slug: '7-on-7-uniform-4', name: '7 On 7 Uniform', image: '/assets/more-products/asset_3.png', images: ['/assets/more-products/asset_3.png'] },
  { ...products[0], id: '12', slug: '7-on-7-uniform-5', name: '7 On 7 Uniform', image: '/assets/more-products/asset_4.png', images: ['/assets/more-products/asset_4.png'] },
  { ...products[0], id: '13', slug: '7-on-7-uniform-6', name: '7 On 7 Uniform', image: '/assets/more-products/asset_5.png', images: ['/assets/more-products/asset_5.png'] },
  { ...products[0], id: '14', slug: '7-on-7-uniform-7', name: '7 On 7 Uniform', image: '/assets/more-products/asset_6.png', images: ['/assets/more-products/asset_6.png'] },
  { ...products[0], id: '15', slug: '7-on-7-uniform-8', name: '7 On 7 Uniform', image: '/assets/more-products/asset_7.png', images: ['/assets/more-products/asset_7.png'] },
];

// Category page products
export const categoryProducts: Product[] = [
  { ...products[3], id: 'c1', image: '/assets/category-products/asset_1.png' },
  { ...products[3], id: 'c2', slug: 'baseball-uniform-2', name: 'Baseball Uniform', image: '/assets/category-products/asset_2.png' },
  { ...products[3], id: 'c3', slug: 'baseball-uniform-3', name: 'Baseball Uniform', image: '/assets/category-products/asset_3.png' },
  { ...products[3], id: 'c4', slug: 'baseball-uniform-4', name: 'Baseball Uniform', image: '/assets/category-products/asset_4.png' },
  { ...products[3], id: 'c5', slug: 'baseball-uniform-5', name: 'Baseball Uniform', image: '/assets/category-products/asset_5.png' },
  { ...products[3], id: 'c6', slug: 'baseball-uniform-6', name: 'Baseball Uniform', image: '/assets/category-products/asset_6.png' },
  { ...products[3], id: 'c7', slug: 'baseball-uniform-7', name: 'Baseball Uniform', image: '/assets/category-products/asset_7.png' },
  { ...products[3], id: 'c8', slug: 'baseball-uniform-8', name: 'Baseball Uniform', image: '/assets/category-products/asset_8.png' },
];

export const relatedProducts: Product[] = [
  { ...products[3], id: 'r1', slug: 'baseball-uniform-related', name: 'Baseball Uniform', image: '/assets/product-detail/asset_5.png' },
  { ...products[2], id: 'r2', slug: 'tackle-uniform-1', name: 'Tackle Uniform', category: 'Sports Wear', subcategory: 'Tackle Uniforms', image: '/assets/product-detail/asset_6.png' },
  { ...products[2], id: 'r3', slug: 'tackle-uniform-2', name: 'Tackle Uniform', category: 'Sports Wear', subcategory: 'Tackle Uniforms', image: '/assets/product-detail/asset_7.png' },
  { ...products[4], id: 'r4', slug: 'basketball-uniform-related', name: 'Basketball Uniform', image: '/assets/product-detail/asset_3.png' },
];

// FAQ Data
export const trustedPartnerFAQs: FAQItem[] = [
  { question: 'Do sports wear and uniforms meet international safety standards?', answer: 'Yes, all our sports wear and uniforms are manufactured to meet international safety standards including ISO certification and relevant industry regulations.' },
  { question: 'Are sportswear and uniforms safe for players?', answer: 'Yes, they are generally safe when made with good-quality materials. They\'re designed to be comfortable, breathable, and gentle on the skin so players can move freely without discomfort.' },
  { question: 'What materials are used in good sports uniforms?', answer: 'We use high-quality materials including 100% polyester, spandex blends, moisture-wicking fabrics, and breathable meshes that provide comfort and durability.' },
  { question: 'How can I tell if sportswear is good quality?', answer: 'Good quality sportswear has strong stitching, breathable fabric, colorfast dyes, comfortable fit, and durable construction that withstands repeated washing and intense activity.' },
  { question: 'Can custom uniforms be made safely for all sports?', answer: 'Yes, we design custom uniforms specifically for each sport considering the unique movements, safety requirements, and regulations of that sport.' },
  { question: 'Why does quality matter in sports uniforms?', answer: 'Quality directly impacts player performance, comfort, safety, and team appearance. Poor quality can cause discomfort, restrict movement, and wear out quickly.' },
];

export const contactFAQs: FAQItem[] = [
  { question: 'Will I receive the same product that I see in the picture?', answer: 'Yes, you will receive the same product as shown in the picture. We ensure that all product images are accurate and represent the actual item. However, slight differences in color may occur due to lighting and screen settings.' },
  { question: 'Can I return or exchange a product?', answer: 'Yes, we accept returns and exchanges within 30 days of delivery for unused items in original packaging. Custom orders may have different policies.' },
  { question: 'What materials are used in good sports uniforms?', answer: 'We use premium materials including polyester, spandex, mesh fabrics, and moisture-wicking technologies tailored to each sport\'s requirements.' },
  { question: 'How can I tell if sportswear is good quality?', answer: 'Look for reinforced stitching, quality fabric feel, color consistency, proper sizing, and certifications. Our products undergo rigorous quality checks.' },
  { question: 'Can custom uniforms be made safely for all sports?', answer: 'Absolutely. We create custom uniforms for all major sports following safety standards and sport-specific requirements.' },
  { question: 'Why does quality matter in sports uniforms?', answer: 'Quality affects performance, comfort, durability, and player safety. High-quality uniforms boost confidence and withstand rigorous athletic demands.' },
];

export const faqsPage: FAQItem[] = [
  { question: 'What customization options do you offer for products?', answer: 'We offer a wide range of customization including screen printing, embroidery, sublimation, heat transfer, and applique. You can customize colors, logos, names, numbers, and designs.' },
  { question: 'What is the minimum order quantity for production?', answer: 'Our minimum order quantity varies by product type. Generally, MOQ starts at 20 pieces per design for custom orders. Contact us for specific requirements.' },
  { question: 'How long does the manufacturing and delivery process take?', answer: 'Typical production time is 2-4 weeks depending on order size and complexity. Shipping takes 5-10 business days depending on destination.' },
  { question: 'Do you provide samples before bulk production?', answer: 'Yes, we provide pre-production samples for approval before starting bulk manufacturing. Sample costs are adjusted in the final order.' },
  { question: 'What payment methods and policies do you accept?', answer: 'We accept PayPal, bank transfer, Western Union, and Ria. Payment terms are typically 50% advance and 50% before shipment.' },
  { question: 'Can I request custom designs for my order?', answer: 'Yes, we offer full custom design services. Our design team can work with your concepts or create original designs for your team or brand.' },
  { question: 'What types of fabrics do you use?', answer: 'We use various fabrics including polyester, spandex, cotton blends, mesh, dri-fit, and custom fabrics as per client requirements.' },
  { question: 'Do you offer bulk order discounts?', answer: 'Yes, we offer competitive pricing and discounts for bulk orders. The discount percentage increases with order volume.' },
  { question: 'How do you ensure product quality?', answer: 'We have a comprehensive quality assurance process including pre-production inspections, in-line monitoring, and final inspection before shipment.' },
  { question: 'Can I track my order during production or shipping?', answer: 'Yes, we provide regular updates during production and a tracking number once your order is shipped.' },
];

// Customization sections
export const customizationSections: ServiceSection[] = [
  { number: '01', title: 'CUT & SEW', description: 'Our cut and sew process is based on precision and skilled craftsmanship, where every stitch reflects close attention to detail. From selecting the fabric to the final finishing touches, we offer complete customization to fit, design, and production needs. Our team works hard to provide tailored solutions for team apparel, gloves, jackets, and custom uniforms, ensuring durability, comfort, and a perfect fit for every client.', image: '/assets/customization/asset_2.jpg', imageAlt: 'Cut and Sew Process' },
  { number: '02', title: 'Sublimation Printing', description: 'Our sublimation printing process creates vibrant, high-resolution designs permanently infused into fabric for long-lasting results. It offers rich colors, strong fade resistance, and a smooth lightweight finish for comfort, ideal for sportswear. It allows full customization with detailed patterns and unlimited colors, producing durable, visually appealing garments with consistent quality.', image: '/assets/customization/asset_3.jpg', imageAlt: 'Sublimation Printing' },
  { number: '03', title: 'Original Equipment Manufacturer, or OEM', description: 'As an Original Equipment Manufacturer (OEM), we produce high-quality products tailored to our clients\' exact specifications. From design to final production, we maintain strict control over materials, quality, and craftsmanship to meet industry standards. Our reliable manufacturing process enables businesses to launch branded products with confidence, supported by consistent quality and scalable production solutions.', image: '/assets/customization/asset_4.jpg', imageAlt: 'OEM Manufacturing' },
  { number: '04', title: 'Original Design Manufacturer, or ODM', description: 'As an Original Design Manufacturer (ODM), we offer complete design and manufacturing solutions under one efficient process. Our team develops original concepts, creates prototypes, and produces high-quality products with attention to detail. This allows businesses to launch customized, market-ready products quickly while benefiting from reliable production, consistent quality, and innovative design expertise.', image: '/assets/customization/asset_5.jpg', imageAlt: 'ODM Manufacturing' },
  { number: '05', title: 'Applique & Embroidery', description: 'Our applique and embroidery services add texture, detail, and a premium finish to garments. Using precise stitching and high-quality threads, we create custom logos, patterns, and designs that enhance visual appeal and brand identity. The process ensures durability, lasting color retention, and a professional look that withstands regular wear and washing.', image: '/assets/customization/asset_6.jpg', imageAlt: 'Applique and Embroidery' },
  { number: '06', title: 'Heat Transfer and Screen Printing', description: 'Our heat transfer and screen printing services create bold, high-quality designs with excellent clarity and durability. Screen printing provides vibrant, long-lasting graphics, while heat transfer is ideal for detailed multi-color designs. Both methods ensure strong adhesion, consistent colors, and a professional finish, making them perfect for custom apparel, uniforms, and promotional clothing.', image: '/assets/customization/asset_7.jpg', imageAlt: 'Heat Transfer and Screen Printing' },
  { number: '07', title: 'Packaging & Private Labelling', description: 'Our packaging and private labeling services help strengthen brand identity and product presentation. We provide customized packaging solutions with a professional, premium finish tailored to your brand style. Through private labeling, businesses can display their own logos and branding elements, creating a personalized product identity that enhances customer experience and market recognition.', image: '/assets/customization/asset_7.jpg', imageAlt: 'Packaging and Private Labelling' },
];

// Manufacturing sections
export const manufacturingSections: ServiceSection[] = [
  { number: '01', title: 'Design and Development', description: 'We create 3D samples and CAD mockups based on client specifications to ensure accurate design development. Our team carefully selects approved fabrics while working closely with clients throughout the process. The in-house design team transforms concepts into production-ready technical designs with precision, efficiency, and attention to detail.', image: '/assets/manufacturing/asset_1.jpg', imageAlt: 'Design and Development' },
  { number: '02', title: 'Purchasing Raw Materials', description: 'We source materials responsibly from a trusted supplier network, ensuring ethical and reliable procurement. Our fabrics are performance-based, sustainable, and certified (such as OEKO-TEX and BCI) and fully compliant. All zippers, threads, trimmings, and accessories undergo strict quality testing to ensure durability, safety, and consistent production standards.', image: '/assets/manufacturing/asset_2.jpg', imageAlt: 'Purchasing Raw Materials' },
  { number: '03', title: 'Fabric Testing', description: 'We conduct tests for stretch, shrinkage, and color fastness to ensure fabric durability. For sports materials, we also check sweat resistance, moisture wicking, and UV protection. Detailed laboratory test reports are provided upon request to guarantee quality, performance, and compliance with required standards.', image: '/assets/manufacturing/asset_3.jpg', imageAlt: 'Fabric Testing' },
  { number: '04', title: 'Making Cuts', description: 'Highly precise cutting using laser, guided equipment, or CAD markers, utilizing the fabric completely to reduce wastage.', image: '/assets/manufacturing/asset_4.jpg', imageAlt: 'Making Cuts' },
  { number: '05', title: 'Printing and Adornment', description: 'Screen printing, embroidery, and sublimation are available options. Heat transfer is also offered for flexible designs. We provide high-resolution sublimation for long-lasting branding with unlimited colors, delivering vibrant, detailed, durable results for custom apparel and promotional products.', image: '/assets/manufacturing/asset_5.jpg', imageAlt: 'Printing and Adornment' },
  { number: '06', title: 'Heat Transfer and Screen Printing', description: 'Our heat transfer and screen printing services create bold, high-quality designs with excellent clarity and durability. Screen printing provides vibrant, long-lasting graphics, while heat transfer is ideal for detailed multi-color designs. Both methods ensure strong adhesion, consistent colors, and a professional finish.', image: '/assets/manufacturing/asset_6.jpg', imageAlt: 'Heat Transfer and Screen Printing' },
  { number: '07', title: 'Finishing and Pressing', description: 'Steam pressing for an unwrinkled presentation. Barcodes had been appended, tags attached, and loose ends trimmed.', image: '/assets/manufacturing/asset_7.jpg', imageAlt: 'Finishing and Pressing' },
  { number: '08', title: 'Packaging', description: 'Personalized packaging with logo (if required) and eco-friendly or recyclable options based on customer specifications, available in single or bulk packaging formats.', image: '/assets/manufacturing/asset_7.jpg', imageAlt: 'Packaging' },
  { number: '09', title: 'Shipping and Delivery', description: 'We provide reliable shipping and delivery services, ensuring timely dispatch, safe handling, and secure packaging. Orders are tracked and delivered efficiently to meet customer expectations.', image: '/assets/manufacturing/asset_5.jpg', imageAlt: 'Shipping and Delivery' },
];

// Quality assurance sections
export const qualitySections: ServiceSection[] = [
  { number: '01', title: 'Pre-Production Quality Inspections', description: 'Our pre-production quality inspections ensure every detail is checked before full manufacturing begins. We carefully assess raw materials, fabric consistency, color accuracy, and specifications against approved standards. This stage also includes durability and performance testing to prevent defects. Through thorough checks and sample approvals, we ensure consistent quality and meet client expectations from the start.', image: '/assets/quality/asset_1.jpg', imageAlt: 'Pre-Production Quality Inspections' },
  { number: '02', title: 'Monitoring of In-Line Production', description: 'We monitor workmanship, design placement, and stitching accuracy in real time, immediately correcting any errors to maintain consistent and high-quality output.', image: '/assets/quality/asset_2.jpg', imageAlt: 'Monitoring of In-Line Production' },
  { number: '03', title: 'Final Post-Production Inspection', description: 'Our final post-production inspection ensures each garment meets strict quality standards before dispatch. We check accurate measurements, neat stitching, correct tag placement, precise branding, and consistent print quality to deliver a flawless finished product.', image: '/assets/quality/asset_3.jpg', imageAlt: 'Final Post-Production Inspection' },
  { number: '04', title: 'Quality of Packaging', description: 'We ensure wrinkle-free folding, precise labeling, and secure barcoding, along with protective packaging that protects garments from moisture, damage, and contamination during storage and delivery.', image: '/assets/quality/asset_4.jpg', imageAlt: 'Quality of Packaging' },
  { number: '05', title: 'Printing and Adornment', description: 'Our printing and embellishment process is designed to deliver visually appealing and durable finishes on all garments. Using advanced techniques, we ensure vibrant colors, sharp details, and long-lasting prints that resist fading. From logos and patterns to custom designs, each element is applied with precision, enhancing appearance, strengthening brand identity, and providing a professional, high-quality finish.', image: '/assets/quality/asset_5.jpg', imageAlt: 'Printing and Adornment' },
];
