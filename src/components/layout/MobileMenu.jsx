import { motion, AnimatePresence } from 'framer-motion';
import { useMobileStore } from '../../store/useMobileStore';
import { NAV_LINKS } from '../../utils/constants';

export const MobileMenu = () => {
  const { isOpen, close } = useMobileStore();

  const handleLinkClick = () => {
    close();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          
          {/* Menu panel */}
          <motion.div
            className="fixed top-0 right-0 w-full h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark z-40 lg:hidden flex flex-col items-center justify-center gap-2.5 overflow-hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-75 h-75 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleLinkClick}
                className="text-2xl font-bold uppercase tracking-wider text-white hover:text-gold transition-colors py-4 px-8 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.1 }}
              >
                {link.label}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-2.5 w-10 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform" />
              </motion.a>
            ))}

            <motion.div 
              className="absolute bottom-15 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
              <p className="text-xs text-gray uppercase tracking-widest mb-1">Запишитесь прямо сейчас</p>
              <p className="text-gold font-semibold">+7 (999) 123-45-67</p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};