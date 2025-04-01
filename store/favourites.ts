import { defineStore } from "pinia";
import type { PokemonItem } from "~/type";

interface State {
  favourites: PokemonItem[];
}

export const hasFavourites = defineStore("favourites", {
    state: (): State => ({
        favourites: [],
    }),
    actions: {
      addFavour() {
      
      },
      removeFavour() {
        
      },
    },
  });

