<template>
  <main>
    <appHeader></appHeader>
    <!-- <div
      v-loading.fullscreen.lock="isLoading"
      element-loading-text="Loading..."
      element-loading-background="rgba(255,255,255)"
    ></div> -->
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
    return {};
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },

  methods: {
    component: "appHeader",
  },
  components: {
    appHeader,
    appFooter,
  },
  mounted() {},

  // @GUY - שמתי פה דברים שיעזרו לי בהמשף ךרנדר קומפוננטה דינמית באפ הדר
  watch: {},
};
</script>
