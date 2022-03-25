<template>
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

        <div class="gig-contact-seller">
          <button class="gig-contact-seller-btn">Contact Seller</button>
        </div>
      </section>
      <div class="gig-main">
        <div class="gig-overview">
          <nav class="gig-categories-breadcrumbs">
            <ul>
              <li>
                <span class="gig-category-breadcrumbs">
                  <a href="" class="gig-category-link">category</a>
                </span>
                <span class="gig-breadcrumb-icon"> </span>
              </li>
              <li>
                <span class="gig-category-breadcrumbs">
                  <a href="" class="gig-category-link">subCategory</a>
                </span>
              </li>
            </ul>
          </nav>
          <h1 class="gig-text-display">
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
        <section class="gig-gallery-component">
          <gig-details-gallery-carousel :gig="gig" />
        </section>
        <section class="gig-reviews-carousel-component">
          <gig-details-reviews-carousel :gig="gig" />
        </section>

        <div class="gig-description">
          <header><h2 class="gig-section-title">About This Gig</h2></header>
          <div class="gig-description-content">
            <p>
              {{ gig.description }}
            </p>
          </div>
        </div>
        <div class="gig-about-seller">
          <h2>About The Seller</h2>
          <div class="gig-about-seller-header">
            <div class="gig-seller-profile-pic">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/851682dc8f4fb93905e5db125ce56655-1552635815584/83c9dc85-a0fd-4bcc-a0e5-b6a3e886ca77.jpg"
                alt=""
              />
            </div>
            <div class="gig-seller-label">
              <p>{{ gig.fullname }}</p>
              <p>
                My Specialty :
                <span v-for="category in gig.category" :key="category">
                  {{ category }}
                </span>
              </p>
              <p>
                Reviews:
                <span> ({{ reviewsLength }}) </span>
              </p>
            </div>
          </div>
          <div class="gig-seller-description-header">
            <ul>
              <li>
                From
                <p>
                  {{ gig.loc }}
                </p>
              </li>
              <li>
                Member since
                <p>
                  {{ gig.memberSince }}
                </p>
              </li>
              <li>
                Avg. response time
                <p>
                  {{ gig.avgResponceTime }}
                </p>
              </li>
              <li>
                Last delivery
                <p>
                  {{ gig.lastDelivery }}
                </p>
              </li>
            </ul>
            <div class="gig-seller-description">
              {{ gig.about }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { gigService } from "../services/gig-service";
  import gigDetailsGalleryCarousel from "../components/gig-details-gallery-carousel.vue";
  import gigDetailsReviewsCarousel from "../components/gig-details-reviews-carousel.vue";
  export default {
    components: {
      gigDetailsGalleryCarousel,
      gigDetailsReviewsCarousel,
    },
    data() {
      return {
        gig: null,
        limitPosition: 120,
        scrolled: false,
        lastPosition: 0,
      };
    },
    computed: {
      reviewsLength() {
        return this.gig.reviewers.length;
      },
    },
    async created() {
      const { id } = this.$route.params;
      this.gig = await gigService.getById(id);
      window.addEventListener("scroll", this.handleScroll);
      console.log(this.handleScroll);
    },
    unmounted() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        if (
          this.lastPosition < window.scrollY &&
          this.limitPosition < window.scrollY
        ) {
          this.scrolled = true;
          // move up!
        }
        if (this.lastPosition > window.scrollY) {
          this.scrolled = false;
          // move down
        }
        this.lastPosition = window.scrollY;
        // this.scrolled = window.scrollY > 250;
      },
    },
  };
</script>

<style></style>
