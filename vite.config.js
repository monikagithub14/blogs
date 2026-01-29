import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
    allowedHosts:true,
  }
})


// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/cdn-models": {
//         target: "https://maisonaditi.b-cdn.net",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/cdn-models/, ""),
//       },
//     },
//   },
// });