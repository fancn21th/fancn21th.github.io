<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="avatar-container">
    <figure class="avatar-content">
      <img :src="src" :alt="name" class="avatar-img" />
      <figcaption>{{ name }}</figcaption>
    </figure>
  </div>
</template>
<style scoped>
figure,
img,
figcaption {
  margin: 0;
  padding: 0;
}
.avatar-container {
  display: inline-block;
  margin: 10px;
}
.avatar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
