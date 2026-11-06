/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF8F4',
        cream: '#F5EFE7',
        sand: '#EAE0D5',
        beige: '#D9C7B7',
        nude: '#C9A98F',
        clay: '#A67B5B',
        mocha: '#7A5C42',
        espresso: '#3D2B1F',
        blush: '#E8D5D0',
        rose: '#D4AFA8',
        sage: '#9BA89A',
        ink: '#2A2520',
        muted: '#8A7C6E',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'super-wide': '0.3em',
      },
      maxWidth: {
        prose: '65ch',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.15)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 1.2s ease forwards',
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
