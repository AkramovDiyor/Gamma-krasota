import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export const TimeSlot = ({ time, available, isSelected, onSelect }) => (
  <motion.button
    onClick={() => available && onSelect(time)}
    disabled={!available}
    className={clsx(
      'px-4 py-2.5 rounded-xl text-sm font-medium transition-all',
      available
        ? isSelected
          ? 'bg-gold text-dark shadow-lg shadow-gold/20'
          : 'bg-dark-tertiary border border-gold/15 text-white hover:border-gold hover:bg-gold/10'
        : 'bg-dark-secondary text-gray/40 cursor-not-allowed line-through'
    )}
    whileHover={available ? { y: -2, scale: 1.02 } : {}}
    whileTap={available ? { scale: 0.98 } : {}}
  >
    {time}
  </motion.button>
);