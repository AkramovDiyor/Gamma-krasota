import { motion } from 'framer-motion';

export const PortfolioCard = ({ image, title, description, category }) => {
  console.log(image);
  
  return(

  <motion.article 
  
    className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-dark-tertiary to-dark-secondary border border-gold/10 card-hover"
    whileHover={{ scale: 1.02 }}
  >
    <div className="relative h-65 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Градиент поверх изображения */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />
    </div>
    
    <div className="p-6">
      <h3 className="text-lg font-bold uppercase tracking-wide mb-2">{title}</h3>
      <p className="text-gray text-sm leading-relaxed mb-4">{description}</p>
      <span className="inline-block px-4.5 py-2 bg-gold/10 border border-gold/30 rounded-full text-xs font-bold text-gold">
        {category}
      </span>
    </div>
  </motion.article>
  )
}