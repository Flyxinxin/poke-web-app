import { getPokemonList } from '../services/index.service'
import { transformPokemonList } from '../mappers/pokemons.mappers'

// The controller to receives the request
// And calls the service and processes the data to the View.

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const page = Number(query.page) || 1
  const pageSize = 20
  const offset = (page - 1) * pageSize

  try {
    const data = await getPokemonList({ limit: pageSize, offset })
    return transformPokemonList(data, { page, pageSize })
  } catch (error) {
    return { error }
  }
})
