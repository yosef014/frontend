<template>
  <div v-if="gig" class="gig-about-seller">
    <h2>About The Seller</h2>
    <div class="gig-about-seller-header">
      <div class="gig-seller-profile-pic">
        <img :src="gig.owner.imgUrl" alt="" />
      </div>
      <div class="gig-seller-label">
        <h4>{{ gig.owner.fullname }}</h4>
        <p>
          My Specialty :
          <span v-for="category in gig.category" :key="category">
            {{ category }}
          </span>
        </p>
        <p>
          Reviews:
          <span> ({{ gig.reviewers.length }}) </span>
        </p>
      </div>
    </div>
    <div class="gig-seller-description-header">
      <ul>
        <li>
          <p>From</p>
          <p>
            {{ gig.loc }}
          </p>
        </li>
        <li>
          <p>Member since</p>
          <p>
            {{ gig.memberSince }}
          </p>
        </li>
        <li>
          <p>Avg. response time</p>
          <p>
            {{ gig.avgResponceTime }}
          </p>
        </li>
        <li>
          <p>Last delivery</p>
          <p>
            {{ gig.lastDelivery }}
          </p>
        </li>
      </ul>
      <div class="gig-seller-description">
        <p>{{ gig.about }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { gigService } from "../services/gig-service";
export default {
  name: "gig-about-seller",
  // not working dont know why..
  // props: {
  //   gig: Object,
  // },
  data() {
    return {
      gig: null,
    };
  },
  created() {
    this.loadGig();
  },
  computed: {},
  methods: {
    async loadGig() {
      const { id } = this.$route.params;
      this.gig = await gigService.getById(id);
    },
  },
  computed: {},
};
</script>

<style></style>
