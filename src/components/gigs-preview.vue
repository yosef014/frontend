<template>
<<<<<<< HEAD
  <div class="gig-card" v-for="gig in gigs" :key="gig.id">
    <div class="gig-img">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="cuurImg in gig.productImgs" :key="cuurImg">
          <img :src="cuurImg" />
        </el-carousel-item>
      </el-carousel>
=======
  <div class="gig-card" v-for="gig in gigs" :key="gig._id">
    <div class="gig-img" @click="this.$router.push('/tag' + '/' + gig.category + '/'+ gig._id)">
      <!-- <el-carousel trigger="click" height="150px" :autoplay="false" >
      <el-carousel-item v-for="currImg in gig.productImgs" :key="currImg">
         <img :src="currImg" />
  </el-carousel-item>
    </el-carousel> -->
    <Carousel>
    <Slide v-for="currImg in gig.productImgs" :key="currImg">
       <img :src="currImg" />
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>


>>>>>>> 73e337fb351c58fe5669caf1b09aa14572ff1976
    </div>
    <div class="gig-add-by">
      <img :src="gig.imgUrl" />

      ad by : {{ gig.fullname }}
    </div>
    <div class="gig-title">
      {{ gig.title }}
    </div>
    <div class="gig-review-rate">{{ gig.rate }}⭐</div>
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
    methods: {},
  };
</script>
