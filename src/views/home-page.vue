<template>
  <div>
    <div class="main-container">
      <loggedOutHomepage />
    </div>
    <div class="trusted-by-container">trustef by pic</div>
    <div class="popular-services-container max-width-container">
      <h2>Popular professional services</h2>
      <carouselPopularServices />
    </div>
    <div class="home-info-container">info</div>
    <div class="home-explore-marketplace-container">explore-marketplace</div>
    <div class="home-fiver-business-container">fiverr business</div>
    <div class="home-get-inspired-container">get-inspired</div>
    <div class="footer-container">footer</div>
  </div>
</template>

<script>
  import loggedOutHomepage from "./logged-out-home-page.vue";
  import carouselPopularServices from "../components/carousel-popular-services.vue";
  export default {
    name: "home-page",
    components: {
      loggedOutHomepage,
      carouselPopularServices,
    },
  };
</script>
