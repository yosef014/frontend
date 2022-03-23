<template>
  <main>
    <appHeader :pageName="getRoute"></appHeader>
    <RouterView />
  </main>
</template>

<script>
  import appHeader from'./components/logged-out-app-header.vue'
  export default {
    name: "app",
    created() {
      console.log("🚀 ~ file: App.vue ~ line 14 ~ created ~ this.$route", this.$route)
      this.$store.dispatch({ type: "loadGigs" });
    },
    methods: {},
    components: {
      appHeader,
    },

    computed: {
      getRoute() {
        return this.$route
      }
    }
  };
</script>
