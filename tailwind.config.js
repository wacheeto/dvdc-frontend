module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    // tailwind.config.js
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-dm-sans)'],
          serif: ['var(--font-playfair)'],
        },
      },
    },

  };
  