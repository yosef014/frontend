<template>
  <div class="click-list">
    <div class="gig-categorys-boxes">
      <Carousel :itemsToShow="5">
        <Slide v-for="slide in slides" :key="slide" class="gig-categorys-box">
          <img :src="slide.url" alt="" @click="pushToPage(slide.route)" />
          <span>{{ slide.h4 }}</span>
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
          url: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2360.svg",
          h4: "All",
          route: "all",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg",
          h4: "Logo",
          route: "logo",
        },
        {
          url: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2253.svg",
          h4: "Arts And Crafts",
          route: "arts and crafts",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg",
          h4: "Data Entry",
          route: "data entry",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg",
          h4: "Marketing",
          route: "marketing",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/apps/view_all.02245c1.svg",
          h4: "Research Snd Summeries",
          route: "research and summeries",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg",
          h4: "Voice Over",
          route: "voice over",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg",
          h4: "Business",
          route: "business",
        },
      ],
    };
  },
  methods: {
    pushToPage(page) {
      if (page == this.slides[0].h4) {
        this.$router.push("/tag");
        return;
      }
      this.$router.push("/tag" + "/" + page + "");
    },
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  async created() {},
  computed: {
    gigs() {},
  },
};
</script>
