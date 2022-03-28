<template>
  <div class="click-list">
    <div class="gig-categorys-boxes">
      <Carousel
        :breakpoints="breakpoints"
        :settings="settings"
        :itemsToShow="5"
      >
        <Slide v-for="slide in slides" :key="slide" class="gig-categorys-box">
          <img :src="slide.url" alt="" @click="pushToPage(slide.route)" />
          <span>{{ slide.name }}</span>
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
      settings: {
        itemsToShow: 1,
        itemsToScroll: 4,
        transition: 600,
        snapAlign: "center",
        wrapAround: true,
      },
      breakpoints: {
        400: {
          itemsToShow: 1.5,
          itemsToScroll: 2,
          snapAlign: "start",
        },
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
      slides: [
        {
          url: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2360.svg",
          name: "All",
          route: "",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg",
          name: "Logo",
          route: "logo",
        },
        {
          url: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2253.svg",
          name: "Arts And Crafts",
          route: "arts and crafts",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg",
          name: "Data Entry",
          route: "data entry",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg",
          name: "Marketing",
          route: "marketing",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/apps/view_all.02245c1.svg",
          name: "Research Snd Summeries",
          route: "research and summeries",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg",
          name: "Voice Over",
          route: "voice over",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg",
          name: "Business",
          route: "business",
        },
      ],
    };
  },
  methods: {
    pushToPage(page) {
      if (page == this.slides[0].name) {
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
