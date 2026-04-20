import { ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: ReactNode;
  title: string | ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  badge,
  badgeIcon,
  title,
  description,
  align = 'center'
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${align === 'center' ? 'max-w-3xl mx-auto' : ''}`}>
      {badge && (
        <div className={`mb-4 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-accent/10 rounded-full border border-accent/30">
            {badgeIcon}
            <span className="text-xs font-semibold text-foreground">{badge}</span>
          </div>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground leading-tight">
        {title}
      </h2>

      {description && (
        <p className="text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
