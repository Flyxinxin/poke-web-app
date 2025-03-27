import PokemonMapper from "./mapper";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const page = parseInt(query.page as string) || 1;
  const limit = 20;
  const offset = (page - 1) * limit;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  try {
    console.log(`API: ${url}`);
    const response = await $fetch<{
      count: number;
      results: { name: string; url: string }[];
    }>(url);
    console.log("response:", response);

    const pokemons = response.results.map(PokemonMapper.PokemonItem);
    return {
      count: response.count,
      page,
      pageSize: limit,
      totalPages: Math.ceil(response.count / limit),
      pokemons,
    };
  } catch (error) {
    console.error("Error fetching pokemon List data:", error);
    return { error: "Failed to fetch pokemon List data33" };
  }
});
