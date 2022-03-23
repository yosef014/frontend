<template>
<section v-if="gigs">
  <div class="gig-card" v-for="gig in gigs" :key="gig.id">
    <div class="gig-img">
      <!-- <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="cuurImg in gig.productImgs" :key="cuurImg">
         <img :src="cuurImg" />
  </el-carousel-item>
    </el-carousel> -->
    <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in slides" :key="slide">
      <div>
        <!-- <div class="carousel__item"> -->

        <div class="subcategory-wrapper">
          <a class="subcategory">
            <h4>
              <small>{{ slide.small }}</small>
              {{ slide.h4 }}
            </h4>
            <picture>
              <img :src="slide.url" alt="" />
            </picture>
          </a>
          <!-- </div> -->
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
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

</section>
</template>

<script>
// import appHeader from "../components/app-header.cmp.vue";
import { Carousel, Navigation, Slide } from "vue3-carousel"
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
      Navigation,
    
    // appHeader,
  },
  created() {
    console.log(this.gigs);
  },
  computed: {},
  methods: {
   
  },
};
</script>
