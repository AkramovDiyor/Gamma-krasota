import { SectionHeader } from '../layout/SectionHeader';
import { PortfolioCard } from '../ui/PortfolioCard';
import { PORTFOLIO_ITEMS } from '../../utils/constants';
import { motion } from 'framer-motion';

export const Portfolio = () => (
  <section id="portfolio" className="section-padding bg-dark relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

    <div className="container-max">
      <SectionHeader label="Портфолио" title="Наши работы" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
        {PORTFOLIO_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>

            <PortfolioCard key={item.id} {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);