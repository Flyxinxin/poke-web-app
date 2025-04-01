import type {
  DetailApiResponse,
  PokemonItem,
  PokemonDetail,
  PokemonApiResponse,
  TransformedPokemonList,
} from "~/type";

export const transformPokemonList = (
  res: PokemonApiResponse,
  page: number,
  pageSize: number
): TransformedPokemonList => {
  const pokemons = res.results.map((pokemon) => {
    const id = parseInt(pokemon.url.split("/").slice(-2, -1)[0]);
    return {
      id,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });

  return {
    count: res.count,
    page,
    pageSize,
    totalPages: Math.ceil(res.count / pageSize),
    pokemons,
  };
};

export const transformPokemonDetail = (
  pokemon: DetailApiResponse
): PokemonDetail => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    weight: pokemon.weight,
    height: pokemon.height,
  };
};
