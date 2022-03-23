<template>
    <div class="click-list">
      <div class="gig-categorys-boxes">
        <Carousel :itemsToShow="5">
          <Slide v-for="slide in slides" :key="slide" class="gig-categorys-box">
            <img :src="slide.url" alt="" />
            <span>logo</span>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>

</template>

<script>

import { Carousel, Navigation, Slide } from "vue3-carousel";


export default {
  data() {
    return {
      slides: [
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png",
          h4: "SEO",
          small: "Unlock growth online",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png",
          h4: "Illustration",
          small: "Color your dreams",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png",
          h4: "Data Entry",
          small: "Learn your business",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
          h4: "Logo Design",
          small: "Build your brand",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
          h4: "WordPress",
          small: "Customize your site",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
          h4: "Voice Over",
          small: "Share your message",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
          h4: "Video Explainer",
          small: "Engage your audience",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png",
          h4: "Book Covers",
          small: "Showcase your story",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
          h4: "Social Media",
          small: "Reach more customers",
        },
        {
          url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png",
          h4: "Translation",
          small: "Go global",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  async created() {
  },
  computed: {
    gigs() {
    },
   
  },
};
</script>
