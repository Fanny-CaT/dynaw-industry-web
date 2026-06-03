# Visual & Interactive Design Documentation: Dynaw Industry

This documentation outlines the design tokens, layout grids, components, sitemap, and precise micro-interactions required to build a pixel-perfect, highly premium static replica of `https://dynawindustry.quickwebsols.xyz/`.

---

## 1. Brand Core & Design System

### A. Design System & Aesthetics
* **Theme:** Sport-Industrial B2B Showcase. Alternating sections of deep high-contrast charcoal and clean product grids on white.
* **Vibe:** Highly athletic, premium, responsive, and energetic. Generous breathing room (padding) and soft glowing interactive variables.

### B. Color Palette
| Purpose | HEX Code | RGB Equivalent | HSL Coordinates | Role |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Accent** | `#F4A51C` | `rgb(244, 165, 28)` | `hsl(38, 91%, 53%)` | Sports Gold. Used for highlights, hover transitions, active states, accent icons. |
| **Dark Theme BG** | `#202020` | `rgb(32, 32, 32)` | `hsl(0, 0%, 13%)` | Charcoal Black. Primary background for header top-bar, hero overlay, sections, footer. |
| **Absolute Dark** | `#000000` | `rgb(0, 0, 0)` | `hsl(0, 0%, 0%)` | Heavy headings, links, deep overlays. |
| **Light Canvas** | `#FFFFFF` | `rgb(255, 255, 255)` | `hsl(0, 0%, 100%)` | Product cards, category canvases, detail grids. |
| **Off-White Text** | `#C3C3C3` | `rgb(195, 195, 195)` | `hsl(0, 0%, 76%)` | Body paragraph text on dark backgrounds. |
| **Muted Dark Text** | `#777777` | `rgb(119, 119, 119)` | `hsl(0, 0%, 47%)` | Subtitles, product category breadcrumbs. |
| **Fine Borders** | `#E5E5E5` | `rgb(229, 229, 229)` | `hsl(0, 0%, 90%)` | Card borders, dividers, spec tables. |

### C. Typography Directory
* **Lato (sans-serif):** Main section headings (`h2`). Authority, thickness, geometric stability.
* **Cabin (sans-serif):** Navigation bar menu options, action triggers, product titles, secondary headings.
* **Inter Tight (sans-serif):** Home page paragraph body copy to optimize textual density and readability.
* **Poppins (sans-serif):** Interior storytelling paragraphs (About us) to create premium retail reading layouts.

---

## 2. Page & Layout Directory

The website consists of the following routes:
1. **Homepage (`index.html`):** The primary brand page featuring the Hero slider, Why Choose Us, Category grids, and Product showcases.
2. **Products Catalog (`products.html`):** Grid layout of all available jackets, casual wear, fitness wear, and sportswear, with a functional sidebar filter panel.
3. **About Us (`about.html`):** Deep dive into the company's export profile, sportswear capabilities, and manufacturing team.
4. **Blog (`blog.html`):** Modern masonry layout of sportswear trends and articles.
5. **Portfolio (`portfolio.html`):** Filterable masonry gallery showcasing actual clothing manufacturing output.
6. **Contact Us (`contact.html`):** Direct lead capture form, business coordinates in Sialkot, and live schedule blocks.
7. **Comparison Portal (`compare.html`):** Interactive comparison chart comparing selected product details side-by-side.
8. **Wishlist Center (`wishlist.html`):** Showcase of user-favorited active items.
9. **Cart Overview (`cart.html`):** Detailed review of selected catalog sportswear items.
10. **Checkout Gateway (`checkout.html`):** Direct wholesale shipping and quote form.

---

## 3. High-Fidelity Section & Interaction Guidelines

### Section 1: Hero Banner & "Why Choose Us" Grid
* **Hero Slider:** Smooth background images changing automatically with a custom ripple-like cross-fade transition.
* **Why Choose Us Structure:** Centered PNG image of an athlete surrounded by 4 key points cards (2 on the left, 2 on the right).
* **Animations:**
  * On viewport scroll, cards slide slowly and smoothly from their respective screen boundaries (left and right) into position.
  * Hovering any card triggers a radial gradient glow backdrop (`rgba(244, 165, 28, 0.15)` border glow).
  * Hovering any card triggers a CSS transition that slightly shrinks the center athlete image (`scale(0.95)`), returning it to `scale(1)` when unhovered.

### Section 2: Product Categories
* **Entrance Effect:** Cards fade and slide up from below as the viewport scrolls into the section.
* **Hover Interaction:** The gray textual label at the bottom slides up smoothly, transforming the card into an interactive category preview.

### Section 3: Our Products Grid
* **Entrance Effect:** Cards and section content fade and scale in from a compressed starting size into their grid spots on scroll.
* **Card Interactive Options:**
  1. **Compare (Top-Left):** Toggles to a checked green tick on click. Updates the compare counter. Clicking the tick of a selected product navigates to `compare.html`.
  2. **Quick View (Center Overlay):** Opens a detailed popup modal overlay.
  3. **Wishlist (Top-Right):** Toggles heart fill state. A subsequent click redirects the user to `wishlist.html`.
  4. **Add-to-Cart (Bottom Slider):** Slides up on hover, allowing instant addition of the product to the cart panel.

### Section 4: What We Provide
* **Entrance Effect:** The upper block slides in from the right edge, while the bottom block slides in from the left edge.
* **Hover State:** All headers and key text links smoothly transition to Sports Gold (`#F4A51C`).

### Section 5: Our Company Features
* **Entrance Effect:** Left-hand feature items fade in one-by-one with a staggered cascading delay (`0.2s`, `0.4s`, `0.6s`, etc.).

### Section 6: Trusted Manufacturer Partner
* **Entrance Effect:** Content blocks slide in cleanly.
* **Accordion Interaction:** Stretches to open the selected accordion panel with a smooth `max-height` transition while closing all other open panels. Accordion headers highlight to Sports Gold (`#F4A51C`) on hover.

### Section 7: Sticky Global Header
* **Scroll Transition:** Hides when scrolling down and slides into a sticky fixed position at the top when scrolling up, complete with real-time Ajax wishlist, compare, and sliding cart dropdown panels.

---

## 4. State Management (Client-Side)
* **Cart, Wishlist, Compare States:** Maintained in client memory using `localStorage` to preserve data across navigations.
* **Quick View Modal:** Renders dynamically inside the active page DOM, displaying image sliders, quantity counters, and spec checklists based on the clicked product.
