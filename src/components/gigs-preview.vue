<template>
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


    </div>
    <div class="gig-add-by">
      
      <img :src="gig.imgUrl" />
      
      ad by : {{ gig.fullname }}
    </div>
    <div class="gig-title">
      {{ gig.title }}
    </div>
    <div class="gig-review-rate">
      {{ gig.rate }}⭐
    </div>
    <div class="gig-card-footer">{{ gig.price }} ❤</div>
 

  
  </div>


</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';


export default {
  props: {
    gigs: Object,
  },
  data() {
    return {
      settings: {
          itemsToShow: 1,
          itemsToScroll: 5,
          transition: 600,
          snapAlign: "center",
          wrapAround: true,
        },
    };
  },
  components: {
 Carousel,
    Slide,
    Pagination,
    Navigation,  },
  created() {},
  computed: {},
  methods: {
   
  },
};
</script>
<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>

