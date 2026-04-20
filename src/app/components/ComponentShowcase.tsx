import { useState } from 'react';
import Button from './Button';
import Badge from './Badge';
import StatCard from './StatCard';
import Input from './Input';
import SectionHeader from './SectionHeader';
import SimpleFeatureCard from './SimpleFeatureCard';
import PricingCard from './PricingCard';
import TestimonialCard from './TestimonialCard';
import FAQItem from './FAQItem';
import BrandGuidelines from './BrandGuidelines';
import { FileText, Shield, Star, Search, Zap, X, TrendingUp, Clock } from 'lucide-react';

export default function ComponentShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 px-6 py-3 bg-accent text-foreground rounded-full shadow-xl hover:bg-accent/90 transition-all hover:scale-105 font-bold flex items-center gap-2 border-2 border-accent"
      >
        <span>View Components</span>
        <span className="w-6 h-6 bg-foreground/10 rounded-full flex items-center justify-center text-sm font-bold">
          13
        </span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b-2 border-border z-10 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Component Library</h1>
                <p className="text-muted-foreground mt-1 text-sm">
                  Reusable UI components with refined design system - 13 Components Available
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors border-2 border-transparent hover:border-border"
              >
                <X size={24} className="text-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
          {/* Button Component */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">Button</h2>
              <p className="text-muted-foreground font-medium mb-4">
                Primary action component with multiple variants and sizes
              </p>
              <div className="p-6 bg-muted rounded-xl border border-border/60">
                <code className="text-sm text-foreground font-semibold">
                  {`<Button variant="primary|secondary|outline|ghost" size="sm|md|lg">...</Button>`}
                </code>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Component */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">Navigation</h2>
              <p className="text-muted-foreground font-medium mb-4">
                Full-featured navigation header with dropdown menus and mobile responsive design
              </p>
              <div className="p-6 bg-muted rounded-xl border border-border/60">
                <code className="text-sm text-foreground font-semibold">
                  {`<Navigation /> - Fixed header with logo, nav links, dropdown menu, and login button`}
                </code>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">Features</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Clean logo design with "Consulta VIN" branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Main navigation: Consulta VIN, Checar VIN, Checar Placas, Window Sticker, Checar Titulo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Dropdown menu for "Herramientas" with 5 sub-items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Primary CTA "Login" button with user icon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Fully responsive mobile menu with hamburger toggle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Fixed positioning with backdrop blur effect</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-border/60 p-5">
                <h3 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Refined Design</h3>
                <p className="text-foreground text-sm">
                  The Navigation is refined with 64px height (down from 80px), 14px text (down from 16px),
                  and lighter colors (70% opacity) for a cleaner, more modern look. Follows brand guidelines
                  with Navy (#2C234D) and Red (#A51C31) accent colors.
                </p>
              </div>
            </div>
          </section>

          {/* Badge Component */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">Badge</h2>
              <p className="text-muted-foreground font-medium mb-4">
                Label component for categories, tags, and status indicators
              </p>
              <div className="p-6 bg-muted rounded-xl border border-border/60">
                <code className="text-sm text-foreground font-semibold">
                  {`<Badge variant="default|accent|primary" icon={...}>Text</Badge>`}
                </code>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Default Badge</Badge>
              <Badge variant="accent" icon={<Zap size={16} />}>Accent Badge</Badge>
              <Badge variant="primary" icon={<Star size={16} />}>Primary Badge</Badge>
            </div>
          </section>

          {/* StatCard Component */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">StatCard</h2>
              <p className="text-muted-foreground font-medium mb-4">
                Metric display card for statistics, KPIs, and key numbers
              </p>
              <div className="p-6 bg-muted rounded-xl border border-border/60">
                <code className="text-sm text-foreground font-semibold">
                  {`<StatCard value="..." label="..." icon={...} variant="default|primary|accent" />`}
                </code>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">Basic Stats</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                  <StatCard value="99.9%" label="Precisión" />
                  <StatCard value="<30s" label="Entrega" />
                  <StatCard value="60+" label="Verificaciones" />
                  <StatCard value="24/7" label="Soporte" />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">With Icons</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                  <StatCard
                    value="10,000+"
                    label="Usuarios Activos"
                    icon={<TrendingUp className="text-accent" size={24} />}
                    variant="accent"
                  />
                  <StatCard
                    value="50,000+"
                    label="Reportes Generados"
                    icon={<FileText className="text-primary" size={24} />}
                    variant="primary"
                  />
                  <StatCard
                    value="2 años"
                    label="En el Mercado"
                    icon={<Clock className="text-accent" size={24} />}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Input Component */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">Input</h2>
              <p className="text-muted-foreground font-medium mb-4">
                Clean text input field with consistent styling and focus states
              </p>
              <div className="p-6 bg-muted rounded-xl border border-border/60">
                <code className="text-sm text-foreground font-semibold">
                  {`<Input type="text|email|password|number|tel" placeholder="..." value="..." onChange={...} disabled={false} />`}
                </code>
              </div>
            </div>

            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">Default</h3>
                <Input placeholder="Ingresa el VIN de 17 dígitos" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">Input Types</h3>
                <div className="space-y-3">
                  <Input type="text" placeholder="Text input" />
                  <Input type="email" placeholder="Email address" />
                  <Input type="password" placeholder="Password" />
                  <Input type="tel" placeholder="Phone number" />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">Disabled State</h3>
                <Input placeholder="Disabled input" disabled />
              </div>
            </div>
          </section>

          {/* SectionHeader Component */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">SectionHeader</h2>
              <p className="text-muted-foreground font-medium mb-4">
                Consistent header component for page sections
              </p>
              <div className="p-6 bg-muted rounded-xl border border-border/60">
                <code className="text-sm text-foreground font-semibold">
                  {`<SectionHeader badge="..." title={...} description="..." align="center|left" />`}
                </code>
              </div>
            </div>

            <div className="space-y-12">
              <SectionHeader
                badge="Center Aligned"
                title={<>This is a <span className="text-primary">Section Header</span></>}
                description="This component provides consistent styling for section titles with optional badge and description"
                align="center"
              />

              <SectionHeader
                badge="Left Aligned"
                badgeIcon={<Search size={16} />}
                title="Left Aligned Header"
                description="Useful for content-heavy sections or when left alignment is preferred"
                align="left"
              />
            </div>
          </section>

          {/* SimpleFeatureCard Component */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">SimpleFeatureCard</h2>
              <p className="text-muted-foreground font-medium mb-4">
                Minimal feature card with icon, title, and description
              </p>
              <div className="p-6 bg-muted rounded-xl border border-border/60">
                <code className="text-sm text-foreground font-semibold">
                  {`<SimpleFeatureCard icon={...} title="..." description="..." />`}
                </code>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <SimpleFeatureCard
                icon={<FileText className="text-accent" size={28} />}
                title="Feature Title"
                description="This is a simple feature card component with icon and centered text alignment for clean layouts."
              />
              <SimpleFeatureCard
                icon={<Shield className="text-accent" size={28} />}
                title="Another Feature"
                description="Perfect for showcasing key features in a grid layout with consistent spacing."
              />
              <SimpleFeatureCard
                icon={<Star className="text-accent" size={28} />}
                title="Third Feature"
                description="Icons use the accent color (#F9B248) for visual consistency across the design."
              />
            </div>
          </section>

          {/* PricingCard Component */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">PricingCard</h2>
              <p className="text-muted-foreground font-medium mb-4">
                Pricing tier card with features list and CTA button
              </p>
              <div className="p-6 bg-muted rounded-xl border border-border/60">
                <code className="text-sm text-foreground font-semibold">
                  {`<PricingCard name="..." price="..." period="..." description="..." features={[...]} highlighted={true} />`}
                </code>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                name="Básico"
                price="$299"
                period="mes"
                description="Perfecto para empezar"
                features={[
                  'Feature one included',
                  'Feature two included',
                  'Feature three included'
                ]}
              />

              <PricingCard
                name="Profesional"
                price="$799"
                period="mes"
                description="Plan más popular"
                features={[
                  'Everything in Básico',
                  'Advanced feature one',
                  'Advanced feature two',
                  'Priority support'
                ]}
                highlighted
              />

              <PricingCard
                name="Empresarial"
                price="$1,999"
                period="mes"
                description="Para grandes equipos"
                features={[
                  'Everything in Profesional',
                  'Unlimited users',
                  'Custom integrations',
                  'Dedicated support'
                ]}
              />
            </div>
          </section>

          {/* TestimonialCard Component */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">TestimonialCard</h2>
              <p className="text-muted-foreground font-medium mb-4">
                Customer testimonial with star rating
              </p>
              <div className="p-6 bg-muted rounded-xl border border-border/60">
                <code className="text-sm text-foreground font-semibold">
                  {`<TestimonialCard name="..." comment="..." rating={5} />`}
                </code>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <TestimonialCard
                name="John Doe"
                comment="This is an excellent service! The team was very professional and delivered exactly what we needed. Highly recommended."
                rating={5}
              />
              <TestimonialCard
                name="Jane Smith"
                comment="Great experience working with this platform. The reports are detailed and accurate. Worth every peso!"
                rating={4}
              />
            </div>
          </section>

          {/* FAQItem Component */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">FAQItem</h2>
              <p className="text-muted-foreground font-medium mb-4">
                Expandable FAQ accordion item
              </p>
              <div className="p-6 bg-muted rounded-xl border border-border/60">
                <code className="text-sm text-foreground font-semibold">
                  {`<FAQItem question="..." answer="..." />`}
                </code>
              </div>
            </div>

            <div className="max-w-3xl space-y-4">
              <FAQItem
                question="How does this component work?"
                answer="The FAQItem component creates an interactive accordion that expands when clicked to reveal the answer. It includes smooth transitions and clear visual indicators for better UX."
              />
              <FAQItem
                question="Can I customize the styling?"
                answer="Yes, the component uses CSS variables from the theme, making it easy to customize colors and spacing to match your design system. All brand colors are defined in the theme."
              />
              <FAQItem
                question="Is it accessible?"
                answer="The component follows accessibility best practices with proper semantic HTML and keyboard navigation support for better usability."
              />
            </div>
          </section>

          {/* Brand Guidelines & Design System */}
          <BrandGuidelines />
        </div>
      </div>
    </div>
  );
}
