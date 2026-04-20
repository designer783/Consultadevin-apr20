import { Check } from 'lucide-react';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false
}: PricingCardProps) {
  return (
    <div className={`relative bg-white rounded-xl p-7 border transition-all hover:shadow-lg ${
      highlighted
        ? 'border-primary shadow-md scale-[1.02]'
        : 'border-border/60 hover:border-primary/40'
    }`}>
      {highlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2">
          <span className="bg-accent/10 text-foreground border border-accent/30 px-3.5 py-1 rounded-full text-xs font-semibold">
            Más Popular
          </span>
        </div>
      )}

      <div className="mb-5">
        <h3 className="text-xl font-bold text-foreground mb-1.5">{name}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          <span className="text-base text-muted-foreground">/{period}</span>
        </div>
      </div>

      <Button variant={highlighted ? 'primary' : 'outline'} className="w-full mb-6">
        Comenzar Ahora
      </Button>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
            </div>
            <span className="text-foreground text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
