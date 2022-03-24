<template>
  <section class="gig-reviews-carousel-section">
    <div class="gig-reviews-carousel">
      <header class="gig-reviews-carousel-header">
        <h2 class="gig-section-title">What people loved about this seller</h2>
        <button class="gig-see-all-reviews-btn">
          See all reviews //href to reviews
        </button>
      </header>
    </div>
    <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="gigReview in gig.reviewers" :key="gigReview">
        <div class="gig-carousel__item">
          <div class="gig-review-user-profile-img">
            <img src="" alt="" />
          </div>
          <div class="gig-carousel-details">
            <div class="gig-review-header">
              <h6 class="gig-review-name">{{ gigReview.name }}</h6>
              <div class="gig-review-country-flag">
                <img :src="gigReview.flag" alt="" />
                <div class="gig-review-country-name">
                  {{ gigReview.country }}
                </div>
              </div>
            </div>
            <p class="gig-review-description">
              {{ gigReview.review }}
            </p>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<script>
  import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";
  export default {
    name: "ExamplePagination",
    props: {
      gig: Object,
    },
    components: {
      Pagination,
      Carousel,
      Slide,
      Navigation,
    },
    data() {
      return {
        // carousel settings
        settings: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
          // 700px and up
          700: {
            itemsToShow: 3.5,
            snapAlign: "center",
          },
          // 1024 and up
          1024: {
            itemsToShow: 1,
            snapAlign: "center",
          },
        },
      };
    },
  };
</script>
