export const NAV_LINKS = [
    { id: 'home', label: 'Главная' },
    { id: 'services', label: 'Услуги' },
    { id: 'portfolio', label: 'Работы' },
    { id: 'about', label: 'О нас' },
    { id: 'contact', label: 'Контакты' },
  ];
  
  export const SERVICES = [
    {
      id: 1,
      icon: '✂️',
      title: 'Идеальная стрижка',
      description: 'Подберём форму, которая подчеркнёт вашу индивидуальность. Работаем с любой длиной и структурой волос',
      price: 'от 800 ₽',
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Сложное окрашивание',
      description: 'Балаяж, шатуш, аиртач — создадим плавные переходы и глубокий цвет без повреждения волос',
      price: 'от 2 500 ₽',
    },
    {
      id: 3,
      icon: '💆',
      title: 'Восстановление',
      description: 'Кератин, ботокс, глубокое увлажнение — вернём волосам силу, блеск и здоровый вид',
      price: 'от 1 500 ₽',
    },
    {
      id: 4,
      icon: '💅',
      title: 'Безупречный маникюр',
      description: 'Аппаратный и комбинированный маникюр с покрытием премиум-класса. Стерильно и безопасно',
      price: 'от 1 200 ₽',
    },
    {
      id: 5,
      icon: '👰',
      title: 'Свадебный образ',
      description: 'Создадим причёску мечты для вашего особенного дня. Пробная причёска в подарок!',
      price: 'от 3 000 ₽',
    },
    {
      id: 6,
      icon: '🧔',
      title: 'Мужской зал',
      description: 'Стильные стрижки, оформление бороды, королевское бритьё. Мужской подход к деталям',
      price: 'от 600 ₽',
    },
  ];
  
  export const PORTFOLIO_ITEMS = [
    {
      id: 1,
      image: '../src/assets/img/blash.webp',
      title: 'Балаяж',
      description: 'Плавные переходы и естественный блонд для вашего образа',
      category: 'Окрашивание',
    },
    {
      id: 2,
      image: '../src/assets/img/kare.webp',
      title: 'Стильное каре',
      description: 'Идеальная геометрия и объём без ежедневной укладки',
      category: 'Стрижка',
    },
    {
      id: 3,
      image: '../src/assets/img/madicur.webp',
      title: 'Нежный маникюр',
      description: 'Аккуратная форма и стойкое покрытие премиум-класса',
      category: 'Маникюр',
    },
    {
      id: 4,
      image: '../src/assets/img/svadba.webp',
      title: 'Свадебный образ',
      description: 'Элегантная причёска, которая продержится весь праздник',
      category: 'Укладка',
    },
    {
      id: 5,
      image: '../src/assets/img/airtach.webp',
      title: 'Аиртач',
      description: 'Техника окрашивания для мягкого и дорогого звучания цвета',
      category: 'Окрашивание',
    },
    {
      id: 6,
      image: '../src/assets/img/faed.webp',
      title: 'Фейд + Борода',
      description: 'Чёткие линии, плавные переходы и идеальный контур',
      category: 'Барбер',
    },
  ];
  
  export const FEATURES = [
    'Опытные мастера',
    'Премиум косметика',
    'Уютная атмосфера',
    'Доступные цены',
  ];
  
  export const CONTACT_INFO = [
    { icon: '📍', label: 'Адрес', value: 'г. Москва, ул. Примерная, д. 15' },
    { icon: '📞', label: 'Телефон', value: '+7 (999) 123-45-67' },
    { icon: '🕐', label: 'Время работы', value: 'Пн–Сб: 9:00 – 21:00\nВс: 10:00 – 19:00' },
    { icon: '✉️', label: 'Email', value: 'info@gamma-krasota.ru' },
  ];

