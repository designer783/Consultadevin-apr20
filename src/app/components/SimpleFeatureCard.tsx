import { ReactNode } from 'react';

interface SimpleFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function SimpleFeatureCard({ icon, title, description }: SimpleFeatureCardProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-4 border border-accent/20">
        {icon}
      </div>

      <h3 className="text-base font-semibold mb-2 text-foreground">
        {title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
