<template>
  <img :src="src" :alt="alt" class="img" :class="{ 'img--taller': tall }" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    tall: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.img {
  width: 10rem;
  height: auto;
  border: 1px solid lightgray;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
  box-sizing: border-box;
}
.img--taller {
  padding: 1rem;
}
</style>
