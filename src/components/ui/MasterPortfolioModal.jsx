import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

export const MasterPortfolioModal = ({ master, isOpen, onClose }) => {
  if (!isOpen || !master) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Затемнение фона */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Модальное окно */}
        <motion.div
          className="relative bg-dark-secondary rounded-3xl border border-gold/20 max-w-4xl w-full max-h-[90vh] overflow-hidden"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Заголовок */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-dark-secondary/95 backdrop-blur border-b border-gold/10">
            <div className="flex items-center gap-4">
              <img
                src={master.avatar}
                alt={master.name}
                className="w-12 h-12 rounded-full border-2 border-gold/30 object-cover"
              />
              <div>
                <h3 className="font-bold text-white">{master.name}</h3>
                <p className="text-xs text-gold">{master.role}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-dark-tertiary hover:bg-gold/20 flex items-center justify-center text-xl transition-colors"
              aria-label="Закрыть"
            >
              ✕
            </button>
          </div>

          {/* Сетка работ */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
            <p className="text-gray text-sm mb-5">
              Работы мастера: <span className="text-white font-medium">{master.portfolio?.length || 0} фото</span>
            </p>
            
            {master.portfolio?.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {master.portfolio.map((work) => (
                  <motion.div
                    key={work.id}
                    className="group relative aspect-square rounded-xl overflow-hidden border border-gold/10"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white font-medium text-sm">{work.title}</p>
                        <span className="text-xs text-gold">{work.category}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray">
                <p>Портфолио мастера в процессе наполнения ✨</p>
                <p className="text-sm mt-2">Скоро здесь появятся работы {master.name}</p>
              </div>
            )}
          </div>

          {/* Кнопка записи */}
          <div className="sticky bottom-0 p-5 bg-dark-secondary/95 backdrop-blur border-t border-gold/10">
            <a
              href="#contact"
              onClick={onClose}
              className="block w-full py-4 bg-gold text-black font-bold rounded-xl text-center hover:bg-gold-dark transition-colors uppercase tracking-wide"
            >
              Записаться к {master.name}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};