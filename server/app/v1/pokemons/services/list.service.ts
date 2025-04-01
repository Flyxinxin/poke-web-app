import type { PokemonApiResponse } from "~/type";
import { transformPokemonList } from "../mappers/pokemons.mappers";

export const getPokemonList = async (page: number) => {
  const limit = 20;
  const offset = (page - 1) * limit;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  console.log(`API: ${url}`);

  try {
    const response = await $fetch<PokemonApiResponse>(url);
    return transformPokemonList(response, page, limit);
  } catch (error) {
    console.error("Error fetching Pokemon list data:", error);
    throw new Error("Failed to fetch Pokemon list data");
  }
};
