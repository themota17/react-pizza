<template>
  <div class="default-layout">
    <the-header />
    <router-view></router-view>
  </div>
</template>

<script>
  import TheHeader from "../components/TheHeader.vue";

  export default {
    components: { TheHeader },
  };
</script>

<style lang="scss" scoped>
  .default-layout {
    max-width: 1200px;

    margin: 0 auto;
  }
</style>
