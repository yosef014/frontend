<template>
  <main>
    <appHeader ></appHeader>
    <RouterView />
  </main>
</template>

<script>
  import appHeader from'./components/logged-out-app-header.vue'
  export default {
    name: "app",
    created() {
      console.log(this.$route);
      this.$store.dispatch({ type: "loadGigs" });
    },
    methods: {},
    components: {
      appHeader,
    },
  };
</script>
