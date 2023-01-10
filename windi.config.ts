import {defineConfig} from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        main: {
          yellow: '#EDDB8A',
        },
        teal: {
          50: '#C2DDB2',
          100: '#B6F0B9',
          400: '#0BDCBA',
        },
        light: {
          100: '#FDFDF5',
          200: '#FFF2DE',
        },
        dark:{
          400:'#3E371D'
        },
        pink:{
          100:'#FFD8D2'
        }
      },
    },
  },
  plugins: [formsPlugin],
})
