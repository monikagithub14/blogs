import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow network access
    port: 5173,
    strictPort: true,
    // Add this line to allow Cloudflared hostname
    allowedHosts: [".trycloudflare.com"],
  },
});

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
