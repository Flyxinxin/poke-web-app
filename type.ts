export interface PokemonItem {
  id: number;
  name: string;
  image: string;
}

export interface PokemonDetail extends PokemonItem {
  height: number;
  weight: number;
}

export interface DetailApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
}
