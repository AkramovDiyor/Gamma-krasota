import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { MasterCardSection } from '../ui/MasterCardSection';
import { MasterPortfolioModal } from '../ui/MasterPortfolioModal';
import { MASTERS } from '../../utils/constants';
import { useBooking } from '../../hooks/useBooking';

export const Team = () => {
  const [selectedMaster, setSelectedMaster] = useState(null);
  const [portfolioMaster, setPortfolioMaster] = useState(null);
  const { handleMasterChange } = useBooking();

  const handleSelectMaster = (master) => {
    handleMasterChange(master);
    setSelectedMaster(master);
    // Плавный скролл к секции записи
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="team" className="section-padding bg-dark-secondary relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        
        <div className="container-max">
          {/* 🔷 Обновлённые заголовки */}
          <SectionHeader 
            label="НАША КОМАНДА" 
            title="ТВОЙ ОБРАЗ В НАДЕЖНЫХ РУКАХ" 
          />
          
          {/* 🔷 Сетка мастеров */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {MASTERS.map((master, index) => (
              <motion.div
                key={master.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MasterCardSection
                  master={master}
                  onSelect={handleSelectMaster}
                  onViewPortfolio={setPortfolioMaster}
                />
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* 🔷 Модальное окно портфолио */}
      <MasterPortfolioModal
        master={portfolioMaster}
        isOpen={!!portfolioMaster}
        onClose={() => setPortfolioMaster(null)}
      />
    </>
  );
};