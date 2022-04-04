<template>
  <nav
    :style="setSticky"
    class="gig-details-navbar-container"
    v-if="!isLoading"
  >
    <ul class="gig-details-navbar max-width-container">
      <li
        :class="{ 'gig-nav-link-active': link.active === true }"
        v-for="(link, idx) in gigDetailsNavLinks"
        :key="link.name"
      >
        <a @click="scrollTo(link.section, idx)">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
  <div
    v-loading.fullscreen.lock="isLoading"
    element-loading-text="Loading..."
    element-loading-background="rgba(255,255,255)"
  >
    <div class="page-content-container" v-if="!isLoading">
      <div v-if="gig" class="gig-details-container max-width-container">
        <div class="gig-details-main-content">
          <section class="gig-overview">
            <div class="gig-overview-block-one">
              <ul class="gig-categories-breadcrumbs">
                <li>
                  <span @click="this.$router.push('/')"> FIIVERR</span>
                  <ArrowRightIcon />
                </li>
                <li>
                  <span @click="this.$router.push('/tag')">SERVICES</span>
                  <ArrowRightIcon />
                </li>
                <li>
                  <a href="" class="gig-category-link">{{ gigCategory }}</a>
                </li>
              </ul>
              <h3 id="overview" class="gig-overview-title">
                {{ gig.title }}
              </h3>
              <div class="gig-seller-info-container">
                <div class="gig-seller-pic">
                  <!-- //import picture from database/json to here -->
                  <img
                    class="B9j8CWn"
                    :src="gig.owner.imgUrl"
                    alt="raziul99"
                    loading="lazy"
                  />
                </div>
                <div class="gig-seller-info">
                  <div>
                    <h4 class="gig-seller-name">{{ gig.owner.fullname }}</h4>

                    <p class="gig-seller-level-div">{{ gig.level }}</p>
                  </div>

                  <ul class="gig-seller-stars">
                    <!-- <li v-for="star in starsToRender" :key="star">
                  <StarIcon />
                </li> -->
                    <li><StarIcon /></li>
                  </ul>
                  <!-- Add dynamic rate -->
                  <p class="gig-seller-rating-score">{{ gig.owner.rate }}</p>
                  <p class="gig-seller-ratings-count">
                    ({{ gig.reviewers.length }})
                  </p>
                  <p>10 Orders in Queue</p>
                </div>
              </div>

              <div class="gig-gallery-component">
                <gig-details-gallery-carousel :gig="gig" />
              </div>
            </div>
          </section>
          <section class="gig-sidebar-right">
            <div class="gig-checkout-card">
              <div class="card-content-container">
                <div class="checkout-card-header">
                  <h4 class="gig-title">Silver</h4>
                  <h4 class="gig-price">${{ gig.price }}</h4>
                </div>
                <div class="checkout-card-content">
                  <p>
                    3 Unique Concepts + Color Palette + Source files + JPG, PNG
                  </p>
                  <b class="gig-revisions">Unlimited Revisions</b>
                  <ul class="gig-features-container">
                    <li v-for="feature in features" :key="feature">
                      <Checkmark />
                      <p>{{ feature }}</p>
                    </li>
                  </ul>
                </div>
                <div class="checkout-card-footer">
                  <router-link :to="'/checkout/' + gig._id">
                    <button class="checkout-btn">
                      <p>Continue</p>
                      <p>(${{ gig.price }})</p>
                    </button>
                  </router-link>
                </div>
              </div>
              <div class="gig-contact-seller-wrapper">
                <button class="gig-contact-seller-btn">
                  <p>Contact Seller</p>
                  <ArrowDownIcon class="arrow-down" />
                </button>
              </div>
            </div>
          </section>

          <section id="gig-description" class="gig-description-section">
            <div class="gig-description-container">
              <h3 class="gig-section-title">About This Gig</h3>

              <div class="gig-description">
                <p>
                  {{ gig.description }}
                </p>
              </div>
            </div>
          </section>
          <section id="seller-description" class="seller-description-section">
            <gig-about-seller :gig="gig" />
          </section>
          <section class="gig-reviews-section">
            <div id="reviews" class="gig-reviews-carousel-component">
              <gig-details-reviews-carousel :gig="gig" />
            </div>
            <gig-details-reviews :gig="gig" />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gigService } from "../services/gig-service";
import gigDetailsGalleryCarousel from "../components/gig-details-gallery-carousel.vue";
import gigDetailsReviewsCarousel from "../components/gig-details-reviews-carousel.vue";
import gigAboutSeller from "../components/gig-about-seller.vue";
import ArrowRightIcon from "../svgs/arrow-right-icon.vue";
import ArrowDownIcon from "../svgs/arrow-down-icon.vue";
import gigDetailsReviews from "../components/gig-details-reviews.vue";
import Checkmark from "../svgs/check-mark-icon.vue";
import StarIcon from "../svgs/star-icon.vue";
export default {
  components: {
    gigDetailsGalleryCarousel,
    gigDetailsReviewsCarousel,
    gigAboutSeller,
    ArrowRightIcon,
    ArrowDownIcon,
    gigDetailsReviews,
    Checkmark,
    StarIcon,
  },
  data() {
    return {
      gig: null,
      isSticky: false,
      currSection: null,
      features: [
        "Includes Logo Design",
        "Logo Vector File",
        "Printable File",
        "Social Media Kit",
        "Source File",
      ],
      gigDetailsNavLinks: [
        {
          name: "Overview",
          section: "overview",
          active: false,
        },
        {
          name: "Description",
          section: "gig-description",
          active: false,
        },
        {
          name: "About The Seller",
          section: "seller-description",
          active: false,
        },
        {
          name: "Reviews",
          section: "reviews",
          active: false,
        },
      ],
    };
  },
  async created() {
    await this.loadGig();
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    this.loadGig();
  },
  computed: {
    gigCategory() {
      return this.gig.category.toString().toUpperCase();
    },
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    setSticky() {
      return this.isSticky
        ? { position: "fixed", top: "0" }
        : { position: "absolute", top: 120 + "px" };
    },

    starsToRender() {
      return this.gig;
    },
  },
  methods: {
    async loadGig() {
      const { id } = this.$route.params;
      this.gig = await gigService.getById(id);
    },
    handleScroll() {
      if (window.scrollY > 120) this.isSticky = true;
      else this.isSticky = false;
    },
    scrollTo(pos, idx) {
      this.gigDetailsNavLinks.forEach((link) => (link.active = false));
      this.gigDetailsNavLinks[idx].active = true;
      document.getElementById(pos).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style></style>
