<template>
  <div>
    <h1>details page</h1>
    <span>{{ pokemon }}</span>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import type { PokemonDetail } from "~/type";
const route = useRoute();
const id = computed(() => route.params.id as string);

const getPokemonDetail = async () => {
  return await $fetch<PokemonDetail>(`/api/getDetail/${id.value}`);
};

const {
  data: pokemon,
  isLoading,
  error,
} = useQuery({
  queryKey: ["getPokemonDetail", id],
  queryFn: getPokemonDetail,
  enabled: computed(() => !!id.value),
});
console.log(pokemon, isLoading, error);
</script>
