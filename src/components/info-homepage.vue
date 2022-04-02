<template>
  <div class="home-page-info-container full">
    <div class="main-info main-layout max-width-container">
      <div class="content">
        <div class="home-page-info">
          <h2>A whole world of freelance talent at your fingertips</h2>
          <ul>
            <li>
              <h6><CircleCheckmarkIcon /> The best for every budget</h6>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </li>

            <li>
              <h6><CircleCheckmarkIcon /> Quality work done quickly</h6>
              <p>
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </li>

            <li>
              <h6><CircleCheckmarkIcon /> Protected payments, every time</h6>
              <p>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </li>
            <li>
              <h6><CircleCheckmarkIcon /> 24/7 support</h6>
              <p>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </li>
          </ul>
        </div>
        <div class="home-page-img">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import circleCheckmarkIcon from "../svgs/circle-checkmark-icon.vue";
import CircleCheckmarkIcon from "../svgs/circle-checkmark-icon.vue";
export default {
  components: {
    circleCheckmarkIcon,
    CircleCheckmarkIcon,
  },
};
</script>

<style></style>
