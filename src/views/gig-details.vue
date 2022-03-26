<template>
  <nav :style="setSticky" class="gig-details-navbar-container">
    <div class="gig-details-navbar max-width-container">
      <li :class="{'gig-nav-link-active' : link.active === true}" v-for="(link,idx) in gigDetailsNavLinks" :key="link.name">
        <a @click="scrollTo(link.section, idx)">{{ link.name }}</a>
      </li>
    </div>
  </nav>
  <div class="page-content-container">
    <div v-if="gig" class="gig-page">
      <section class="gig-sidebar">
        <div class="gig-purchase-tab">
          <form class="gig-purchase-content">
            <h3>
              <b class="gig-title">Silver</b>
              <span class="gig-price">{{ gig.price }}</span>
            </h3>
            <p>3 Unique Concepts + Color Palette + Source files + JPG, PNG</p>
            <span class="gig-delivery-icon"> </span>
            <span class="gig-revisions-icon"> </span>
            <b class="gig-revisions">Unlimited Revisions</b>
            <ul class="gig-features">
              <li class="gig-feature">
                <span class="gig-feature-check-icon"> </span>
                Includes Logo Design
              </li>
              <li class="gig-feature"></li>
              <li class="gig-feature"></li>
              <li class="gig-feature"></li>
            </ul>
            <router-link :to="'/checkout/' + gig._id">
              <footer class="gig-footer">
                <button class="gig-purchase-btn">
                  Continue <span>({{ gig.price }})</span>
                </button>
              </footer>
            </router-link>
          </form>
        </div>
        <div class="contact-seller-wrapper">
          <div class="gig-contact-seller">
            <span class="gig-contact-seller-btn">Contact Seller</span>
            <arrowDown class="arrow-down" />
          </div>
        </div>
      </section>
      <div class="gig-main">
        <div class="gig-overview">
          <div class="gig-details-header">
            <nav class="gig-categories-breadcrumbs">
              <ul>
                <li>
                  <a href="" class="gig-category-link">category</a>
                  <arrowRight />
                </li>
                <li>
                  <a href="" class="gig-category-link">sub category</a>
                  <arrowRight />
                </li>
              </ul>
            </nav>
            <h1 id="overview" class="gig-text-display">
              {{ gig.title }}
            </h1>
            <div class="gig-seller-overview">
              <div class="gig-seller-pic">
                <!-- //import picture from database/json to here -->
                <img
                  class="B9j8CWn"
                  src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/851682dc8f4fb93905e5db125ce56655-1552635815584/83c9dc85-a0fd-4bcc-a0e5-b6a3e886ca77.jpg"
                  alt="raziul99"
                  loading="lazy"
                />
              </div>
              <div class="gig-seller-details">
                <div class="gig-seller-name">{{ gig.fullname }}</div>
                <span class="gig-seller-level"
                  ><div class="gig-seller-level-div">Level 2 Seller</div></span
                >
                <div class="gig-seller-rating">
                  <div class="gig-seller-stars">
                    <span class="gig-seller-star"></span
                    ><span class="gig-seller-star"></span
                    ><span class="gig-seller-star"></span
                    ><span class="gig-seller-star"></span
                    ><span class="gig-seller-star"></span>
                  </div>
                  <b class="gig-seller-rating-score">4.9</b
                  ><span class="gig-seller-ratings-count">(194)</span>
                </div>
                <div class="gig-seller-order-queue">10 Orders in Queue</div>
              </div>
            </div>
          </div>
        </div>
        <section class="gig-gallery-component">
          <gig-details-gallery-carousel :gig="gig" />
        </section>
        <section id="reviews" class="gig-reviews-carousel-component">
          <gig-details-reviews-carousel :gig="gig" />
        </section>

        <div id="gig-description" class="gig-description">
          <header>
            <h2  class="gig-section-title">
              About This Gig
            </h2>
          </header>
          <div class="gig-description-content">
            <p>
              {{ gig.description }}
            </p>
          </div>
        </div>
        <div id="seller-description" class="gig-about-seller-wrapper">
          <gig-about-seller :gig="gig" />
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
import arrowRight from "../svgs/arrow-right.vue";
import arrowDown from "../svgs/arrow-down.vue";
export default {
  components: {
    gigDetailsGalleryCarousel,
    gigDetailsReviewsCarousel,
    gigAboutSeller,
    arrowRight,
    arrowDown,
  },
  data() {
    return {
      gig: null,
      limitPosition: 120,
      isSticky: false,
      lastPosition: 0,
      currSection: null,
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
  created() {
    this.loadGig();
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    this.loadGig();
  },
  computed: {
    async reviewsLength() {
      return await this.gig.reviewers.length;
    },
    loggedInUser() {
      return this.$store.getters.loggedinUser && "please login";
    },

    setSticky() {
      return this.isSticky
        ? { position: "fixed", top: "0" }
        : { position: "absolute", top: 120 + "px" };
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
    scrollTo(pos,idx) {
      this.gigDetailsNavLinks.forEach((link) => link.active = false)
      this.gigDetailsNavLinks[idx].active = true
      document.getElementById(pos).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style></style>
