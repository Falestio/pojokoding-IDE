import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'unplugin-icons/nuxt',  '@vueuse/nuxt'],

    tailwindcss: {
        cssPath: '~/assets/css/main.css'
    }

})
