import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export const ServiceCardContact = ({ service, isSelected, onSelect }) => (
  <motion.button
    onClick={() => onSelect(service)}
    className={clsx(
      'w-full p-4 rounded-xl border text-left transition-all duration-300',
      isSelected
        ? 'border-gold bg-gold/10 ring-2 ring-gold/30'
        : 'border-gold/15 bg-dark-tertiary hover:border-gold/30 hover:bg-gold/5'
    )}
    whileHover={{ x: 4 }}
    whileTap={{ scale: 0.99 }}
  >
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <h4 className="font-semibold text-white truncate">{service.label}</h4>
        <p className="text-xs text-gray mt-0.5">{service.duration}</p>
      </div>
      <span className="text-sm font-bold text-gold whitespace-nowrap">
        {service.price}
      </span>
    </div>
  </motion.button>
);