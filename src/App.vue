<template>
  <component :is="'default-layout'"></component>
</template>

<script>
  import DefaultLayout from "./layouts/DefaultLayout.vue";

  export default {
    components: {
      DefaultLayout,
    },
  };
</script>
