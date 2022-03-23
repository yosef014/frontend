<template>
  <div>
    <div class="breadcrumbs">
      FIVERR > TAGS > {{ gigsToShow[0].category.toUpperCase() }} >
    </div>
    <h1>{{ gigsToShow[0].category }}</h1>
    <div class="gig-filters">filters</div>
    <div class="gig-list">
      <gigsPreview :gigs="gigsToShow" />

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
  async created() {
    // this.category = this.$route.params.gig;
  },
  computed: {
    gigs() {
      return this.$store.getters.gigs;
    },
    gigsToShow() {
      const category = this.$route.params.gig;
      if (!category) return this.gigs;
      const gigsToDisplay = this.gigs.filter((gig) => gig.category == category);
      // this.gigs.forEach((gig) => {
      //   console.log(gig.category);
      // });
      return gigsToDisplay;
    },
  },
};
</script>
