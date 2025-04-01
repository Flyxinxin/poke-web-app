import { getPokemonDetail } from "../services/detail.service";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;

  if (!id) {
    return { success: false, error: "Pokemon ID is required" };
  }

  try {
    const data = await getPokemonDetail(id);
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon detail data:", error);
    return { error: "Failed to fetch Pokemon detail data" };
  }
});
