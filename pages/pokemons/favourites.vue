<template>
  <div class="favourites">
    <h1>Favourites</h1>
    <NuxtLink to="/" class="home-link">Go to Home</NuxtLink>
    <p v-if="favourites.length === 0" class="favourites-empty">
      No favourites!
    </p>

    <template v-else>
      <div class="pokemon-list">
        <div
          v-for="pokemon in favourites"
          :key="pokemon.id"
          class="pokemon-item"
          @click="goToDetail(pokemon.id)"
        >
          <img
            :src="pokemon.imageUrl"
            class="pokemon-image"
            :alt="pokemon.name"
          />
          <span class="pokemon-text">ID: {{ pokemon.id }}</span>
          <span class="pokemon-text">Name: {{ pokemon.name }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useFavouriteStore } from '~/store/favourites-store'

const favouriteStore = useFavouriteStore()
const router = useRouter()

const favourites = computed(() => favouriteStore.favourites)

function goToDetail(id: number) {
  router.push(`/pokemons/${id}`)
}
</script>

<style scoped>
.favourites {
  padding: 20px;
  margin: 0 auto;
  text-align: center;
}

.home-link {
  text-decoration: none;
}
.favourites-empty {
  text-align: center;
  font-size: 1.5rem;
}
.pokemon-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  justify-content: center;
  margin-top: 24px;
}

.pokemon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
  cursor: pointer;
}

.pokemon-image {
  width: 100px;
  height: 100px;
}

.pokemon-name {
  margin-top: 10px;
  font-size: 1.2rem;
}
</style>
