<template>
  <Carousel
    class="popular-service-carousel"
    :settings="settings"
    :breakpoints="breakpoints"
  >
    <Slide v-for="slide in slides" :key="slide">
      <div>
        <!-- <div class="carousel__item"> -->

        <div class="subcategory-wrapper">
          <router-link :to="slide.to">
            <a class="subcategory">
              <h4>
                <small>{{ slide.small }}</small>
                {{ slide.h4 }}
              </h4>
              <picture>
                <img :src="slide.url" alt="" />
              </picture>
            </a>
          </router-link>
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
// import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  data() {
    return {
      settings: {
        // itemsToShow: 2,
        itemsToScroll: 3,
        transition: 600,
        snapAlign: "start",
        wrapAround: true,
      },
      breakpoints: {
        // 700px and up
        200: {
          itemToShow: 2,
          // itemsToScroll: 1,
        },
        600: {
          itemToShow: 2,
          // itemsToScroll: 1,
        },

        760: {
          itemsToShow: 3,
        },

        // 1024 and up
        1060: {
          itemsToShow: 4,
        },
        1300: {
          itemsToShow: 5,
        },
      },

      slides: [
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png",
          h4: "SEO",
          small: "Unlock growth online",
          to: "/tag/logo",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png",
          h4: "Illustration",
          small: "Color your dreams",
          to: "/tag/arts and crafts",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png",
          h4: "Data Entry",
          small: "Learn your business",
          to: "/tag/data entry",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
          h4: "Logo Design",
          small: "Build your brand",
          to: "/tag/logo",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
          h4: "WordPress",
          small: "Customize your site",
          to: "/tag/WordPress",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
          h4: "Voice Over",
          small: "Share your message",
          to: "/tag/Voice Over",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
          h4: "Video Explainer",
          small: "Engage your audience",
          to: "/tag/Video Explainer",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png",
          h4: "Book Covers",
          small: "Showcase your story",
          to: "/tag/Book Covers",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
          h4: "Social Media",
          small: "Reach more customers",
          to: "/tag/Social Media",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png",
          h4: "Translation",
          small: "Go global",
          to: "/tag/Translation",
        },
      ],

      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
    };
  },
  computed: {},
  methods: {
  },
};
</script>
