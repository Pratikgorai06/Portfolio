export const AnimatedBorderButton = ({ children, className = "" }) => {
  return (
    <button
      className={`
        relative inline-flex items-center gap-2 rounded-full px-6 py-3
        font-medium text-foreground
        border border-primary/40
        hover:border-primary
        transition-colors
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {/* Animated border glow */}
      <span
        className="
          pointer-events-none absolute inset-0 rounded-full
          border border-primary/50
          opacity-0 hover:opacity-100
          transition-opacity
        "
      />
    </button>
  );
};
