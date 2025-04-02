import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import FavouriteButton from '@/components/pokemons/favourite-button.vue'
import { useFavouriteStore } from '@/store/favourites-store'
import { setActivePinia, createPinia } from 'pinia'

describe('FavouriteButton.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should handle favourite state on click', async () => {
    const store = useFavouriteStore()
    const pokemon = { id: 1, name: 'test', image: 'test.png' }

    const wrapper = mount(FavouriteButton, { props: { pokemon } })

    await wrapper.trigger('click')
    expect(store.favourites).toContainEqual(pokemon)

    await wrapper.trigger('click')
    expect(store.favourites).not.toContainEqual(pokemon)
  })
})
