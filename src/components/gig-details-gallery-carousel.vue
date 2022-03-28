<template>
  <Carousel
    class="gig-details-carousel"
    :settings="settings"
    :breakpoints="breakpoints"
  >
    <Slide v-for="gigImg in gig.productImgs" :key="gigImg">
      <div>
        <!-- get rid of carousel__item1 class -->
        <img class="details-carousel-image" :src="gigImg" alt="" />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "ExamplePagination",
  props: {
    gig: Object,
  },
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 1,
          snapAlign: "center",
        },
      },
    };
  },
};
</script>
