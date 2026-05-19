import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export const MasterCard = ({ master, isSelected, onSelect }) => {
  // Фолбэк аватара
  const avatarUrl = master.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(master.name)}&background=E6C200&color=0a0a0a&size=128`;

  return (
    <motion.button
      onClick={() => onSelect(master)}
      className={clsx(
        'w-full p-4 rounded-2xl border text-left transition-all duration-300',
        isSelected 
          ? 'border-gold bg-gold/10 ring-2 ring-gold/30 shadow-lg shadow-gold/10' 
          : 'border-gold/15 bg-dark-tertiary hover:border-gold/40 hover:bg-gold/5'
      )}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-start gap-4">
        {/* Avatar + Badge */}
        <div className="relative flex-shrink-0">
          <img 
            src={avatarUrl} 
            alt={master.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-gold/20"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(master.name)}&background=E6C200&color=0a0a0a`;
            }}
          />
          {isSelected && (
            <motion.span 
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-dark text-xs font-bold shadow"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              ✓
            </motion.span>
          )}
        </div>
        
        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-bold text-white">{master.name}</h4>
            <span className="text-xs px-2 py-0.5 bg-gold/20 text-gold rounded-full">
              ★ {master.rating}
            </span>
          </div>
          <p className="text-xs text-gold/80 mt-0.5">{master.role}</p>
          
          {/* Services preview */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {master.services.slice(0, 3).map((service) => (
              <span 
                key={service.id}
                className="text-xs px-2.5 py-1 bg-dark-secondary border border-gold/10 rounded-lg text-gray/90"
              >
                {service.label.split(' ')[0]}
              </span>
            ))}
            {master.services.length > 3 && (
              <span className="text-xs px-2 py-1 text-gold/70">
                +{master.services.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Reviews */}
        <div className="text-right hidden sm:block flex-shrink-0">
          <span className="text-xs text-gray block">{master.reviews} отзывов</span>
        </div>
      </div>
    </motion.button>
  );
};