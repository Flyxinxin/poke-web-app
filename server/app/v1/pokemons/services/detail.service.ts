import { transformPokemonDetail } from "../mappers/pokemons.mappers";
import type { DetailApiResponse } from "~/type";

export const getPokemonDetail = async (id: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const response = await $fetch<DetailApiResponse>(url);
    return transformPokemonDetail(response);
  } catch (error) {
    console.error("Error fetching Pokemon detail data:", error);
    throw new Error("Failed to fetch Pokemon detail data");
  }
};
