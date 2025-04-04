import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useFavouriteStore } from '@/store/favourites-store'
import type { PokemonItem } from '~/type'

describe('Favourite Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should initialize with an empty favourites list', () => {
    const store = useFavouriteStore()
    expect(store.favourites).toEqual([])
  })

  it('should add a Pokemon to favourites', () => {
    const store = useFavouriteStore()
    const pokemon: PokemonItem = {
      id: 1,
      name: 'test',
      image: 'test.png',
    }

    store.handleFavourite(pokemon)
    expect(store.favourites).toContainEqual(pokemon)
  })

  it('should remove a Pokemon from favourites if already added', () => {
    const store = useFavouriteStore()
    const pokemon: PokemonItem = {
      id: 1,
      name: 'test',
      image: 'test.png',
    }

    store.handleFavourite(pokemon)
    store.handleFavourite(pokemon)
    expect(store.favourites).not.toContainEqual(pokemon)
  })

  it('should handle multiple Pokemon in favourites', () => {
    const store = useFavouriteStore()
    const pokemon1: PokemonItem = {
      id: 1,
      name: 'test1',
      image: 'test1.png',
    }
    const pokemon2: PokemonItem = {
      id: 2,
      name: 'test2',
      image: 'charmande2.png',
    }

    store.handleFavourite(pokemon1)
    store.handleFavourite(pokemon2)
    expect(store.favourites).toStrictEqual([pokemon1, pokemon2])

    store.handleFavourite(pokemon1)
    expect(store.favourites).toStrictEqual([pokemon2])
  })
})
