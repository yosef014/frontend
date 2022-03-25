<template>
  <div>
    <div class="main-container">
      <loggedOutHomepage />
    </div>
    <div class="trusted-by-wrapper">
      <div class="max-width-container">
        <div class="trusted-by">
          <img class="paypal" />
          <img class="p-and-g" />
          <img class="netflix" />
          <img class="google" />
          <img class="facebook" />
        </div>
      </div>
    </div>

    <div class="popular-services-container max-width-container">
      <h2>Popular professional services</h2>
      <carouselPopularServices />
    </div>
    <div class="home-info-container">
      <infoHomepage />
    </div>
    <div class="home-explore-marketplace-container">
      <ExploreTheMarketplace />
    </div>
    <div class="home-fiver-business-container">fiverr business</div>
    <div class="home-get-inspired-container">get-inspired</div>
    <div class="footer-container">footer</div>
  </div>
</template>

<script>
  import loggedOutHomepage from "./logged-out-home-page.vue";
  import carouselPopularServices from "../components/carousel-popular-services.vue";
  import ExploreTheMarketplace from "../components/Explore-the-marketplace.vue";
  import infoHomepage from "../components/info-homepage.vue";
  export default {
    name: "home-page",
    // props: { open: Boolean },
    data() {
      return {
        open: false,
      };
    },
    components: {
      loggedOutHomepage,
      carouselPopularServices,
      ExploreTheMarketplace,
      infoHomepage,
    },
    methods: {
      o() {
        this.open = true;
      },
    },
    created() {},
  };
</script>
