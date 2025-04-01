<template>
  <div class="favourites">
    <h1 class="favourites-title">Favourites</h1>
    <router-link to="/" class="home-link">Go to Home</router-link>
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
          <img :src="pokemon.image" class="pokemon-image" />
          <p class="pokemon-text">ID: {{ pokemon.id }}</p>
          <p class="pokemon-text">Name: {{ pokemon.name }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useFavouriteStore } from "~/store/favourites-store";

const favouriteStore = useFavouriteStore();
const router = useRouter();

const favourites = computed(() => favouriteStore.favourites);

function goToDetail(id: number) {
  router.push(`/pokemons/${id}`);
}
</script>

<style scoped>
@import "../../styles/pokemons/favourites.css";
</style>
