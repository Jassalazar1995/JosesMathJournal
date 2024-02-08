export default {
  content: [
    "./src/**/*.{js,jsx}", // This line includes all .js and .jsx files in your src directory
  ],
  theme: {
    extend: {
      colors: {
        'light-grey': '#f6f9fc',
        'dark-terminal': '#0a2540',
        'accent': '#635bff',
      },
      borderRadius: {
        'default': '3px',
      },
      boxShadow: {
        'custom-light': '0 30px 50px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
    }, 
  },
  plugins: [],
}
