<template>
  <div class="pokemon">
    <h1>Pokemon Details</h1>

    <div v-if="pokemon" class="pokemon-detail">
      <img :src="pokemon.image" class="pokemon-image" :alt="pokemon.name" />
      <h2 class="pokemon-name">{{ pokemon.name }}</h2>
      <span class="pokemon-id">ID: {{ pokemon.id }}</span>
      <span class="pokemon-height">Height: {{ pokemon.height }}</span>
      <span class="pokemon-weight">Weight: {{ pokemon.weight }}</span>
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
.pokemon {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.pokemon-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pokemon-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
}

.pokemon-name {
  font-size: 1.5rem;
  font-weight: bold;
}

.pokemon-id,
.pokemon-height,
.pokemon-weight {
  font-size: 1.2rem;
  margin-top: 10px;
}

.back-button {
  padding: 10px 16px;
  margin: 6px 0;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