// 👥 Мастера с их услугами и расписанием
// 👥 Мастера с расширенными данными
export const MASTERS = [
  {
    id: 1,
    name: 'Анна',
    role: 'Топ-стилист',
    avatar: '../src/assets/img/barbervumen1.jpeg',
    coverPhoto: '../src/assets/img/barbervumen1.jpeg', // Фото в работе / портрет
    rating: 4.9,
    reviews: 124,
    bio: '7 лет опыта. Специализируюсь на сложных окрашиваниях и стрижках, которые легко укладывать.',
    specialties: ['Окрашивание', 'Сложные стрижки', 'Укладки'],
    services: [
      { id: 'haircut-women', label: 'Женская стрижка', duration: '45-60 мин', price: 'от 1 200 ₽' },
      { id: 'haircut-men', label: 'Мужская стрижка', duration: '30-45 мин', price: 'от 800 ₽' },
      { id: 'coloring-simple', label: 'Окрашивание в один тон', duration: '1.5-2 часа', price: 'от 2 500 ₽' },
      { id: 'styling', label: 'Укладка', duration: '30-45 мин', price: 'от 1 000 ₽' },
    ],
    // Мини-портфолио мастера (3-6 фото)
    portfolio: [
      { id: 1, image: '/portfolio/anna-1.jpg', title: 'Балаяж на длинные волосы', category: 'Окрашивание' },
      { id: 2, image: '/portfolio/anna-2.jpg', title: 'Каскад с чёлкой', category: 'Стрижка' },
      { id: 3, image: '/portfolio/anna-3.jpg', title: 'Вечерняя укладка', category: 'Укладка' },
    ],
    schedule: {
      mon: { start: 9, end: 21, available: true },
      tue: { start: 9, end: 21, available: true },
      wed: { start: 9, end: 21, available: true },
      thu: { start: 9, end: 21, available: true },
      fri: { start: 9, end: 21, available: true },
      sat: { start: 10, end: 20, available: true },
      sun: { start: 10, end: 18, available: false },
    },
    bookedSlots: ['2025-06-01T10:00', '2025-06-01T14:30'],
  },
  {
    id: 2,
    name: 'Елена',
    role: 'Колорист-эксперт',
    avatar: '../src/assets/img/barbervumen2.jpeg',
    coverPhoto: '../src/assets/img/barbervumen2.jpeg',
    rating: 5.0,
    reviews: 89,
    bio: 'Сертифицированный колорист. Создаю естественные переходы и стойкий цвет без повреждения волос.',
    specialties: ['Балаяж', 'Аиртач', 'Шатуш', 'Тонирование'],
    services: [
      { id: 'balayage', label: 'Балаяж', duration: '3-4 часа', price: 'от 4 000 ₽' },
      { id: 'airtouch', label: 'Аиртач', duration: '3-5 часов', price: 'от 5 000 ₽' },
      { id: 'shatush', label: 'Шатуш', duration: '2.5-3.5 часа', price: 'от 3 500 ₽' },
      { id: 'toning', label: 'Тонирование', duration: '1-1.5 часа', price: 'от 1 500 ₽' },
    ],
    portfolio: [
      { id: 1, image: '/portfolio/elena-1.jpg', title: 'Аиртач блонд', category: 'Окрашивание' },
      { id: 2, image: '/portfolio/elena-2.jpg', title: 'Шатуш на каштановые', category: 'Окрашивание' },
      { id: 3, image: '/portfolio/elena-3.jpg', title: 'Тонирование в пепельный', category: 'Окрашивание' },
    ],
    schedule: {
      mon: { start: 10, end: 20, available: true },
      tue: { start: 10, end: 20, available: true },
      wed: { start: 10, end: 20, available: false },
      thu: { start: 10, end: 20, available: true },
      fri: { start: 10, end: 20, available: true },
      sat: { start: 10, end: 18, available: true },
      sun: { start: 10, end: 16, available: true },
    },
    bookedSlots: ['2025-06-01T12:00', '2025-06-02T15:00'],
  },
  {
    id: 3,
    name: 'Мария',
    role: 'Мастер маникюра',
    avatar: '../src/assets/img/barbervumen3.jpg',
    coverPhoto: '../src/assets/img/barbervumen3.jpg',
    rating: 4.8,
    reviews: 201,
    bio: 'Аккуратность и стерильность — мой приоритет. Создаю дизайны, которые хочется носить неделями.',
    specialties: ['Маникюр', 'Педикюр', 'Дизайн ногтей', 'Укрепление'],
    services: [
      { id: 'manicure-classic', label: 'Классический маникюр', duration: '45-60 мин', price: 'от 1 200 ₽' },
      { id: 'manicure-combi', label: 'Комбинированный маникюр', duration: '60-75 мин', price: 'от 1 500 ₽' },
      { id: 'manicure-gel', label: 'Покрытие гель-лаком', duration: '+20 мин', price: 'от 600 ₽' },
      { id: 'nail-design', label: 'Дизайн ногтей', duration: '+30 мин', price: 'от 300 ₽' },
    ],
    portfolio: [
      { id: 1, image: '/portfolio/maria-1.jpg', title: 'Французский маникюр', category: 'Маникюр' },
      { id: 2, image: '/portfolio/maria-2.jpg', title: 'Минимализм + стразы', category: 'Дизайн' },
      { id: 3, image: '/portfolio/maria-3.jpg', title: 'Педикюр с покрытием', category: 'Педикюр' },
    ],
    schedule: {
      mon: { start: 9, end: 21, available: true },
      tue: { start: 9, end: 21, available: true },
      wed: { start: 9, end: 21, available: true },
      thu: { start: 9, end: 21, available: true },
      fri: { start: 9, end: 21, available: true },
      sat: { start: 10, end: 20, available: true },
      sun: { start: 10, end: 19, available: true },
    },
    bookedSlots: ['2025-06-01T09:00', '2025-06-01T13:00'],
  },
  {
    id: 4,
    name: 'Дмитрий',
    role: 'Барбер',
    avatar: '../src/assets/img/barber1.webp',
    coverPhoto: '../src/assets/img/barber1.webp',
    rating: 4.9,
    reviews: 156,
    bio: 'Мужские стрижки с характером. Чёткие линии, плавные переходы, идеальная борода.',
    specialties: ['Мужские стрижки', 'Оформление бороды', 'Королевское бритьё'],
    services: [
      { id: 'haircut-men', label: 'Мужская стрижка', duration: '45 мин', price: 'от 800 ₽' },
      { id: 'beard-trim', label: 'Оформление бороды', duration: '30 мин', price: 'от 600 ₽' },
      { id: 'haircut-beard', label: 'Стрижка + борода', duration: '60-75 мин', price: 'от 1 300 ₽' },
      { id: 'royal-shave', label: 'Королевское бритьё', duration: '30-45 мин', price: 'от 700 ₽' },
    ],
    portfolio: [
      { id: 1, image: '/portfolio/dmitry-1.jpg', title: 'Фейд + текстура', category: 'Стрижка' },
      { id: 2, image: '/portfolio/dmitry-2.jpg', title: 'Оформление бороды', category: 'Барбер' },
      { id: 3, image: '/portfolio/dmitry-3.jpg', title: 'Классика с пробором', category: 'Стрижка' },
    ],
    schedule: {
      mon: { start: 10, end: 21, available: true },
      tue: { start: 10, end: 21, available: true },
      wed: { start: 10, end: 21, available: true },
      thu: { start: 10, end: 21, available: true },
      fri: { start: 10, end: 21, available: true },
      sat: { start: 10, end: 21, available: true },
      sun: { start: 11, end: 19, available: true },
    },
    bookedSlots: ['2025-06-01T11:00', '2025-06-01T15:00'],
  },
  {
    id: 5,
    name: 'Дмитрий',
    role: 'Барбер',
    avatar: '../src/assets/img/barber2.webp',
    coverPhoto: '../src/assets/img/barber2.webp',
    rating: 4.9,
    reviews: 156,
    bio: 'Мужские стрижки с характером. Чёткие линии, плавные переходы, идеальная борода.',
    specialties: ['Мужские стрижки', 'Оформление бороды', 'Королевское бритьё'],
    services: [
      { id: 'haircut-men', label: 'Мужская стрижка', duration: '45 мин', price: 'от 800 ₽' },
      { id: 'beard-trim', label: 'Оформление бороды', duration: '30 мин', price: 'от 600 ₽' },
      { id: 'haircut-beard', label: 'Стрижка + борода', duration: '60-75 мин', price: 'от 1 300 ₽' },
      { id: 'royal-shave', label: 'Королевское бритьё', duration: '30-45 мин', price: 'от 700 ₽' },
    ],
    portfolio: [
      { id: 1, image: '/portfolio/dmitry-1.jpg', title: 'Фейд + текстура', category: 'Стрижка' },
      { id: 2, image: '/portfolio/dmitry-2.jpg', title: 'Оформление бороды', category: 'Барбер' },
      { id: 3, image: '/portfolio/dmitry-3.jpg', title: 'Классика с пробором', category: 'Стрижка' },
    ],
    schedule: {
      mon: { start: 10, end: 21, available: true },
      tue: { start: 10, end: 21, available: true },
      wed: { start: 10, end: 21, available: true },
      thu: { start: 10, end: 21, available: true },
      fri: { start: 10, end: 21, available: true },
      sat: { start: 10, end: 21, available: true },
      sun: { start: 11, end: 19, available: true },
    },
    bookedSlots: ['2025-06-01T11:00', '2025-06-01T15:00'],
  },
  {
    id: 6,
    name: 'Дмитрий',
    role: 'Барбер',
    avatar: '../src/assets/img/barber3.webp',
    coverPhoto: '../src/assets/img/barber3.webp',
    rating: 4.9,
    reviews: 156,
    bio: 'Мужские стрижки с характером. Чёткие линии, плавные переходы, идеальная борода.',
    specialties: ['Мужские стрижки', 'Оформление бороды', 'Королевское бритьё'],
    services: [
      { id: 'haircut-men', label: 'Мужская стрижка', duration: '45 мин', price: 'от 800 ₽' },
      { id: 'beard-trim', label: 'Оформление бороды', duration: '30 мин', price: 'от 600 ₽' },
      { id: 'haircut-beard', label: 'Стрижка + борода', duration: '60-75 мин', price: 'от 1 300 ₽' },
      { id: 'royal-shave', label: 'Королевское бритьё', duration: '30-45 мин', price: 'от 700 ₽' },
    ],
    portfolio: [
      { id: 1, image: '/portfolio/dmitry-1.jpg', title: 'Фейд + текстура', category: 'Стрижка' },
      { id: 2, image: '/portfolio/dmitry-2.jpg', title: 'Оформление бороды', category: 'Барбер' },
      { id: 3, image: '/portfolio/dmitry-3.jpg', title: 'Классика с пробором', category: 'Стрижка' },
    ],
    schedule: {
      mon: { start: 10, end: 21, available: true },
      tue: { start: 10, end: 21, available: true },
      wed: { start: 10, end: 21, available: true },
      thu: { start: 10, end: 21, available: true },
      fri: { start: 10, end: 21, available: true },
      sat: { start: 10, end: 21, available: true },
      sun: { start: 11, end: 19, available: true },
    },
    bookedSlots: ['2025-06-01T11:00', '2025-06-01T15:00'],
  },
];

