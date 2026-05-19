import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../utils/constants';
import { BurgerIcon } from '../icons/BurgerIcon';
import { MobileMenu } from './MobileMenu';
import { useMobileMenu } from '../../hooks/useMobileMenu';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, toggle } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 lg:px-15 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-lg border-b border-gold/15' : 'bg-transparent'
      }`}>
        <a href="#home" className="text-xl font-black tracking-wider uppercase z-50">
          <span className="text-gold">Гамма</span> Красота
        </a>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`}
                className="text-xs font-semibold uppercase tracking-wider text-gray hover:text-gold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <BurgerIcon  className="lg:hidden z-50" />
      </nav>

      <MobileMenu />
    </>
  );
};