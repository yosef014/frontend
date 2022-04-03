<template>
  <section class="gig-reviews-carousel-section">
    <div class="gig-reviews-carousel">
      <header class="gig-reviews-carousel-header">
        <h2 class="gig-section-title">What people loved about this seller</h2>
      </header>
    </div>
    <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="gigReview in gig.reviewers" :key="gigReview">
          <div class="gig-reviews-carousel-wrapper">
            <div class="gig-reviews-profile-img-carousel">
            <span>{{gigReview.name.charAt(0)}}</span>
            </div>
              <div class="gig-reviews-wrapper">
                <div class="gig-reviews-header-carousel">
                    <span class="gig-review-span-name">{{gigReview.name}}</span>
                    <span><img :src="gigReview.flag" alt=""></span>
                    <span>{{gigReview.country}}</span>
                    <span><StarIcon /><small>(5)</small></span>
                </div>
                <div class="gig-description-carousel">
                  {{gigReview.review.slice(0,85)}}
                </div>
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
  import StarIcon from "../svgs/star-icon.vue";
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
      StarIcon,
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
    created () {
      this.longText()
    },
    computed: {
      computedText(){
        return this.longText()
      }
    },
    methods: {
      longText(){
        return this.gig.reviewers.forEach(function (arrayItem) {
        const length = 85;
        const text = arrayItem.review
        var review = arrayItem.review.length;
        // console.log(review);
        if(review > length) return  text.substring(0, length) + '...';
        else return text;
        });
      }
    }
  };
</script>
 
