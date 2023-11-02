<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a :href="href" target="_blank"><slot></slot></a>
</template>

<style scoped></style>
