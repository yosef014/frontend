<template>
  <main>
        <appHeader></appHeader>

    <RouterView />
  </main>
</template>

<script>
  import appHeader from "./components/logged-out-app-header.vue";
  export default {
    name: "app",
    created() {
      this.$store.dispatch({ type: "loadGigs" });
      this.$store.dispatch({ type: "loadOrders" });
    },

    data() {
      return {
        appHeader: null,

      }
    },

    methods: {
      appHeader: 'appHeader',
      
    },
    components: {
      appHeader,
    },

    // @GUY - שמתי פה דברים שיעזרו לי בהמשף ךרנדר קומפוננטה דינמית באפ הדר
    watch: {
      $route: {
        handler({path}) {
          if (path === '/') this.appHeader = 'appHeader'
          if (path === '/business') this.appHeader = 'businessHeader'
          if (path === '/seller') this.appHeader = 'sellerHeader'
        }
      }
    },

    computed: {
      setAppHeader() {
        return this.appHeader
      }
    }
  };
</script>
