import { useState, useEffect, useCallback } from 'react';

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
    document.body.classList.toggle('menu-open');
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
  }, []);

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [close]);

  // Очистка при размонтировании
  useEffect(() => {
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, []);

  return { isOpen, toggle, close };
};