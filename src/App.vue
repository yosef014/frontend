<template>
  <main>
    <RouterView />
  </main>
</template>

<script>
  // import appHeader from "./components/logged-out-app-header.vue";
  export default {
    name: "app",
    created() {
      this.$store.dispatch({ type: "loadGigs" });
    },
    methods: {},
    components: {
      // appHeader,
    },

    computed: {
      
    }
  };
</script>
