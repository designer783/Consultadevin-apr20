import { ReactNode } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  variant?: 'default' | 'primary' | 'accent';
}

export default function StatCard({ value, label, icon, variant = 'default' }: StatCardProps) {
  const valueColors = {
    default: 'text-primary',
    primary: 'text-primary',
    accent: 'text-accent'
  };

  return (
    <div className="text-center p-5 bg-gradient-to-br from-muted/40 to-white rounded-xl border border-border/30 hover:border-primary/20 hover:shadow-md transition-all">
      {icon && (
        <div className="flex justify-center mb-2">
          {icon}
        </div>
      )}
      <div className={`text-3xl font-bold mb-1.5 ${valueColors[variant]}`}>
        {value}
      </div>
      <div className="text-xs text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
}
