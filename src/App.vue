<template>
  <main>
    <appHeader></appHeader>
    <RouterView />
  </main>
</template>

<script>
  import appHeader from "./components/app-header.cmp.vue";
  export default {
    name: "app",
    created() {
      this.$store.dispatch({ type: "loadGigs" });
    },
    methods: {},
    components: {
      appHeader,
    },
  };
</script>
