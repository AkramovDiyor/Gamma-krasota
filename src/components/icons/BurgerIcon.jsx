import { useMobileStore } from '../../store/useMobileStore';
import { clsx } from 'clsx';

export const BurgerIcon = ({ className = '' }) => {
  const { isOpen, toggle } = useMobileStore();

  return (
    <button
      onClick={toggle}
      className={clsx('w-10 h-10 flex flex-col items-center justify-center gap-1.75 p-1.25 bg-transparent border-none cursor-pointer z-50', className)}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
    >
      <span className={clsx(
        'block w-7 h-0.5 bg-gold rounded-sm transition-all duration-400',
        isOpen && 'rotate-45 translate-y-2.5',
        !isOpen && 'mb-1.5'
      )} />
      <span className={clsx(
        'block w-7 h-0.5 bg-gold rounded-sm transition-all duration-400',
        isOpen && 'opacity-0',
        !isOpen && 'mb-1.5 w-5 ml-auto'
      )} />
      <span className={clsx(
        'block w-7 h-0.5 bg-gold rounded-sm transition-all duration-400',
        isOpen && '-rotate-45 -translate-y-2.5'
      )} />
    </button>
  );
};