<template>
  <button @click.stop="onFavourite" class="favourite-button">
    <span v-if="isFavourite">Favourite</span>
    <span v-else>unFavorite</span>
  </button>
</template>

<script setup lang="ts">
import { useFavouriteStore } from '~/store/favourites-store'
import type { PokemonItem } from '~/type'

const props = defineProps<{
  pokemon: PokemonItem
}>()

const favouriteStore = useFavouriteStore()

function onFavourite() {
  favouriteStore.onFavourite(props.pokemon)
}

const isFavourite = computed(() =>
  favouriteStore.favourites.some(fav => fav.id === props.pokemon.id)
)
</script>

<style scoped>
.favourite-button {
  padding: 10px 10px;
  margin: 6px 0;
  background: #ffcc00;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}
</style>
