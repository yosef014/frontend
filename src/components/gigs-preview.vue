<template>
  <div>
    <div class="breadcrumbs">loaction page</div>
    <div class="gig-filters">filters</div>
    <div class="gig-list">
      <div class="gig-card" v-for="gig in gigs" :key="gig.id">
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
      </div>

      <!-- list -->
    </div>
  </div>
</template>

<script>
import appHeader from "../components/app-header.cmp.vue";
export default {
  data() {
    return {};
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
