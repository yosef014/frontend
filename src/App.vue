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
  },
  methods: {},
  components: {
    appHeader,
  },
};
</script>
