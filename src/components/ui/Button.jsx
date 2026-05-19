import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  href,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'px-11 py-4 font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark';
  
  const variants = {
    primary: 'bg-gold text-dark border-2 border-gold hover:bg-transparent hover:text-gold hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-1',
    secondary: 'bg-transparent text-white border-2 border-white/30 hover:border-gold hover:text-gold hover:-translate-y-1',
  };

  const classes = twMerge(clsx(baseStyles, variants[variant], className));

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};