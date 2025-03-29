import type { DetailApiResponse, PokemonDetail, PokemonItem } from "~/type";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class PokemonMapper {
  static PokemonItem(pokemon: { name: string; url: string }): PokemonItem {
    const id = parseInt(pokemon.url.split("/").slice(-2, -1)[0]);
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return {
      id,
      name: pokemon.name,
      image,
    };
  }

  static PokemonDetail(pokemon: DetailApiResponse): PokemonDetail {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      weight: pokemon.weight,
      height: pokemon.height,
    };
  }
}

export default PokemonMapper;
