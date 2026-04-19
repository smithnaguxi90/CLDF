import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"], // Faz o cache de todos esses arquivos para rodar offline
      },
      manifest: {
        name: "Motor Dinâmico CLDF",
        short_name: "CLDF Pro",
        description: "Planejador Estratégico de Estudos Pro",
        theme_color: "#059669", // Substitua pelo HEX da sua logo
        background_color: "#f8fafc",
        display: "standalone",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
      avif: {
        quality: 80,
      },
      svg: {
        multipass: true,
      },
    }),
  ],
});
