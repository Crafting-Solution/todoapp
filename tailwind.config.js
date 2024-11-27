/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can customize other theme settings like spacing, colors, etc., here
      colors: {
        primary: '#ff6363',
        secondary: {
            100: '#f3f4f6',
            200: '#e5e7eb',
        }
      },
      spacing: {
        
      },
      height:{
        imgHeight: '250px',
        height1: '8rem',
        height2: '20rem',
        height3: '30rem'
      },
      width:{
        imgWidth: '300px',
        maxWidth: '640px'

      },
      fontFamily: {
          body: ['Nunito']
      },
      fontSize: {
        mammoth: '8rem'
      },
      rotate: {
        customRotate: '-10'
      }
    }
  },
  plugins: [],
}