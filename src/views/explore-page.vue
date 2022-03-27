<template>
  <div class="page-content-container" v-if="gigsToShow">
    <div class="breadcrumbs">
      <span @click="this.$router.push('/')"> FIIVERR</span> >
      <span @click="this.$router.push('/tag')">SERVICES</span> >
      <span> {{ breadcrumbsToShow.toUpperCase() }} </span>>
      <h1>
        {{
          breadcrumbsToShow
            .split(" ")
            .map((word) => word.split("")[0].toUpperCase() + word.substring(1))
            .join(" ")
        }}
      </h1>
      {{ gigsToShow.length }} Services Available
    </div>
    <gigTabsCarousel></gigTabsCarousel>

    <div class="gig-filters">filters</div>
    <ul class="gig-list grid">
      <li v-for="gig in gigsToShow" :key="gig._id">
        <gigsPreview :gig="gig" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import gigsPreview from "../components/gigs-preview.vue";
import gigTabsCarousel from "../components/gigs-tabs-carousel.vue";
export default {
  data() {
    return {};
  },
  components: {
    gigTabsCarousel,
    gigsPreview,
    Carousel,
    Slide,
    Navigation,
  },
  async created() {},
  computed: {
    gigs() {
      return this.$store.getters.gigs;
    },
    gigsToShow() {
      const category = this.$route.params.gig;
      if (!category) return this.gigs;
      // const gigsToDisplay = this.gigs.filter((gig) => gig.category == category);
      const gigsToDisplay = this.gigs.filter((gig) => {
        return gig.category.some((tab) => category.includes(tab));
      });
      return gigsToDisplay;
    },
    breadcrumbsToShow() {
      if (this.$route.params.gig) return this.$route.params.gig;
      return "all gigs";
    },
  },

  methods: {},
};
</script>
