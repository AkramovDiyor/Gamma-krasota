import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-dark"
    >
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0">
        {/* Дополнительные градиенты */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-2xl px-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-6 py-2 mb-8 text-xs font-semibold tracking-[3px] uppercase border border-gold rounded-full text-gold">
            ✦ Добро пожаловать ✦
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-wider leading-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Салон <span className="text-gold">Гамма</span>
          <br />
          Красоты
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg font-light text-gray-300 tracking-wide mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ваш стиль — наша страсть. Профессиональные стрижки, окрашивание и уход
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-sm font-bold uppercase tracking-wider bg-gold text-black rounded-full border-2 border-gold transition-all duration-300 hover:bg-transparent hover:text-gold hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/20"
          >
            Записаться
          </a>
          <a
            href="#portfolio"
            className="inline-block px-8 py-4 text-sm font-bold uppercase tracking-wider bg-transparent text-white rounded-full border-2 border-white/30 transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-1"
          >
            Наши работы
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};