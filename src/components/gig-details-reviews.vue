<template>
  <div v-if="gig" class="gig-details-reviews-container">
    <el-input
      v-if="openReview"
      type="textarea"
      v-model="reviewToAdd.review"
      placeholder="What was your goal in buying this Gig? How did the seller help you achieve it?"
    ></el-input>
    <!-- <button class="review-add-btn" @click="addReview()">Add Review</button> -->

    <ul class="gig-details-review-list">
      <li class="review-item" v-for="review in gig.reviewers" :key="review">
        <div class="gig-reviews-profile-img">
          <span>{{review.name.charAt(0)}}</span>
        </div>
        <div class="gig-reviews-wrapper">
          <div class="gig-reviews-header">
          <div class="gig-reviews-details">
          <span>{{review.name}}</span>
          <span><StarIcon />
          <small>5</small>
          </span>
          </div>
          <div class="gig-reviews-flag">
            <img :src="review.flag" alt="">
            <span>{{review.country}}</span>
          </div>
          </div>
          <div class="gig-reviews-description">
          {{review.review}}
          </div>
          <div class="gig-review-published">
            <p>{{review.reviewedAt}}</p>
          </div>
          <div class="gig-review-like-dislike">
          <span>
            <img src="@/assets/like.png" alt="">
            Helpful</span>
          <span>
            <img src="@/assets/dislike.png" alt="">
            Not Helpful</span>
        </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { gigService } from "../services/gig-service";
import StarIcon from "../svgs/star-icon.vue";
export default {
  name: "gig-details-review",
  components: {
    StarIcon,
  },
  data() {
    return {
      gig: null,
      openReview:false,
      reviewToAdd: {
        review: "",
      },
    };
  },
  async created() {
    await this.loadGig();
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  methods: {
    async loadGig() {
      const { id } = this.$route.params;
      this.gig = await gigService.getById(id);
    },
    async addReview() {
      const review = this.reviewToAdd;
      review.username = this.loggedInUser.username;
      review.fullname = this.loggedInUser.fullname;
      review.reviewAt = Date.now();
      review.imgUrl = this.loggedInUser.imgUrl;
      this.gig.reviewers.push(review);
      await this.$store.dispatch({ type: "updateGig", gig: this.gig });
    },
  },
};
</script>

<style></style>
