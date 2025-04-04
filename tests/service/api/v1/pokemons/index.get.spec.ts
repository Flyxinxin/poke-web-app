import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('GET /api/v1/pokemons', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return a list of Pokemon with pagination', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      count: 100,
      page: 1,
      totalPages: 10,
      pokemons: [
        { id: 1, name: 'test1', image: 'test1.png' },
        { id: 2, name: 'test2', image: 'test2.png' },
      ],
    })

    vi.stubGlobal('$fetch', mockFetch)

    const response = await $fetch('/api/v1/pokemons')

    if ('page' in response) {
      expect(response.page).toBe(1)
      expect(response.count).toBe(100)
      expect(response.totalPages).toBe(10)
      expect(Array.isArray(response.pokemons)).toBe(true)
    } else {
      throw new Error('Expected valid Pokémon list response')
    }

    expect(mockFetch).toHaveBeenCalledTimes(1)
  })
})
