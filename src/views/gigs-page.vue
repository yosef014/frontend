<template>
  <div>
    <div class="breadcrumbs">loaction page</div>
    <div class="gig-filters">filters</div>
    <div class="gig-list">
      <gigsPreview :gigs="gigs" />

      <!-- list -->
    </div>
  </div>
</template>

<script>
import gigsPreview from "../components/gigs-preview.vue";
import LoggedOutNavbar from "../components/logged-out-app-header.vue";
export default {
  data() {
    return {};
  },
  components: {
    gigsPreview,
    LoggedOutNavbar,
  },
  created() {},
  computed: {
    gigs() {
      return this.$store.getters.gigs;
    },
  },
};
</script>
