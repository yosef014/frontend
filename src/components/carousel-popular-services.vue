<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in 10" :key="slide">
      <div>
        <!-- <div class="carousel__item"> -->
        <div class="subcategory-wrapper">
          <a href="" class="subcategory">
            <h4>
              <small>enter text here</small>
              enter text here
            </h4>
            <picture>
              <img :src="slides.url" alt="" />
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
</template>

<script>
  import { defineComponent } from "vue";
  import { Carousel, Navigation, Slide } from "vue3-carousel";

  import "vue3-carousel/dist/carousel.css";

  export default defineComponent({
    name: "Breakpoints",
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data: () => ({
      // carousel settings
      settings: {
        itemsToShow: 1,
        itemsToScroll: 5,
        // slideWidth: "100px",
        transition: 300,
        snapAlign: "center",
      },
      slides: {
        url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 1.5,
          snapAlign: "start",
        },
        800: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1060: {
          itemsToShow: 4,
          snapAlign: "start",
        },
        1240: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    }),
  });
</script>
