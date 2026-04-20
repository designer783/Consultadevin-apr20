import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <div
      className="group relative bg-white p-6 rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards',
        opacity: 0
      }}
    >
      <div className="relative z-10">
        <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-all duration-300 border-2 border-accent/30">
          {icon}
        </div>

        <h3 className="text-xl font-bold mb-3 text-foreground">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}
