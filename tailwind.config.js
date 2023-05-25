/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/**/*{.tsx,ts}', 'index.html'],
  theme: {
    height:{
      // px
      '150px': '150px',
      '250px': '250px',

      // percentage
      '20%':'20%',
      '50%':'50%',
      '60%':'60%',
      '80%': '80%',
      '90%': '90%',
      '100%': '100%',
      //view height
        
      '100vh': '100vh',
    },
    width:{
      //%
      '50%':'50%',
      '60%':'60%',
      // vw
      '100vw':'100vw'
    },
    extend: {},
  },
  plugins: [],
}

