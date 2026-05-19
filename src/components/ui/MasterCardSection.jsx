import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export const MasterCardSection = ({ master, onSelect, onViewPortfolio }) => {
  // Фолбэк изображения
  const coverUrl = master.coverPhoto || master.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(master.name)}&background=E6C200&color=0a0a0a&size=400`;

  return (
    <motion.article
      className="group relative rounded-2xl overflow-hidden border border-gold/10 bg-dark-secondary cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ 
        type: 'spring', 
        stiffness: 200,     // Меньше жесткости = плавнее
        damping: 20,        // Демпфирование для затухания
        mass: 0.8          // Масса для инерции
      }}
    >
      {/* 🔷 Фото мастера (фон карточки) */}
      <div className="relative h-72 overflow-hidden">
        <motion.img
          src={coverUrl}
          alt={master.name}
          className="w-full h-full object-cover"
          loading="lazy"
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />
        {/* Градиент поверх фото для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        
        {/* Рейтинг и отзывы */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-dark/80 backdrop-blur-sm rounded-full border border-gold/20">
          <span className="text-gold">★</span>
          <span className="text-sm font-bold text-white">{master.rating}</span>
          <span className="text-xs text-gray">({master.reviews})</span>
        </div>
      </div>

      {/* 🔷 Контент карточки */}
      <div className="relative p-6 -mt-16">
        {/* Имя и роль */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <h3 className="text-2xl font-black text-white">{master.name}</h3>
            <p className="text-gold font-medium">{master.role}</p>
          </div>
          {/* Аватар-кружок */}
          <motion.img
            src={master.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(master.name)}&background=E6C200&color=0a0a0a`}
            alt={master.name}
            className="w-16 h-16 rounded-full border-4 border-dark-secondary object-cover shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          />
        </div>

        {/* Краткое описание */}
        <p className="text-sm text-gray mb-4 line-clamp-2">{master.bio}</p>

        {/* Специализации (теги) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {master.specialties.slice(0, 3).map((spec, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-gold/10 border border-gold/20 rounded-full text-gold"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 215, 0, 0.2)' }}
              transition={{ duration: 0.2 }}
            >
              {spec}
            </motion.span>
          ))}
          {master.specialties.length > 3 && (
            <span className="px-3 py-1 text-xs text-gray/70">
              +{master.specialties.length - 3}
            </span>
          )}
        </div>

        {/* Кнопки действий */}
        <div className="flex gap-3">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onSelect?.(master);
            }}
            className="flex-1 px-4 py-3 bg-gold text-black font-bold rounded-xl text-sm uppercase tracking-wide"
            whileHover={{ scale: 1.02, backgroundColor: '#E6C200' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Выбрать
          </motion.button>
          
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onViewPortfolio?.(master);
            }}
            className="flex-1 px-4 py-3 bg-dark-tertiary border border-gold/20 text-white font-semibold rounded-xl text-sm uppercase tracking-wide"
            whileHover={{ scale: 1.02, borderColor: '#FFD700', color: '#FFD700' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Работы
          </motion.button>
        </div>
      </div>

      {/* ✨ Эффект свечения при наведении */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: 'radial-gradient(ellipse at top, rgba(255, 215, 0, 0.1) 0%, transparent 60%)' }}
        initial={false}
      />
    </motion.article>
  );
};