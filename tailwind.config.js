/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          gold: {
            DEFAULT: '#FFD700',
            dark: '#E6C200',
            light: '#FFF3B0',
          },
          dark: {
            DEFAULT: '#0a0a0a',
            secondary: '#1a1a1a',
            tertiary: '#222222',
          },
          gray: {
            DEFAULT: '#aaaaaa',
          }
        },
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
        },
        animation: {
          'pulse-slow': 'pulse 4s ease-in-out infinite',
          'fade-in-up': 'fadeInUp 0.6s ease forwards',
          'fade-in-down': 'fadeInDown 0.6s ease forwards',
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(40px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeInDown: {
            '0%': { opacity: '0', transform: 'translateY(-20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        transitionTimingFunction: {
          'bounce-out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        }
      },
    },
    plugins: [],
  }