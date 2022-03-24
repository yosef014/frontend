<template>
  <div class="gig-page">
    <section class="gig-sidebar">
      <div class="gig-purchase-tab">
        <form class="gig-content">
          <h3>
            <b class="gig-title">Silver</b>
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
          <footer class="gig-footer">
            <button class="gig-purchase-btn">
              Continue <span>(enter price here)</span>
            </button>
          </footer>
        </form>
      </div>

      <div class="gig-contact-seller">
        <button class="gig-contact-seller-btn">Contact Seller</button>
      </div>
    </section>
    <login></login>
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
          I will design modern logo with brand identity in 24 hrs
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
        <Carousel :settings="settingsGallerySlideshow">
          <Slide v-for="img in gigCarouselImgs" :key="img">
            <div class="gig-details-carousel">
              <img :src="img.img" alt="" />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </section>
      <div class="gig-reviews-snippet-carousel">
        <header>
          <h2 class="gig-section-title">What people loved about this seller</h2>
          <button class="gig-see-all-reviews-btn">
            See all reviews //href to reviews
          </button>
        </header>
        <span class="gig-reviews-carousel-wrapper">
          <Carousel :settings="settingsReviewSlideshow">
            <Slide v-for="review in gigReviews" :key="review">
              <div class="gig-details-carousel">
                <p>{{ review.name }}</p>
                {{ review.review }}
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </span>
      </div>
      <div class="gig-description">
        <header><h2 class="gig-section-title">About This Gig</h2></header>
        <div class="gig-description-content"></div>
        <!-- <button class="collapse-button">+ See More</button> -->
      </div>
    </div>
  </div>
  <pre>
TEST TEST TEST TESTTEST TEST TEST TESTTEST TEST TEST TESTTEST TEST TEST TEST </pre
  >
</template>

<script>
  import { gigService } from "../services/gig-service";
  import { Carousel, Navigation, Slide } from "vue3-carousel";
  import login from "../components/login.vue";
  export default {
    components: {
      Carousel,
      Slide,
      Navigation,
      login,
    },
    data() {
      return {
        settingsGallerySlideshow: {
          itemsToShow: 1,
          transition: 600,
          snapAlign: "center",
          wrapAround: true,
        },
        settingsReviewSlideshow: {
          itemsToShow: 1,
          transition: 600,
          snapAlign: "center",
          wrapAround: true,
        },
        gig: null,
        gigCarouselImgs: [
          {
            img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231682055/original/77cc585046a1ceb81a809218fef35ee8252bbb3b.jpg",
          },
          {
            img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231682055/original/77cc585046a1ceb81a809218fef35ee8252bbb3b.jpg",
          },
          {
            img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231682055/original/77cc585046a1ceb81a809218fef35ee8252bbb3b.jpg",
          },
        ],
        gigReviews: [
          {
            review:
              "Use your revisions and communication, and you will have something that works for you! I recommend modernmarvel for the price they ask! I did not know what to expect from my first buy on FIverr. The previews where what I was going for, so I thought why not give it a try. The initial delivery had two good concepts and three concepts I did not like. The two good concepts however, where not really what I wanted though. I submitted a revision proposal and hoped for the best. This is where this seller shines! From the initial designs, he worked quickly with every suggestion I made for revisions and was good in communication. I slowly saw my project evolving to something I love. Recommended!",
            name: "bartstrijbos",
          },
          {
            review:
              "Use your revisions and communication, and you will have something that works for you! I recommend modernmarvel for the price they ask! I did not know what to expect from my first buy on FIverr. The previews where what I was going for, so I thought why not give it a try. The initial delivery had two good concepts and three concepts I did not like. The two good concepts however, where not really what I wanted though. I submitted a revision proposal and hoped for the best. This is where this seller shines! From the initial designs, he worked quickly with every suggestion I made for revisions and was good in communication. I slowly saw my project evolving to something I love. Recommended!",
            name: "bartstrijbos",
          },
          {
            review:
              "Use your revisions and communication, and you will have something that works for you! I recommend modernmarvel for the price they ask! I did not know what to expect from my first buy on FIverr. The previews where what I was going for, so I thought why not give it a try. The initial delivery had two good concepts and three concepts I did not like. The two good concepts however, where not really what I wanted though. I submitted a revision proposal and hoped for the best. This is where this seller shines! From the initial designs, he worked quickly with every suggestion I made for revisions and was good in communication. I slowly saw my project evolving to something I love. Recommended!",
            name: "bartstrijbos",
          },
        ],
      };
    },
    async created() {
      const { id } = this.$route.params;
      this.gig = await gigService.getById(id);

      console.log(this.gig);
    },
  };
</script>

<style></style>
