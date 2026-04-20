export default function TrustpilotBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent/10 text-foreground border border-accent/30">
      <span className="text-xs font-semibold text-foreground">Excellent</span>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 fill-[#00B67A]" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-muted-foreground">290+ reviews on</span>
      <div className="flex items-center gap-1">
        <svg className="w-3 h-3 fill-[#00B67A]" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span className="text-xs font-semibold text-foreground">Trustpilot</span>
      </div>
    </div>
  );
}