// 📞 Контактная информация (без изменений)
// export const CONTACT_INFO = [
//   { icon: '📍', label: 'Адрес', value: 'г. Москва, ул. Примерная, д. 15' },
//   { icon: '📞', label: 'Телефон', value: '+7 (999) 123-45-67' },
//   { icon: '🕐', label: 'Время работы', value: 'Пн–Сб: 9:00 – 21:00\nВс: 10:00 – 19:00' },
//   { icon: '✉️', label: 'Email', value: 'info@gamma-krasota.ru' },
// ];

// ⏰ Генерация слотов времени для конкретного мастера и даты
export const generateTimeSlots = (date, master) => {
  if (!master) return [];
  
  const dayKey = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][date.getDay()];
  const schedule = master.schedule[dayKey];
  
  // Если мастер не работает в этот день
  if (!schedule?.available) return [];
  
  const slots = [];
  const slotDuration = 90; // 1.5 часа между записями
  
  for (let hour = schedule.start; hour < schedule.end; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      const slotKey = `${date.toISOString().split('T')[0]}T${time}`;
      
      // Проверяем, не занят ли слот
      const isBooked = master.bookedSlots?.includes(slotKey) || false;
      
      slots.push({
        time,
        available: !isBooked,
        meta: { date: date.toISOString(), masterId: master.id, slotKey }
      });
    }
  }
  
  return slots;
};