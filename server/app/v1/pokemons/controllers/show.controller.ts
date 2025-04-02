import { transformPokemonDetail } from "../mappers/pokemons.mappers";
import { getPokemonDetail } from "../services/show.service";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;

  if (!id) {
    return { error: "Pokemon ID is required" };
  }

  try {
    const data = await getPokemonDetail(id);
    return transformPokemonDetail(data);
  } catch (error) {
    return { error: "Failed to fetch Pokemon detail data" };
  }
});
