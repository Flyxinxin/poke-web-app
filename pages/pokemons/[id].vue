<template>
  <div class="pokemon">
    <h1 class="pokemon-title">Pokemon Details</h1>

    <div v-if="pokemon">
      <img :src="pokemon.image" class="pokemon-image" />
      <h2 class="pokemon-name">{{ pokemon.name }}</h2>
      <p class="pokemon-id">ID: {{ pokemon.id }}</p>
      <p class="pokemon-height">Height: {{ pokemon.height }}</p>
      <p class="pokemon-weight">Weight: {{ pokemon.weight }}</p>
      <FavouriteButton :pokemon="pokemon" />
    </div>

    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-if="error" class="error">Failed to fetch Pokemon details</div>

    <button class="back-button" @click="goBack">Back</button>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import type { PokemonDetail } from '~/type'
import FavouriteButton from '~/components/pokemons/favourite-button.vue'

const route = useRoute()
const router = useRouter()
const id = ref(route.params.id as string)

const getPokemonDetail = async () => {
  return await $fetch<PokemonDetail>(`/api/v1/pokemons/${id.value}`)
}

const {
  data: pokemon,
  isLoading,
  error,
} = useQuery({
  queryKey: ['getPokemonDetail', id],
  queryFn: getPokemonDetail,
  enabled: computed(() => !!id.value),
})

function goBack() {
  router.back()
}
</script>
<style scoped>
@import '../../styles/pokemons/detail.css';
</style>
