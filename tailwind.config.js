/** @type {import('tailwindcss').Config} */
import clamp from '@tailwindcss/line-clamp'
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blackP: {
          DEFAULT: '#0A070B',
          900: '#0b080cfa',
          400: '#15161C',
          300: '#363536',
          200: '#4F4E50',
          100: '#737174',
          50: '#00000033'
        },
        whiteP: {
          DEFAULT: '#F7F7F7',
          900: '#F6F6F6',
          400: '#F5F5F5',
          300: '#E5E5E5',
          200: '#D9D9D9',
          100: '#C9C9C9',
          75: '#FFFFFF56',
          50: '#FFFFFF33'
        },
        redP: '#F41B3B',
        blueP: '#1884F7',
        greenP: '#1EBC99',
        YellowP: '#F9CC0D'

      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif']
      },
      transitionProperty: {
        size: 'width, height'
      },
      keyframes: {
        resize: {
          '0%': { width: '100%' },
          '100%': { width: '83.33%' }
        },
        resizeButton: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.3)' }
        }
      },
      animation: {
        resize: 'resize 0.3s ease-in-out',
        resizeButton: 'resizeButton 0.4s ease-in-out forwards'
      }
    }
  },
  plugins: [clamp]
}
