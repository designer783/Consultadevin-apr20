import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="group relative bg-white p-8 rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden hover:shadow-xl">
      <div className="relative z-10">
        <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-all duration-300 border-2 border-accent/30">
          {icon}
        </div>

        <h3 className="text-2xl font-bold mb-3 text-foreground">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
          {description}
        </p>

        <a
          href={link}
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors group/link font-bold"
        >
          <span>Ver más</span>
          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
