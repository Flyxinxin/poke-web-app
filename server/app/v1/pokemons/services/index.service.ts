import type { PokemonApiResponse } from '~/type'

export const getPokemons = async ({
  limit,
  offset,
}: {
  limit: number
  offset: number
}) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  try {
    const response = await $fetch<PokemonApiResponse>(url)
    return response
  } catch {
    throw new Error('Failed to fetch Pokemon list data')
  }
}
