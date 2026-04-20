import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  comment: string;
  rating: number;
}

export default function TestimonialCard({ name, comment, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-border/60 hover:border-accent/40 transition-all hover:shadow-lg">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'fill-accent text-accent' : 'text-border'}
          />
        ))}
      </div>

      <p className="text-foreground mb-5 leading-relaxed text-sm">
        "{comment}"
      </p>

      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20">
          <span className="text-base font-semibold text-accent">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-semibold text-foreground text-sm">{name}</div>
          <div className="text-xs text-muted-foreground">Cliente verificado</div>
        </div>
      </div>
    </div>
  );
}
