import { useState, useCallback, useMemo } from 'react';
import { MASTERS, generateTimeSlots } from '../utils/constants';

export const useBooking = () => {
  const [selectedMaster, setSelectedMaster] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Услуги выбранного мастера
  const availableServices = useMemo(() => 
    selectedMaster?.services || [], 
    [selectedMaster]
  );

  // ✅ Слоты времени для выбранной даты и мастера
  const timeSlots = useMemo(() => {
    if (!selectedDate || !selectedMaster) return [];
    return generateTimeSlots(selectedDate, selectedMaster);
  }, [selectedDate, selectedMaster]);

  // ✅ Только свободные слоты
  const availableSlots = useMemo(() => 
    timeSlots.filter(slot => slot.available), 
    [timeSlots]
  );

  // 🔄 Сброс зависимых полей при изменении выбора
  const handleMasterChange = useCallback((master) => {
    setSelectedMaster(master);
    setSelectedService(null); // Сбрасываем услугу при смене мастера
    setSelectedDate(null);    // Сбрасываем дату
    setSelectedTime(null);    // Сбрасываем время
  }, []);

  const handleServiceChange = useCallback((service) => {
    setSelectedService(service);
    setSelectedDate(null);    // Сбрасываем дату при смене услуги
    setSelectedTime(null);
  }, []);

  const handleDateChange = useCallback((date) => {
    setSelectedDate(date);
    setSelectedTime(null);    // Сбрасываем время при смене даты
  }, []);

  // ✅ Валидация: все шаги должны быть заполнены
  const isFormValid = useMemo(() => 
    selectedMaster && selectedService && selectedDate && selectedTime,
    [selectedMaster, selectedService, selectedDate, selectedTime]
  );

  // 📤 Отправка заявки (моковая)
  const submitBooking = useCallback(async (contactData) => {
    setIsSubmitting(true);
    
    try {
    //   // Имитация API-запроса
    //   await new Promise(resolve => setTimeout(resolve, 1500));
      
    //   const bookingData = {
    //     id: Date.now(),
    //     ...contactData,
    //     master: {
    //       id: selectedMaster.id,
    //       name: selectedMaster.name,
    //       role: selectedMaster.role,
    //     },
    //     service: {
    //       id: selectedService.id,
    //       label: selectedService.label,
    //       duration: selectedService.duration,
    //       price: selectedService.price,
    //     },
    //     appointment: {
    //       date: selectedDate.toISOString(),
    //       time: selectedTime,
    //       duration: selectedService.duration,
    //     },
    //     createdAt: new Date().toISOString(),
    //     status: 'pending',
    //   };

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      };
      
      // Готовим данные для отправки
      const bookingData = {
        name: contactData.name,
        phone: contactData.phone,
        comment: contactData.comment,
        master: {
          id: selectedMaster.id,
          name: selectedMaster.name,
          role: selectedMaster.role,
        },
        service: {
          id: selectedService.id,
          label: selectedService.label,
          duration: selectedService.duration,
          price: selectedService.price,
        },
        appointment: {
          date: formatDate(selectedDate),
          time: selectedTime,
          duration: selectedService.duration,
        },
        createdAt: new Date().toISOString(),
        status: 'pending',
      };
      
      // 1. ОТПРАВЛЯЕМ ДАННЫЕ В GOOGLE ТАБЛИЦУ
      const response = await fetch('https://script.google.com/macros/s/AKfycbyKwA2E-hpSUPAvoRiQhLH2P9ELb8mASnvYKjr92PatBUmQUOvp1hkn4OV4USz-WAvO_A/exec', {
        method: 'POST',
         mode: 'cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(bookingData)
      });
      
      // 2. ДОПОЛНИТЕЛЬНО сохраняем в localStorage для истории (опционально)
      const bookings = JSON.parse(localStorage.getItem('gamma_bookings') || '[]');
      bookings.push(bookingData);
      localStorage.setItem('gamma_bookings', JSON.stringify(bookings));
      
      console.log('📋 Заявка отправлена в Google Таблицу!', bookingData);
      
      return { success: true, booking: bookingData };
    } catch (error) {
      console.error('❌ Booking error:', error);
      return { success: false, error: 'Не удалось записаться. Попробуйте позже.' };
    } finally {
      setIsSubmitting(false);
    }
  }, [selectedMaster, selectedService, selectedDate, selectedTime]);

  // 🔄 Сброс всей формы
  const reset = useCallback(() => {
    setSelectedMaster(null);
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime(null);
  }, []);

  return {
    // State
    selectedMaster,
    selectedService,
    selectedDate,
    selectedTime,
    isSubmitting,
    
    // Data
    masters: MASTERS,
    services: availableServices,
    timeSlots: availableSlots,
    allSlots: timeSlots, // для отображения и занятых тоже
    
    // Actions
    handleMasterChange,
    handleServiceChange,
    handleDateChange,
    setSelectedTime,
    submitBooking,
    reset,
    
    // Utils
    isFormValid,
    
    // Для отображения шагов
    steps: {
      master: !!selectedMaster,
      service: !!selectedService,
      date: !!selectedDate,
      time: !!selectedTime,
      complete: isFormValid,
    },
  };
};