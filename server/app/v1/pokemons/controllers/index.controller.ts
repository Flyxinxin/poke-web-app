import { getPokemonList } from "../services/index.service";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const page = parseInt(query.page as string) || 1;

  try {
    const data = await getPokemonList(page);
    console.log(data, "data");
    return data;
  } catch (error) {
    console.error("Error fetching pokemon List data:", error);
    return { error: "Failed to fetch pokemon List data33" };
  }
});
