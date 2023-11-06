<script setup>
import { ref, watch } from "vue";

const titleRef = ref(null);
const href = ref("#");

const map = {
  vuepress: "https://v2.vuepress.vuejs.org/",
  "gridster.js": "https://dsmorse.github.io/gridster.js/",
  "vue3-grid-layout": "https://github.com/xhlife/vue3-grid-layout",
};

// 监听
watch(
  () => titleRef.value,
  () => {
    href.value = map[titleRef.value?.innerHTML?.trim().toLowerCase()] || "#";
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
