import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase'],
    css: ['@/assets/css/main.css', '@/assets/scss/navigation.scss'],
});
