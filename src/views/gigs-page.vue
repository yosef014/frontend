<template>
  <div>
    <div class="breadcrumbs">loaction page</div>
    <div class="gig-filters">filters</div>
    <div class="gig-list">
       <gigsPreview :gigs="gigs" />

      <!-- <div class="gig-card" v-for="gig in gigs" :key="gig.id">
        <div class="gig-img">
          <img :src="gig.image" />
        </div>
        <div class="gig-add-by">
          <img :src="gig.imgUrl" />
          ad by : {{ gig.fullname }}
        </div>
        <div class="gig-title">
          {{ gig.title }}
        </div>
        <div class="gig-stars-rate">⭐</div>
        <div class="gig-card-footer">{{ gig.price }} ❤</div>
      </div> -->

      <!-- list -->
    </div>
  </div>
</template>

<script>
import gigsPreview from "../components/gigs-preview.vue";
import LoggedOutNavbar from '../components/logged-out-app-header.vue'
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
