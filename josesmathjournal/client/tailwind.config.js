export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'light-grey': '#F6F9FC',
        'dark-terminal': '#0A2540',
        'accent': '#635BFF',
        'message-background': '#0A253C',
        'message-text': '#00D924',
      },
      borderRadius: {
        'custom-radius': '5px',
      },
      boxShadow: {
        'custom': '0 30px 50px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'source-code-pro': ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New'],
      },
      fontSize: {
        'tiny': '0.6rem', // for small tag
      },
      spacing: {
        '5px': '5px', // for form children margin
      },
      filter: { // if these don't exist by default in your Tailwind version
        'none': 'none',
        'contrast': 'contrast(1.15)',
        'brightness': 'brightness(0.9)',
      },
      transitionProperty: {
        'all': 'all',
      },
      cursor: {
        'none': 'none',
      },
      opacity: {
        '50': '0.5',
      },
      transform: { // if these don't exist by default in your Tailwind version
        'none': 'none',
        'active': 'translateY(0px) scale(0.98)',
      },
    },
  },
  plugins: [],
}
