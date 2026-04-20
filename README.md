# Consulta VIN - Next.js Application

Modern VIN checking service website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✅ Next.js 14 App Router
- ✅ TypeScript
- ✅ Tailwind CSS v4
- ✅ Brand Guidelines Compliant
- ✅ Responsive Design
- ✅ 10+ Reusable Components
- ✅ Server & Client Components
- ✅ Bricolage Grotesque + Rubik Fonts

## Brand Colors

- **Primary Red**: #A51C31 - Energy & Action
- **Navy Blue**: #2C234D - Trust & Stability
- **Warm Orange**: #F9B248 - Vibrancy & Approachability
- **Light Gray**: #F5F1FE - Neutral Background
- **Dark Gray**: #4A4A4A - Supporting Text

## Typography

- **Headings**: Bricolage Grotesque (200-800 weights)
- **Body**: Rubik (300-800 weights)

## Getting Started

Install dependencies:

\`\`\`bash
npm install
# or
pnpm install
\`\`\`

Run the development server:

\`\`\`bash
npm run dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
app/
├── components/       # Reusable UI components
│   ├── Navigation.tsx
│   ├── Button.tsx
│   ├── Badge.tsx
│   ├── SectionHeader.tsx
│   ├── FeatureCard.tsx
│   ├── FeatureWithImage.tsx
│   ├── SimpleFeatureCard.tsx
│   ├── ServiceCard.tsx
│   ├── PricingCard.tsx
│   ├── TestimonialCard.tsx
│   ├── FAQItem.tsx
│   └── ComponentShowcase.tsx
├── styles/
│   └── theme.css     # Brand colors & design tokens
├── layout.tsx        # Root layout with fonts
├── page.tsx          # Homepage
└── globals.css       # Global styles

## Components

### Button
4 variants (primary, secondary, outline, ghost) × 3 sizes

### Badge
3 variants for labels and status indicators

### SectionHeader
Consistent section titles with optional badge

### FeatureWithImage
Two-column layout for features with imagery

### SimpleFeatureCard
Minimal icon-based feature cards

### PricingCard
Pricing tiers with highlight option

### And more...

View all components by clicking "View Components" button in the bottom-right corner.

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## License

© 2026 Consulta de VIN. All rights reserved.
