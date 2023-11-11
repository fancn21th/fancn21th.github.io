<script setup>
import { ref, watch } from "vue";

const titleRef = ref(null);
const href = ref("#");

// 监听
watch(
  () => titleRef.value,
  () => {
    href.value = `/zh/data/product/#${titleRef.value?.innerHTML?.trim()}`;
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <a :href="href" target="_blank" ref="titleRef"><slot /></a>
</template>

<style scoped></style>
