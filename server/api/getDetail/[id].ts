import PokemonMapper from "../mapper";
import type { DetailApiResponse } from "~/type";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;

  if (!id) {
    return { error: "Missing detail id" };
  }

  try {
    console.log(`Fetching pokemon details for ID: ${id}`);
    const response = await $fetch<DetailApiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    console.log("response:", response);

    return PokemonMapper.PokemonDetail(response);
  } catch (error) {
    console.error("Error fetching pokemon details:", error);
    return { error: "Failed to fetch pokemon detail data" };
  }
});
