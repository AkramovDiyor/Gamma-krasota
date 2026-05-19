export const Footer = () => (
    <footer className="py-10 px-6 lg:px-15 bg-dark-secondary border-t border-gold/10">
      <div className="container-max flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="text-lg font-black tracking-wider uppercase">
          <span className="text-gold">Гамма</span> Красота
        </div>
        <p className="text-gray text-xs tracking-wide">© 2025 Гамма Красота. Все права защищены.</p>
        <div className="flex gap-4">
          {['📷', '✈️', '💬'].map((icon, i) => (
            <a 
              key={i}
              href="#" 
              className="w-10.5 h-10.5 border border-gold/20 rounded-full flex items-center justify-center text-base hover:bg-gold hover:border-gold hover:text-dark transition-all duration-300 hover:-translate-y-1"
              aria-label={`Social ${i + 1}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );