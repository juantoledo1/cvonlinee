import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

// ¡Importa el adaptador de Netlify en lugar del de Vercel!
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), compress()],
  // Si tu CV es una página estática (lo más común), usa "static"
  // Si tienes funciones de servidor o API routes que quieres usar en Netlify, usa "server"
  output: "static", // Cambia de "server" a "static" si es un sitio estático
  adapter: netlify() // Usa el adaptador de Netlify
});