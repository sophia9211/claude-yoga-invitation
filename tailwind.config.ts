import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5B7C6C',
          50: '#E8EDEA',
          100: '#D1DBD5',
          200: '#A3B7AB',
          300: '#759381',
          400: '#5B7C6C',
          500: '#4A6558',
          600: '#3A4F45',
          700: '#293832',
          800: '#19221E',
          900: '#080B0A',
        },
        secondary: {
          DEFAULT: '#8B5A2B',
          50: '#F5EDE5',
          100: '#EBDBCB',
          200: '#D7B797',
          300: '#C39363',
          400: '#A6723C',
          500: '#8B5A2B',
          600: '#6F4822',
          700: '#533619',
          800: '#372410',
          900: '#1B1208',
        },
        accent: {
          DEFAULT: '#D4A574',
          50: '#FCF8F4',
          100: '#F9F1E9',
          200: '#F0DCC8',
          300: '#E7C7A7',
          400: '#DEB286',
          500: '#D4A574',
          600: '#C48A4F',
          700: '#A06D36',
          800: '#765028',
          900: '#4C331A',
        },
        background: {
          DEFAULT: '#FAF8F5',
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F0EBE4',
          300: '#E6DDD3',
          400: '#DCD0C2',
          500: '#D2C3B1',
        },
        text: {
          DEFAULT: '#2D3436',
          50: '#E8E9E9',
          100: '#D1D3D3',
          200: '#A3A7A8',
          300: '#757B7C',
          400: '#474F50',
          500: '#2D3436',
          600: '#24292B',
          700: '#1B1F20',
          800: '#121415',
          900: '#090A0A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
