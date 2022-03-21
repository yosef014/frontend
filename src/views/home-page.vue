<template>
  <div>
    <div class="main-container">
      <!-- <logged-out-home-page></logged-out-home-page> -->
      <loggedOutHomepage />
    </div>
    <div class="trusted-by-container">trustef by pic</div>
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
    components: {
      loggedOutHomepage,
      carouselPopularServices,
      ExploreTheMarketplace,
      infoHomepage,
    },
  };
</script>
