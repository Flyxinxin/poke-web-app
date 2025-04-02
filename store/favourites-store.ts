import { defineStore } from 'pinia'
import type { PokemonItem } from '~/type'

export const useFavouriteStore = defineStore('favourite', {
  state: () => ({
    favourites: [] as PokemonItem[],
  }),
  actions: {
    handleFavourite(pokemon: PokemonItem) {
      const index = this.favourites.findIndex(fav => fav.id === pokemon.id)
      if (index === -1) {
        this.favourites.push(pokemon)
      } else {
        this.favourites.splice(index, 1)
      }
    },
  },
})
