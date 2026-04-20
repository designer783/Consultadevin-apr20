import React from 'react';
import { Type, Palette, LayoutGrid, CheckCircle2 } from 'lucide-react';
import Badge from './Badge';

export default function BrandGuidelines() {
  return (
    <div className="space-y-24 pb-20">
      {/* Introduction */}
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-6 text-foreground">Brand Identity</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The Consulta VIN brand is built on three pillars: <span className="text-primary font-bold">Accuracy</span>, 
          <span className="text-foreground font-bold"> Transparency</span>, and <span className="text-accent font-bold"> Speed</span>.
          This system ensures we communicate these values consistently across all touchpoints.
        </p>
      </div>

      {/* Typography Section */}
      <section>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Type className="text-primary" size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground">Typography</h2>
            <p className="text-muted-foreground font-medium">Elevating readability with modern grotesques</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Display Font */}
          <div className="bg-muted/30 p-8 rounded-3xl border border-border/50">
            <Badge variant="primary" className="mb-6">Display Font</Badge>
            <h3 className="text-4xl font-bold mb-4 font-display text-foreground">Bricolage Grotesque</h3>
            <p className="text-muted-foreground mb-8 text-sm max-w-md">
              Used for headings and primary brand statements. It brings a unique, high-contrast personality that commands attention while remaining professional.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-xl border border-border shadow-sm">
                <p className="text-xs text-muted-foreground mb-1 uppercase font-bold tracking-widest">H1 Heading - 52px / Bold</p>
                <h1 className="text-[52px] leading-tight font-bold font-display">Conoce la historia</h1>
              </div>
              <div className="p-4 bg-white rounded-xl border border-border shadow-sm">
                <p className="text-xs text-muted-foreground mb-1 uppercase font-bold tracking-widest">H2 Heading - 36px / Bold</p>
                <h2 className="text-[36px] leading-tight font-bold font-display">Verifica cualquier vehículo</h2>
              </div>
            </div>
          </div>

          {/* Body Font */}
          <div className="bg-muted/30 p-8 rounded-3xl border border-border/50">
            <Badge variant="accent" className="mb-6">Body Font</Badge>
            <h3 className="text-4xl font-bold mb-4 font-body text-foreground">Rubik</h3>
            <p className="text-muted-foreground mb-8 text-sm max-w-md">
              Our workhorse for all functional text. Highly legible, friendly, and geometric, ensuring a seamless reading experience on all screen sizes.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-xl border border-border shadow-sm">
                <p className="text-xs text-muted-foreground mb-1 uppercase font-bold tracking-widest">Body Large - 18px / Regular</p>
                <p className="text-lg font-body leading-relaxed">
                  Obtén reportes completos con datos verificados. Evita fraudes y accidentes ocultos.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-border shadow-sm">
                <p className="text-xs text-muted-foreground mb-1 uppercase font-bold tracking-widest">Body Default - 16px / Regular</p>
                <p className="text-base font-body leading-relaxed">
                  Nuestra plataforma utiliza tecnología de punta para conectar con bases de datos nacionales e internacionales, ofreciendo la información más precisa del mercado mexicano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
            <Palette className="text-accent" size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground">Color Palette</h2>
            <p className="text-muted-foreground font-medium">A high-contrast system for clear hierarchy</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <ColorSwatch 
            name="Primary Red" 
            hex="#A51C31" 
            label="Energy & Action" 
            className="bg-primary text-white" 
          />
          <ColorSwatch 
            name="Brand Navy" 
            hex="#2C234D" 
            label="Trust & Authority" 
            className="bg-foreground text-white" 
          />
          <ColorSwatch 
            name="Accent Orange" 
            hex="#F9B248" 
            label="Vibrancy" 
            className="bg-accent text-foreground" 
          />
          <ColorSwatch 
            name="Brand Light" 
            hex="#F5F1FE" 
            label="Surface" 
            className="bg-muted text-foreground border border-border" 
          />
          <ColorSwatch 
            name="Dark Gray" 
            hex="#4A4A4A" 
            label="Secondary Text" 
            className="bg-[#4A4A4A] text-white" 
          />
        </div>
      </section>

      {/* Spacing & Rhythm Section */}
      <section>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <LayoutGrid className="text-primary" size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground">Layout & Rhythm</h2>
            <p className="text-muted-foreground font-medium">Consistent spacing for a balanced UI</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatBox label="Section Vertical" value="80px" sub="py-20" />
          <StatBox label="Card Radius" value="12px" sub="rounded-xl" />
          <StatBox label="Max Container" value="1280px" sub="max-w-7xl" />
          <StatBox label="Grid Gutter" value="32-48px" sub="gap-8 to gap-12" />
        </div>
      </section>

      {/* Design Checklist */}
      <section className="bg-foreground text-white p-12 rounded-[40px] relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8">Development Checklist</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <CheckItem text="Use --font-display for all headings" />
            <CheckItem text="Use --font-body for all functional text" />
            <CheckItem text="Apply -0.02em letter-spacing to headings" />
            <CheckItem text="Default to font-bold (700) for section titles" />
            <CheckItem text="Maintain 1.5-1.6 line-height for body copy" />
            <CheckItem text="Use primary red only for main CTA actions" />
          </div>
        </div>
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-white to-transparent transform rotate-45 translate-x-1/2" />
        </div>
      </section>
    </div>
  );
}

function ColorSwatch({ name, hex, label, className }: { name: string, hex: string, label: string, className?: string }) {
  return (
    <div className="group cursor-pointer">
      <div className={`aspect-square rounded-2xl mb-4 flex flex-col items-center justify-center p-4 transition-transform group-hover:scale-[1.02] active:scale-95 shadow-lg ${className}`}>
        <span className="font-bold text-lg">{hex}</span>
      </div>
      <h4 className="font-bold text-foreground text-sm">{name}</h4>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function StatBox({ label, value, sub }: { label: string, value: string, sub: string }) {
  return (
    <div className="p-6 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">{label}</p>
      <div className="text-3xl font-bold text-primary font-display">{value}</div>
      <p className="text-sm font-medium text-foreground/40 mt-1">{sub}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-primary/20 p-1 rounded-full">
        <CheckCircle2 className="text-primary" size={18} />
      </div>
      <span className="font-medium text-white/90">{text}</span>
    </div>
  );
}
