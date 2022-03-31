<template>
  <main>
    <appHeader></appHeader>
    <div
      class="isloading"
      v-loading.fullscreen.lock="isLoading"
      element-loading-text="Loading..."
      element-loading-background="rgba(255,255,255)"
    ></div>
    <RouterView />
  </main>
</template>

<script>
import appHeader from "./components/app-header.vue";
// import appHeader from "./components/logged-out-app-header-copy.vue";
export default {
  name: "app",
  created() {
    this.$store.dispatch({ type: "loadGigs" });
    this.$store.dispatch({ type: "loadOrders" });
    this.$store.dispatch({type:'isLoading', isLoading:false})
  },

  data() {
    return {
      appHeader: null,
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    setAppHeader() {
      return this.appHeader;
    },
  },

  methods: {
    component: "appHeader",
  },
  components: {
    appHeader,
  },
  mounted() {
    window.onresize();
  },

  // @GUY - שמתי פה דברים שיעזרו לי בהמשף ךרנדר קומפוננטה דינמית באפ הדר
  watch: {
    $route: {
      handler({ path }) {
        if (path === "/") this.appHeader = "appHeader";
        if (path === "/business") this.appHeader = "businessHeader";
        if (path === "/seller") this.appHeader = "sellerHeader";
      },
    },
  },
};
</script>
<style>
.is-loading-state {
  background-color: blueviolet;
  font-size: 200px;
  z-index: 99999999;
}
</style>
