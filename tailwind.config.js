module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        magic: {
          '0%': { transform: 'rotate(0deg)', opacity: '100%' },
          '50%': { transform: 'rotate(180deg)', opacity: '0%' },
          '100%': { transform: 'rotate(360deg)', opacity: '100%' },
        },
        header: {
          '0%, 100%': { opacity: 100 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        magic: 'magic 500ms ease-in-out',
        header: 'header 300ms ease-in-out',
      },
    },
  },
  plugins: [],
}
