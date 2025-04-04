<template>
  <div class="container">
    <h1>Pokemon Familiy</h1>
    <NuxtLink to="/pokemons/favourites" class="favourites-link">
      Go to Favourites
    </NuxtLink>
    <div
      v-for="page in data?.pages"
      :key="page.page"
      class="pokemon-list-container"
    >
      <div
        v-for="pokemon in page.pokemons"
        :key="pokemon.id"
        class="pokemon-item"
        @click="goToDetail(pokemon.id)"
      >
        <img :src="pokemon.image" class="pokemon-image" :alt="pokemon.name" />
        <span class="pokemon-text">ID: {{ pokemon.id }}</span>
        <span class="pokemon-text">Name: {{ pokemon.name }}</span>
        <FavouriteButton :pokemon="pokemon" />
      </div>
    </div>

    <button
      v-if="hasNextPage"
      class="load-more-button"
      :disabled="isFetchingNextPage"
      @click="() => fetchNextPage()"
    >
      {{ isFetchingNextPage ? 'Loading...' : 'Load More' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useInfiniteQuery } from '@tanstack/vue-query'

const router = useRouter()

async function getPokemonList({ pageParam = 1 }) {
  try {
    const response = await fetch(`/api/v1/pokemons?page=${pageParam}`)
    return response.json()
  } catch {
    return null
  }
}

const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
  useInfiniteQuery({
    queryKey: ['getPokemonList'],
    queryFn: getPokemonList,
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.page >= lastPage.totalPages) return undefined
      return lastPage.page + 1
    },
  })

function goToDetail(id: number) {
  router.push(`/pokemons/${id}`)
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  text-align: center;
}

.favourites-link {
  text-decoration: none;
}

.pokemon-list-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  justify-content: center;
  margin-top: 24px;
}

.pokemon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.pokemon-image {
  width: 96px;
  height: 96px;
  display: block;
  margin: 0 auto;
}

.pokemon-text {
  margin-top: 8px;
  font-weight: 600;
}

.load-more-button {
  margin-top: 24px;
  padding: 10px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.load-more-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
