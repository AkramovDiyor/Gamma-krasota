import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { Button } from '../ui/Button';
import { useBooking } from '../../hooks/useBooking';
import { DatePicker } from '../ui/DatePicker';
import { MasterCard } from '../ui/MasterCard';
import { ServiceCardContact } from '../ui/ServiceCardContact';
import { TimeSlot } from '../ui/TimeSlot';
import { clsx } from 'clsx';

export const Contact = () => {
  const [contactData, setContactData] = useState({ name: '', phone: '', comment: '' });
  const [step, setStep] = useState(1);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    selectedMaster,
    selectedService,
    selectedDate,
    selectedTime,
    isSubmitting,
    masters,
    services,
    timeSlots,
    allSlots,
    handleMasterChange,
    handleServiceChange,
    handleDateChange,
    setSelectedTime,
    submitBooking,
    isFormValid,
    steps,
    reset
  } = useBooking();

  const handleContactChange = (field, value) => {
    setContactData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid || !contactData.name || !contactData.phone) {
      alert('Пожалуйста, заполните имя и телефон');
      return;
    }

    const result = await submitBooking(contactData);
    setSubmitStatus(result);

    if (result.success) {
      setStep(2);
    }
  };

  // 🎯 ШАГ 1: Форма записи
  if (step === 1) {
    return (
      <section id="contact" className="section-padding bg-dark">
        <div className="container-max">
          <SectionHeader label="Онлайн-запись" title="Выберите мастера и время" />

          <div className="grid lg:grid-cols-5 gap-8">

            {/* 🔷 Левая колонка: Шаги выбора (3/5 колонок на десктопе) */}
            <div className="lg:col-span-3 space-y-6">

              {/* 🔹 ШАГ 1: Выбор мастера */}
              <motion.div
                className="bg-dark-secondary rounded-2xl p-6 border border-gold/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={clsx(
                    "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
                    steps.master ? "bg-gold text-dark" : "bg-gold/20 text-gold"
                  )}>1</span>
                  <h4 className="font-bold text-lg">Выберите мастера</h4>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {masters.map(master => (
                    <MasterCard
                      key={master.id}
                      master={master}
                      isSelected={selectedMaster?.id === master.id}
                      onSelect={handleMasterChange}
                    />
                  ))}
                </div>
              </motion.div>

              {/* 🔹 ШАГ 2: Услуги мастера (появляется после выбора мастера) */}
              <AnimatePresence>
                {selectedMaster && (
                  <motion.div
                    className="bg-dark-secondary rounded-2xl p-6 border border-gold/10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className={clsx(
                        "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
                        steps.service ? "bg-gold text-dark" : "bg-gold/20 text-gold"
                      )}>2</span>
                      <h4 className="font-bold text-lg">Услуги {selectedMaster.name}</h4>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {services.map(service => (
                        <ServiceCardContact
                          key={service.id}
                          service={service}
                          isSelected={selectedService?.id === service.id}
                          onSelect={handleServiceChange}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 🔹 ШАГ 3: Выбор даты (появляется после выбора услуги) */}
              <AnimatePresence>
                {selectedService && (
                  <motion.div
                    className="bg-dark-secondary rounded-2xl p-6 border border-gold/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className={clsx(
                        "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
                        steps.date ? "bg-gold text-dark" : "bg-gold/20 text-gold"
                      )}>3</span>
                      <h4 className="font-bold text-lg">Выберите дату</h4>
                    </div>

                    <DatePicker
                      value={selectedDate}
                      onChange={handleDateChange}
                      master={selectedMaster} // для учёта расписания мастера
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 🔹 ШАГ 4: Выбор времени (появляется после выбора даты) */}
              <AnimatePresence>
                {selectedDate && selectedMaster && (
                  <motion.div
                    className="bg-dark-secondary rounded-2xl p-6 border border-gold/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={clsx(
                          "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
                          steps.time ? "bg-gold text-dark" : "bg-gold/20 text-gold"
                        )}>4</span>
                        <h4 className="font-bold text-lg">Свободное время</h4>
                      </div>
                      <span className="text-xs text-gray">
                        {selectedDate.toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'short' })}
                      </span>
                    </div>

                    {allSlots.length > 0 ? (
                      <>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-4">
                          {allSlots.map((slot, i) => (
                            <TimeSlot
                              key={i}
                              time={slot.time}
                              available={slot.available}
                              isSelected={selectedTime === slot.time}
                              onSelect={setSelectedTime}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-gray flex items-center gap-2">
                          <span className="w-3 h-3 rounded bg-dark-tertiary border border-gold/15" />
                          Свободно
                          <span className="w-3 h-3 rounded bg-dark-secondary border border-gold/15 line-through ml-3" />
                          Занято
                        </p>
                      </>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-gray">
                          {selectedMaster.schedule[['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][selectedDate.getDay()]]?.available
                            ? 'На эту дату нет свободных слотов'
                            : 'Мастер не работает в этот день'}
                        </p>
                        <Button
                          variant="secondary"
                          className="mt-4"
                          onClick={() => handleDateChange(null)}
                        >
                          Выбрать другую дату
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 🔷 Правая колонка: Форма контактов (2/5 колонок, стики) */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="lg:sticky lg:top-24 bg-dark-secondary rounded-2xl p-6 border border-gold/10 space-y-5"
                noValidate
              >
                <h3 className="text-xl font-bold uppercase tracking-wide">📝 Ваши данные</h3>

                <div>
                  <label className="block text-xs text-gold uppercase tracking-wider font-semibold mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    required
                    minLength="2"
                    maxLength="50"
                    pattern="[A-Za-zА-Яа-яёЁ\s-]+"
                    title="Только буквы, пробелы и дефисы, от 2 до 50 символов"
                    value={contactData.name}
                    onChange={(e) => handleContactChange('name', e.target.value)}
                    className="w-full px-5 py-4 bg-dark-tertiary border border-gold/15 rounded-xl text-white placeholder-gray focus:outline-none focus:border-gold transition-colors"
                    placeholder="Как к вам обращаться?"
                    onInvalid={(e) => e.target.setCustomValidity('Пожалуйста, введите корректное имя (от 2 до 50 букв)')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                <div>
                  <label className="block text-xs text-gold uppercase tracking-wider font-semibold mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="(\+7|8)[\s-]?\(?[0-9]{3}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}"
                    title="Форматы: +7 (XXX) XXX-XX-XX или 8XXXXXXXXXX"
                    value={contactData.phone}
                    onChange={(e) => handleContactChange('phone', e.target.value)}
                    className="w-full px-5 py-4 bg-dark-tertiary border border-gold/15 rounded-xl text-white placeholder-gray focus:outline-none focus:border-gold transition-colors"
                    placeholder="+7 (___) ___-__-__"
                    onInvalid={(e) => e.target.setCustomValidity('Введите корректный номер телефона (10-11 цифр)')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                <div>
                  <label className="block text-xs text-gold uppercase tracking-wider font-semibold mb-2">
                    Комментарий
                  </label>
                  <textarea
                    value={contactData.comment}
                    onChange={(e) => handleContactChange('comment', e.target.value)}
                    rows={3}
                    maxLength="500"
                    className="w-full px-5 py-4 bg-dark-tertiary border border-gold/15 rounded-xl text-white placeholder-gray focus:outline-none focus:border-gold transition-colors resize-y"
                    placeholder="Пожелания, особенности... (до 500 символов)"
                  />
                  {contactData.comment && contactData.comment.length > 450 && (
                    <p className="text-xs text-orange-400 mt-1">
                      {contactData.comment.length}/500 символов
                    </p>
                  )}
                </div>

                {/* 📋 Сводка выбора */}
                {isFormValid && (
                  <motion.div
                    className="p-4 bg-gold/10 border border-gold/20 rounded-xl space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="text-xs text-gold uppercase tracking-wider font-semibold">📋 Ваша запись:</p>
                    <div className="text-sm space-y-1.5 text-gray-200">
                      <p>👤 <span className="text-white">{selectedMaster?.name}</span> ({selectedMaster?.role})</p>
                      <p>✂️ <span className="text-white">{selectedService?.label}</span></p>
                      <p>📅 <span className="text-white">{selectedDate?.toLocaleDateString('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' })}</span></p>
                      <p>⏰ <span className="text-white">{selectedTime}</span></p>
                      <p className="pt-2 border-t border-gold/20">💰 <span className="text-gold font-bold">{selectedService?.price}</span></p>
                    </div>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting || !contactData.name || !contactData.phone}
                  className="w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                      Отправка...
                    </span>
                  ) : '✅ Подтвердить запись'}
                </Button>

                <p className="text-xs text-gray/60 text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с <a href="#" className="text-gold hover:underline">политикой конфиденциальности</a> и обработкой персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 🎉 ШАГ 2: Успешная запись
  return (
    <section id="contact" className="section-padding bg-dark min-h-screen flex items-center">
      <div className="container-max max-w-2xl mx-auto text-center px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="bg-dark-secondary rounded-3xl p-8 lg:p-12 border border-gold/20"
        >

          <h2 className="text-3xl lg:text-4xl font-black uppercase mb-4">Вы записаны!</h2>
          <p className="text-gray mb-8 text-lg">
            Спасибо, <span className="text-white font-semibold">{contactData.name}</span>!
            Мы подтвердим вашу запись по телефону <span className="text-gold">{contactData.phone}</span> в ближайшее время.
          </p>

          {/* 📋 Детали записи */}
          <div className="bg-dark-tertiary rounded-2xl p-6 mb-8 text-left space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b border-gold/10">
              <img
                src={selectedMaster?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedMaster?.name || '')}&background=E6C200&color=0a0a0a`}
                alt={selectedMaster?.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gold/20"
              />
              <div>
                <p className="font-bold text-white">{selectedMaster?.name}</p>
                <p className="text-sm text-gold">{selectedMaster?.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray block text-xs uppercase tracking-wider">Услуга</span>
                <span className="font-semibold text-white">{selectedService?.label}</span>
              </div>
              <div className="text-right">
                <span className="text-gray block text-xs uppercase tracking-wider">Длительность</span>
                <span className="font-semibold text-white">{selectedService?.duration}</span>
              </div>
              <div>
                <span className="text-gray block text-xs uppercase tracking-wider">Дата</span>
                <span className="font-semibold text-white">{selectedDate?.toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
              </div>
              <div className="text-right">
                <span className="text-gray block text-xs uppercase tracking-wider">Время</span>
                <span className="font-semibold text-gold text-lg">{selectedTime}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gold/10 flex justify-between items-center">
              <span className="text-gray">Стоимость</span>
              <span className="text-2xl font-black text-gold">{selectedService?.price}</span>
            </div>
          </div>

          {/* 🔗 Действия */}
          <div className="space-y-4">
            {/* Кнопка "Записать ещё кого-то" */}
            <button
              onClick={() => {
                setStep(1);
                reset()

              }}
              className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-gold text-black font-bold rounded-xl hover:bg-gold-dark transition-colors mt-5 shadow-lg shadow-gold/20"
            >
              ✂️ Записать ещё кого-то
            </button>

            {/* Ссылка "Изменить запись" */}
            <button
              onClick={() => {
                setStep(1);
                // Не сбрасываем выбор — пользователь может скорректировать данные
              }}
              className="text-sm text-gray hover:text-gold transition-colors underline"
            >
              Изменить запись
            </button>

            {/* Опционально: кнопка "На главную" если нужна */}
            {/* 
            <a href="#home" className="text-sm text-gray hover:text-gold transition-colors block mt-2">
              ← Вернуться на главную
            </a> 
            */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};