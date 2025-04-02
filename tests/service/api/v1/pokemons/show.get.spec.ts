import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('GET /api/v1/pokemons/:id', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return Pokémon details for a valid ID', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      id: 1,
      name: 'test',
      image: 'test.png',
      height: 10,
      weight: 19,
    })

    vi.stubGlobal('$fetch', mockFetch)

    const response = await $fetch('/api/v1/pokemons/1')

    if ('id' in response) {
      expect(response.id).toBe(1)
      expect(response.name).toBe('test')
      expect(response.image).toBe('test.png')
      expect(response.height).toBe(10)
      expect(response.weight).toBe(19)
    } else {
      throw new Error('Expected valid Pokémon detail response')
    }
    expect(mockFetch).toHaveBeenCalledTimes(1)
  })

  it('should return 404 for an invalid Pokemon ID', async () => {
    const mockFetch = vi.fn().mockRejectedValue(new Error('404 Not Found'))

    vi.stubGlobal('$fetch', mockFetch)

    try {
      await $fetch('/api/v1/pokemons/999999')
    } catch (error) {
      const caughtError = error as Error
      expect(caughtError.message).toBe('404 Not Found')
      expect(mockFetch).toHaveBeenCalledTimes(1)
    }
  })
})
