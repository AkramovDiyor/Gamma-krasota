export const Badge = ({ children, className = '' }) => (
    <span className={`inline-block px-6 py-2 border border-gold rounded-full text-xs font-bold tracking-widest uppercase text-gold ${className}`}>
      {children}
    </span>
  );