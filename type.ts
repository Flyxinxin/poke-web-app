export interface PokemonItem {
  id: number;
  name: string;
  image: string;
}

export interface PokemonDetail extends PokemonItem {
  height: number;
  weight: number;
}

export interface PokemonApiResponse {
  count: number;
  results: { name: string; url: string }[];
}

export interface TransformedPokemonList {
  count: number;
  page: number;
  pageSize: number;
  totalPages: number;
  pokemons: PokemonItem[];
}

export interface DetailApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
}
