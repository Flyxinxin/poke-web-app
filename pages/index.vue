<template>
  <div class="container">
    <h1 class="title">Pokemon Familiy</h1>

    <div v-if="data">
      <div
        v-for="page in data.pages"
        :key="page.page"
        class="pokemon-list-container"
      >
        <div
          v-for="pokemon in page.pokemons"
          :key="pokemon.id"
          class="pokemon-item"
          @click="goToDetail(pokemon.id)"
        >
          <img :src="pokemon.image" class="pokemon-image" >
          <p class="pokemon-text">ID: {{ pokemon.id }}</p>
          <p class="pokemon-text">Name: {{ pokemon.name }}</p>
        </div>
      </div>
    </div>

    <div class="button-container">
      <button
        v-if="hasNextPage"
        class="load-more-button"
        :disabled="isFetchingNextPage"
        @click="() => fetchNextPage()"
      >
        {{ isFetchingNextPage ? "Loading..." : "Load More" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInfiniteQuery } from "@tanstack/vue-query";

const router = useRouter();

const getPokemonList = async ({ pageParam = 1 }) => {
  try {
    const response = await fetch(`/api/getList?page=${pageParam}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
  }
};

const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
  useInfiniteQuery({
    queryKey: ["getPokemonList"],
    queryFn: getPokemonList,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      console.log(lastPage, pages, "pages");
      if (lastPage.page >= lastPage.totalPages) return undefined;
      return lastPage.page + 1;
    },
  });

const goToDetail = (id: number) => {
  router.push(`/pokemons/${id}`);
};
</script>

<style scoped>
@import "../styles/index.css";
</style>
