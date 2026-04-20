import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'default' | 'accent' | 'primary';
}

export default function Badge({ children, icon, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-muted/60 text-foreground border-border/40',
    accent: 'bg-accent/10 text-foreground border-accent/30',
    primary: 'bg-primary/5 text-primary border-primary/20'
  };

  return (
    <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border ${variants[variant]}`}>
      {icon}
      <span className="text-xs font-semibold">{children}</span>
    </div>
  );
}
