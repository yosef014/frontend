<template>
  <div class="gig-card" v-for="gig in gigs" :key="gig.id">
    <div class="gig-img">
      <span class="arrow-left">⬅</span>
      <span class="arrow-right">➡</span>
      <img :src="gig.image" />
    </div>
    <div class="gig-add-by">
      
      <img :src="gig.imgUrl" />
      
      ad by : {{ gig.fullname }}
    </div>
    <div class="gig-title">
      {{ gig.title }}
    </div>
    <div class="gig-stars-rate">
      {{ gig.rate }}⭐
    </div>
    <div class="gig-card-footer">{{ gig.price }} ❤</div>
  

  
  </div>
</template>

<script>
// import appHeader from "../components/app-header.cmp.vue";

export default {
  props: {
    gigs: Object,
  },
  data() {
    return {};
  },
  components: {
    // appHeader,
  },
  created() {},
  computed: {},
  methods: {
   
  },
};
</script>
