<template>
  <div>
    <h1>details page</h1>
    <span>{{ pokemon }}</span>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
const route = useRoute();
const id = computed(() => route.params.id as string);

const fetchPokemonDetail = async () => {
  return await $fetch<{ id: number; name: string; image: string }>(`/api/getDetail/${id.value}`);
};

const { data: pokemon, isLoading, error } = useQuery({
  queryKey: ['detail', id],
  queryFn: fetchPokemonDetail,
  enabled: computed(() => !!id.value),
});
console.log(pokemon, isLoading, error)
</script>
