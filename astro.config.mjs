import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

// No se importa el adaptador de Netlify aquí

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon(), compress()],
    // Siempre usa "static" para un CV puramente estático
    output: "static", 
    // No hay "adapter" si no lo necesitas para el build o SSR
});