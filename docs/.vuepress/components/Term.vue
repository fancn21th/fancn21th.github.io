<script setup>
defineProps({});

const href = "https://vuedose.tips/data-provider-component-in-vue-js";
</script>

<template>
  <a :href="href" target="_blank"><slot /></a>
</template>

<style scoped></style>
