# Technical & Visual Design Documentation: Dynaw Industry
**Website URL:** [https://dynawindustry.quickwebsols.xyz/](https://dynawindustry.quickwebsols.xyz/)  
**Brand Profile:** B2B Sportswear, Casual Wear, Fitness Wear, & Protective Gloves Manufacturer & Exporter  
**Location:** Sialkot, Punjab, Pakistan  
**Platform Infrastructure:** WordPress, WooCommerce, WoodMart Premium Theme, Elementor Page Builder  

---

## Table of Contents
1. [Design System & Aesthetics](#1-design-system--aesthetics)
2. [Color Palette & Contrast Architecture](#2-color-palette--contrast-architecture)
3. [Layout & Structural Hierarchy](#3-layout--structural-hierarchy)
4. [Typography Scale & Typeface Directory](#4-typography-scale--typeface-directory)
5. [Animation, Motion & Transition Guidelines](#5-animation-motion--transition-guidelines)
6. [Interaction Model & Interactive Components](#6-interaction-model--interactive-components)
7. [Information Architecture (Sitemap & Page Audit)](#7-information-architecture-sitemap--page-audit)
8. [Card Component Specifications](#8-card-component-specifications)
9. [Corporate Identity & Contact Information](#9-corporate-identity--contact-information)
10. [Features, Customization Steps & Capabilities List](#10-features-customization-steps--capabilities-list)

---

## 1. Design System & Aesthetics
Dynaw Industry's web design implements a **modern, high-performance, sport-industrial style** tailored for B2B manufacturers. The site is structured using the **WoodMart theme** (a premium WooCommerce design system) on top of the **Elementor Page Builder**.

### Key Aesthetic Pillars:
* **High Contrast Theme:** Employs an alternating dark (Charcoal/Rich Black) and light (Pure White) section design. High-impact athletic imagery is overlaid on dark backgrounds to evoke speed, performance, and durability, while catalog grids sit on clean white backgrounds for optimal readability.
* **B2B Showcase Catalog:** Unlike standard transactional B2C stores, the pricing model is configured as a catalogue showcase. Prices are listed as `$0.00`, signifying that the platform is designed for **RFQ (Request for Quote)**, wholesale, and customization orders.
* **Visual Density:** Balanced spacing with generous borders and subtle overlays, offering a professional corporate manufacturer aesthetic that appeals to athletic clubs, brands, and international distributors.

---

## 2. Color Palette & Contrast Architecture
The color scheme uses a precise visual hierarchy designed to establish sport energy, highlight action triggers, and ensure legibility across heavy data sheets and grids.

| Purpose | HEX Code | RGB Equivalent | Visual Role |
| :--- | :--- | :--- | :--- |
| **Primary Accent** | `#F4A51C` | `rgb(244, 165, 28)` | Sports Gold / Warm Orange. Highlights H2 headings, active menu items, customized values, and choose-us sections. |
| **Dark Theme Background** | `#202020` | `rgb(32, 32, 32)` | Charcoal Black. Used for site footer, hero header backgrounds, dark page overlays, and dark-scheme layout wrappers. |
| **Pure Accent / Text Dark** | `#000000` | `rgb(0, 0, 0)` | Absolute black used for heavy headings, text links, and overlays. |
| **Body Background** | `#FFFFFF` | `rgb(255, 255, 255)` | Pure white. Used as the canvas for product cards, blog page body, and general page grids to maximize clarity. |
| **Off-White Text** | `#C3C3C3` | `rgb(195, 195, 195)` | Light grey. Applied to paragraph texts on dark sections/footers to provide an optimal, low-strain contrast ratio. |
| **Muted Dark Text** | `#777777` | `rgb(119, 119, 119)` | Medium grey. Used for secondary paragraph texts, meta descriptions, categories, and breadcrumbs on light backgrounds. |
| **Borders & Lines** | `#E5E5E5` | `rgb(229, 229, 229)` | Fine grey dividers separating grids, header sections, and product specifications. |

---

## 3. Layout & Structural Hierarchy
The platform's skeleton relies on a flexible, responsive container system designed to support full-width promotional elements alongside structured grids.

### Key Structural Blocks:
1. **The Header (Multi-Row sticky real layout):**
   * Class: `whb-header whb-header_541962 whb-full-width whb-scroll-stick whb-sticky-real whb-hide-on-scroll`
   * **Top Bar:** Houses contact numbers, email, physical location highlights, and language/social links.
   * **Main Bar:** Houses the central brand logo, primary horizontal navigation links, search trigger, wishlist counter, compare counter, shopping cart trigger (`0 items / $0.00`), and user profile entry point.
   * **Sticky Behavior:** Glides into fixed position on scroll up and hides smoothly on scroll down to maximize screen estate.
2. **The Layout Grid System (Row & Column Framework):**
   * Woodmart container framework utilizing flexbox grids:
     * **4-Column Grid:** `.col-lg-3 .col-md-3 .col-6` - standard product listing on homepage and catalog. Automatically scales from 4 columns on desktop to 2 columns on mobile devices.
     * **3-Column Grid:** `.col-lg-4 .col-md-4 .col-sm-6 .col-12` - Masonry blog layout and portfolio listings. Scales down to 1 column on mobile.
3. **The Section Spacing:**
   * Alternates between full-width sections for hero banners and boxed container formats for product showcases.
4. **The Footer (Multi-Column Layout):**
   * Class: `footer-container color-scheme-light` with background `rgb(32, 32, 32)`. Divided into structured columns: Company Description, Quick Links, Product Categories, Contact Info with physical Sialkot address, and active newsletter subscription block.

---

## 4. Typography Scale & Typeface Directory
The typography scheme combines geometric modernism (for athletic and corporate identity) with clean sans-serif families (for body text).

### Typeface Directory:
1. **Lato (`sans-serif`):** The signature header font. Bold, authoritative, and clean. Applied to main section titles (`H2`) and highlights.
2. **Cabin (`Arial, Helvetica, sans-serif`):** Alternative header and link font. Used for main titles, page headers (`H1`), navigation anchors, and metadata tags.
3. **Inter Tight (`sans-serif`):** High-density geometric sans-serif applied to paragraph body blocks on the homepage to elevate readability.
4. **Poppins (`sans-serif`):** Used specifically for paragraph blocks on interior pages like "About Us" to provide an elegant, professional storytelling layout.

### Detailed Typographic Scale:

* **Page Title (H1):**
  * Font Family: `Cabin, Arial, Helvetica, sans-serif`
  * Computed Size: `78px` (on desktop, scales down responsively to `32px` on mobile)
  * Font Weight: `600` (Semi-Bold)
  * Line Height: Normal / 1.1x
  * Color: `rgb(255, 255, 255)` (White, overlaid on dark image banners)
* **Main Section Headers (H2):**
  * Font Family: `Lato, sans-serif`
  * Computed Size: `30px` (Homepage), `50px` to `65px` (About & Contact Hero headers)
  * Font Weight: `600`
  * Color: `rgb(244, 165, 28)` (Gold on dark backgrounds) or `rgb(255, 255, 255)` (White)
* **Sub-section / Component Headers (H3):**
  * Font Family: `Cabin, Arial, Helvetica, sans-serif`
  * Computed Size: `23px` (Home banners) or `14px` / `20px` / `24px` (Product cards, portfolio blocks, and blog items)
  * Font Weight: `600`
  * Color: `rgb(51, 51, 51)` (on light sections) or `rgb(255, 255, 255)` (on dark overlays)
* **Body Text Paragraphs (p):**
  * Font Family: `"Inter Tight", sans-serif` or `Poppins, sans-serif` or `Cabin`
  * Computed Size: `14px` (Standard) or `13.2px` (About us text)
  * Font Weight: `500` (Medium) / `400` (Regular)
  * Color: `rgb(195, 195, 195)` (Light on dark sections) or `rgb(119, 119, 119)` (Muted grey on white sections)
* **Navigation & Action Links (a):**
  * Font Family: `Cabin, Arial, Helvetica, sans-serif`
  * Computed Size: `14px`
  * Font Weight: `400` / `600`
  * Color: `rgb(51, 51, 51)` (Standard light sections) or opacity-reduced white (Header hover links)

---

## 5. Animation, Motion & Transition Guidelines
Motion throughout the platform is optimized for seamless navigation and smooth micro-interactions without causing layout shifts.

* **Header Transition:** When scrolling down, the header shifts its coordinates and background opacity smoothly, and slides back down from top offset `0px` on scrolling up.
* **Link & Button Hover Transitions:** Buttons, anchors, and icons implement a standard cubic-bezier transition:
  * Computed CSS Rule: `transition: 0.25s ease` or `transition: 0.3s ease`
  * Behaviors: Background colors blend, text colors shift, or box shadows expand in exactly `250ms`, providing immediate yet soft visual feedback.
* **Card Motion Effects:** Hovering over a WooCommerce product card trigger elements:
  * Subtle card outline shadows expand.
  * Image transitions: Product thumbnail slides to reveal alternative angles or scales up slightly.
  * Overlay buttons (Add to cart, Wishlist, Compare, Quick View) slide in from the bottom or fade in with offset translations.
* **Mobile Menu & Cart Slide-ins:** When clicking the mobile hamburger menu or the desktop cart icon, a container transitions in horizontally from the right/left edges of the screen in `300ms` with ease-out timing.

---

## 6. Interaction Model & Interactive Components
The interactive architecture features optimized touch/click zones and tools designed to facilitate direct business acquisition.

* **Chaty WhatsApp Floating Support Widget:**
  * Active component on the bottom-right corner. It features the WhatsApp bubble branding and direct link triggers.
  * Target Address: `https://web.whatsapp.com/send?phone=9234571551445&text=`
  * Behavior: On mobile, it triggers the WhatsApp application instantly; on desktop, it opens WhatsApp Web, pointing directly to sales/support in Sialkot, Pakistan.
* **Search Overlay Trigger:** Clicking the search icon brings up a responsive full-screen search widget overlay (`wd-search-form wd-header-search-form wd-display-full-screen-2 whb-6j0tb1zsxn20dq1956le`) which darkens the page and allows immediate real-time Ajax filtering of sportswear products.
* **Ajax Slide-out Cart Container:** Sliding panel that previews user-added products in real-time, displays item totals, and provides paths to checkout or quote forms.
* **Wishlist and Compare Engines:** Standard WoodMart engines allowing users to add individual sportswear items to a comparing grid or a permanent wishlist array without reloading the page.

---

## 7. Information Architecture (Sitemap & Page Audit)
We conducted an automated audit of the six primary pages. The site structure comprises the following core routes:

### 1. Home (`/`)
* **Purpose:** Primary brand hub and product catalog gateway.
* **Key Content Blocks:** Hero sportswear banners, "Why Choose Dynaw Industry" feature showcase, "About Us" brief, Product Category grids, "Your Style, Your Design" custom uniform section, "Dedicated to Excellence" statement, "Customize Your Order" workflow, and client testimonials.
* **Section Count:** 21 elements.

### 2. Our Products (`/our-poducts/`)
* **Note:** Note the technical typo in the slug (`/our-poducts/` instead of `/our-products/`).
* **Purpose:** Main WooCommerce store and catalog matrix.
* **Key Content Blocks:** Hero catalog heading, primary sidebar filtering (categories, sizes, gloves, colors), layout grid showing available jackets, sportswear, and casual garments with quote markers ($0.00).

### 3. About Us (`/about-us-3/`)
* **Note:** The route is registered with theme import suffix (`/about-us-3/`).
* **Purpose:** Corporate storytelling and certification pitch.
* **Key Content Blocks:** Large typography hero, "What We Provide" catalog introduction, manufacturing capacity highlights ("Your Style, Your Design" and "Dedicated to Excellence"), "Who We Are" team grid. Very low card count (0) focusing on heavy text and graphics.

### 4. Blog (`/blog/`)
* **Purpose:** Organic search driver and updates center.
* **Key Content Blocks:** Masonry article listings.
* **Observation:** The blog page currently features default WordPress/WoodMart template placeholder articles ("Exploring Atlanta's modern homes", "Green interior design inspiration", "Collar brings back coffee brewing ritual", "Reinterprets the classic bookshelf", "Creative water features") indicating the news blog is awaiting content localization.

### 5. Portfolio (`/portfolio/`)
* **Purpose:** Visual factory gallery and manufacturing output gallery.
* **Key Content Blocks:** Interactive masonry tiles.
* **Observation:** Similar to the blog, the portfolio items are placeholder projects from the template, showcasing interior architecture and design elements ("SUSPENDISSE QUAM AT VESTIBULUM", "NETUS EU MOLLIS HAC DIGNIS").

### 6. Contact Us (`/contact-us/`)
* **Purpose:** Custom lead capture and physical location directory.
* **Key Content Blocks:** Hero Banner, "Our Location" detail columns, active interactive coordinates, physical manufacturing schedules, and direct custom WordPress Contact Form 7 integration to capture customer quote parameters.

---

## 8. Card Component Specifications
Cards are utilized as the fundamental visual unit to cluster and display repeatable content models.

### A. Product Cards (WooCommerce / WoodMart)
* **CSS Target:** `.product-grid-item .product`
* **Layout Structure:** Boxed column wrapper, image box, hover overlays, product category, product title, price tag.
* **Default Pricing:** `$0.00` (RFQ Showcase mode).
* **Hover State:** Triggers shadow box expansion (`wd-add-shadow`), replaces or zooms primary image, and brings up action triggers (Wishlist heart, Compare bars, Quick View magnifying glass).
* **Image Delivery:** Implements lazy loading via low-res theme placeholder `lazy.png`, which is replaced with the true compressed `.webp` or `.jpg` crop on viewport scroll.

### B. Blog Cards (News Grid)
* **CSS Target:** `.blog-design-masonry .blog-post-loop .blog-style-bg`
* **Layout Structure:** High-aspect thumbnail image, dark gradient cover, date badge floating on the upper left (`27 AUG`), post title overlay, metadata line ("By Adminspots / 0 Comments").
* **Hover State:** Slight background image zoom (scale up by `1.05x`) with smooth CSS transition.

### C. Portfolio Cards (Gallery Grid)
* **CSS Target:** `.portfolio-entry .portfolio-hover`
* **Layout Structure:** Full image card containing the project thumbnail with a overlay title ("SUSPENDISSE QUAM AT VESTIBULUM") and category tag ("Kitchen" or "Project") centered on overlay.
* **Hover State:** Triggers transition on hover that overlays a translucent colored background block and slides the text up.

---

## 9. Corporate Identity & Contact Information
Extracted from the live codebase across multiple global coordinates, footers, and contact templates:

* **Official Physical Address:** Ruby Villaz, Kashmir Road, Sialkot, Punjab, Pakistan (Sialkot is the global manufacturing epicentre for sports gear, affirming their export profile).
* **Primary Telephone Support:** `+92 345 71551445` or `+92 345 7155145`
* **Primary Emails:**
  * Sales Team: `sales@dynawindustry.com`
  * General Inquiries: `info@dynawindustry.com`
* **Hours of Operation:** Monday - Sunday: 9:00 AM - 6:00 PM (PKT)
* **WhatsApp Link:** `https://web.whatsapp.com/send?phone=9234571551445` (triggers automatic sales router).

---

## 10. Features, Customization Steps & Capabilities List
Based on the brand statements extracted from core blocks, Dynaw Industry focuses on end-to-end custom apparel manufacturing.

### Core Business Capabilities:
1. **Performance-Focused Craftsmanship:** Combines high-comfort, lightweight, and durable athletic fabrics to help athletes train and play confidently.
2. **Unlimited Design Freedom:** Flexible customization system allowing complete coloring flexibility, logo placement, stitching patterns, and player names.
3. **Global Partner Network:** Collaborative shipping and logistics channels designed to export products from Pakistan to sports associations worldwide.

### Four-Step Custom Order Workflow (User Process):
1. **Choose Your Own Product:** Select from an extensive list of catalog sportswear, casual wear, fitness wear, or industrial gloves.
2. **Create Your Own Design:** Utilize layout designs or cooperate with their professional design team to finalize logos, colors, and cuts.
3. **Add Your Personal Details:** Input specific customization elements including team member names, player numbers, decals, or tailored sizes.
4. **Review & Place Order:** Preview the finalized digital mockup or physical sample and submit the specifications for production run.

### Complete Product Categories Catalog:
* **Sports Wear:**
  * Cricket Uniforms, Soccer Uniforms, Rugby Uniforms, Basketball Uniforms, Baseball Uniforms, Ice Hockey Uniforms, Lacrosse Uniforms, Netball Uniforms, Cycling Jerseys, Flag Football Uniforms, Cheer Leading Uniforms, 7 on 7 Uniforms.
* **Casual Wear:**
  * Hoodies, Sweatshirts, Polo Shirts, Shorts, Summer Short Sets, Sweatpants, T-Shirts, Tracksuits.
* **Fitness Wear:**
  * Gym Stringers, Compression Garments, Fitness Shorts, Sports Bras, Tank Tops, Gym Leggings.
* **Gloves Catalog:**
  * Cycling Gloves, Goalkeeper Gloves, Gym Gloves, Mechanics Gloves, Motorbike Gloves, Tactical Gloves.
* **Accessories & Specialty Garments:**
  * Bags, Bomber/Coach Jackets, Sublimation Garments.
