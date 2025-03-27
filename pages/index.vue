<template>
  <div>
    <h1>home Page</h1>
    <p>{{ data }}</p>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { ref } from "vue";

const page = ref(1);

const { data } = useQuery({
  queryKey: ["getList", page],
  queryFn: () => $fetch(`/api/getList?page=${page.value}`),
});
</script>

