interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export default function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  disabled = false
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      className={`px-5 py-3.5 bg-white border border-border/60 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-foreground placeholder:text-muted-foreground/60 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    />
  );
}
