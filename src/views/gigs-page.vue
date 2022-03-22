<template>
  <div>
    <div class="breadcrumbs">loaction page</div>
    <div class="gig-filters">filters</div>
    <div class="gig-list">list</div>
    {{ gigss }}
  </div>
</template>

<script>
import appHeader from "../components/app-header.cmp.vue";
export default {
  data() {
    return {
      gigss:this.gigs
    };
  },
  components: {
    appHeader,
  },
  created() {},
  computed: {
    gigs() {
      return this.$store.getters.gigs;
    },
  },
};
</script>
