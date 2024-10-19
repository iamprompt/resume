import { type Config } from 'tailwindcss'

const config = {
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
