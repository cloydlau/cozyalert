import { name } from './package.json'

// https://vitejs.dev/config/
export default {
  plugins: [],
  build: {
    lib: {
      name,
      entry: 'src/main.ts'
    },
  }
}
