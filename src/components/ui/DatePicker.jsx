import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const DatePicker = ({ value, onChange, minDate = new Date() }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Генерация дней месяца
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    
    // Пустые ячейки до первого дня месяца
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }
    
    // Дни месяца
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const currentDate = new Date(year, month, day);
      const isToday = currentDate.toDateString() === new Date().toDateString();
      const isPast = currentDate < new Date().setHours(0, 0, 0, 0);
      const isSelected = value && currentDate.toDateString() === value.toDateString();
      
      days.push({
        date: currentDate,
        day,
        isToday,
        isDisabled: isPast && !isToday,
        isSelected,
      });
    }
    
    return days;
  };
  
  const days = getDaysInMonth(currentMonth);
  const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  
  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };
  
  const handleDayClick = (day) => {
    if (day && !day.isDisabled) {
      onChange(day.date);
    }
  };
  
  // Форматирование заголовка
  const monthName = currentMonth.toLocaleString('ru-RU', { month: 'long', year: 'numeric' });
  
  return (
    <div className="bg-dark-secondary rounded-2xl p-5 border border-gold/15">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={handlePrevMonth}
          className="p-2 hover:bg-gold/10 rounded-lg transition-colors text-gold"
          aria-label="Предыдущий месяц"
        >
          ❮
        </button>
        <span className="font-semibold capitalize">{monthName}</span>
        <button 
          onClick={handleNextMonth}
          className="p-2 hover:bg-gold/10 rounded-lg transition-colors text-gold"
          aria-label="Следующий месяц"
        >
          ❯
        </button>
      </div>
      
      {/* Week days */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map(day => (
          <div key={day} className="text-center text-xs text-gray font-medium py-2">
            {day}
          </div>
        ))}
      </div>
      
      {/* Days grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <motion.button
            key={index}
            onClick={() => day && handleDayClick(day)}
            disabled={!day || day.isDisabled}
            className={`
              aspect-square flex items-center justify-center text-sm rounded-lg transition-all
              ${!day ? 'invisible' : ''}
              ${day?.isSelected 
                ? 'bg-gold text-dark font-bold' 
                : day?.isToday 
                  ? 'border-2 border-gold text-gold' 
                  : day?.isDisabled 
                    ? 'text-gray/30 cursor-not-allowed' 
                    : 'hover:bg-gold/10 text-white'
              }
            `}
            whileHover={!day?.isDisabled ? { scale: 1.1 } : {}}
            whileTap={!day?.isDisabled ? { scale: 0.95 } : {}}
          >
            {day?.day}
          </motion.button>
        ))}
      </div>
      
      {/* Quick select */}
      <div className="mt-4 pt-4 border-t border-gold/10">
        <p className="text-xs text-gray mb-2">Быстрый выбор:</p>
        <div className="flex gap-2 flex-wrap">
          {[0, 1, 2, 3, 5].map(offset => {
            const date = new Date();
            date.setDate(date.getDate() + offset);
            const label = offset === 0 ? 'Сегодня' : 
                         offset === 1 ? 'Завтра' : 
                         date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
            
            return (
              <button
                key={offset}
                onClick={() => onChange(date)}
                className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                  value?.toDateString() === date.toDateString()
                    ? 'bg-gold text-dark border-gold'
                    : 'border-gold/30 text-gray hover:border-gold hover:text-gold'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};