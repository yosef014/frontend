<template>
  <div>
    <div class="breadcrumbs">loaction page</div>
    <div class="gig-filters">filters</div>
    <div class="gig-list">
      <gigsPreview :gigs="gigs" />

      <!-- list -->
    </div>
    {{gigsToShow}}
  </div>
</template>

<script>
import gigsPreview from "../components/gigs-preview.vue";
import LoggedOutNavbar from "../components/logged-out-app-header.vue";

export default {
  data() {
    return {
    
    };
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
    gigsToShow(){
      const category =  this.$route.params.gig;
        
      const gigsToDisplay= this.gigs.filter((gig)=>gig.category == category)
      
      console.log(gigsToDisplay);
    }
  },
};
</script>
