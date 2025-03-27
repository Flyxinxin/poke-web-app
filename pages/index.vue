<template>
  <div>
    <h1>home Page</h1>
    <p>{{ data }}</p>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
const page = ref(1);

const getPokemonList = async () => {
  return await $fetch(`/api/getList?page=${page.value}`);
};

const { data } = useQuery({
  queryKey: ["getPokemonList", page],
  queryFn: getPokemonList,
});
</script>
