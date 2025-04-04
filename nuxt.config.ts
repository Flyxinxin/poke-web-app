// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: ['~/components/pokemons'],
  modules: ['@nuxt/eslint', '@nuxt/test-utils/module', '@pinia/nuxt'],
})
