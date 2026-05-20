import { motion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { FEATURES } from '../../utils/constants';

export const About = () => (
  <section id="about" className=" p-2 bg-dark">
    <div className="container-max">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden border-2 border-gold/20 hover:border-gold/50 transition-colors group">
            <img 
              src="/assets/гаммакросата.webp" 
              alt="Салон Гамма Красоты"
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-103"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/40 to-dark/70 pointer-events-none" />
            {/* Gold border glow */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-gold via-transparent to-gold opacity-40 -z-10" />
          </div>
          
          {/* Stats badge */}
          <div className="absolute -bottom-6 -right-[-5px] lg:right-0 bg-gradient-to-br from-gold to-gold-dark text-dark p-6 lg:p-9 rounded-xl shadow-lg shadow-gold/20 z-10">
            <div className="text-4xl lg:text-5xl font-black leading-none">10+</div>
            <div className="text-xs font-bold uppercase tracking-wider mt-1.5">Лет опыта</div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div 
          className="space-y-6 px-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader label="О нашем салоне" title="Мы создаём красоту и уверенность" center={false} />
          
          <p className="text-gray leading-relaxed">
            Салон «Гамма Красоты» — это место, где каждый клиент получает индивидуальный подход и профессиональный сервис. Наши мастера постоянно совершенствуют свои навыки, следя за последними трендами индустрии.
          </p>
          <p className="text-gray leading-relaxed">
            Мы используем только профессиональную косметику ведущих мировых брендов, чтобы гарантировать безупречный результат и здоровье ваших волос.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            {FEATURES.map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <span className="text-sm font-semibold">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);