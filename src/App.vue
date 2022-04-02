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
    <appFooter v-if="!isLoading"></appFooter>
  </main>
</template>

<script>
import appHeader from "./components/app-header.vue";
import appFooter from "./components/app-footer.vue";
export default {
  name: "app",
  created() {
    this.$store.dispatch({ type: "loadGigs" });
    this.$store.dispatch({ type: "loadOrders" });
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
    appFooter,
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
