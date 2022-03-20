<template>
  <div>
    <div class="main-container">
      <!-- <logged-out-home-page></logged-out-home-page> -->
      <loggedOutHomepage/>
    </div>
    <div class="trusted-by-container"> trustef by pic</div>
    <div class="popular-services-container">crusela popular services</div>
    <div class="home-info-container">info</div>
    <div class="home-explore-marketplace-container">explore-marketplace</div>
    <div class="home-fiver-business-container">fiverr business</div>
    <div class="home-get-inspired-container">get-inspired</div>
    <div class="footer-container">footer</div>
  </div>
</template>

<script>
import loggedOutHomepage from './logged-out-home-page.vue'
  export default {
    name: 'home-page',
    components: {
      loggedOutHomepage,
    },
  }
</script>
