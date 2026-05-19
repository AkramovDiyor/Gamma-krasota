import { motion } from 'framer-motion';

export const ServiceCard = ({ icon, title, description, price }) => (
  <motion.article 
    className="relative p-11 rounded-2xl bg-gradient-to-br from-dark-tertiary to-dark-secondary border border-gold/10 overflow-hidden cursor-pointer group transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-[1.02]"
    initial={false}
  >
    {/* Эффект свечения при наведении */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
         style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.08) 0%, transparent 70%)' }} 
    />
    
    {/* Верхняя золотая линия */}
    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
    
    <div className="relative z-10 text-center">
      <div className="text-5xl mb-6 block transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      
      <h3 className="text-lg font-bold uppercase tracking-wider mb-4">{title}</h3>
      <p className="text-gray text-sm leading-relaxed mb-5">{description}</p>
      
      <span className="inline-block px-6 py-2.5 bg-gold/10 border border-gold/30 rounded-full text-base font-bold text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-black group-hover:shadow-lg group-hover:shadow-gold/30">
        {price}
      </span>
    </div>
  </motion.article>
);