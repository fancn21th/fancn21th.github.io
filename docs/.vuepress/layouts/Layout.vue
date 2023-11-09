<script setup>
// https://v2.vuepress.vuejs.org/zh/reference/default-theme/extending.html#%E5%B8%83%E5%B1%80%E6%8F%92%E6%A7%BD
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { watch, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isBigScreen = ref(false);

watch(
  () => route.path,
  async (value) => {
    if (value.includes("bigscreen")) {
      isBigScreen.value = true;
    } else {
      isBigScreen.value = false;
    }
  },
  { immediate: true }
);
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <div class="website">
        <a
          v-if="isBigScreen"
          target="_blank"
          href="https://scream.fancn21th.cn"
        >
          👉 🔗 大屏 DEMO
        </a>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.website {
  position: relative;
}
.website a {
  position: fixed;
  top: var(--navbar-height);
  right: 0;
  padding: 10px;
  color: #fff;
  background-color: var(--c-text-accent);
  border-radius: 0 0 0 10px;
  text-decoration: none;
}
</style>
