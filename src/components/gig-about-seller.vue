<template>
  <div v-if="gig" class="gig-about-seller">
    <h2>About The Seller</h2>
    <div class="gig-about-seller-header">
      <div class="gig-seller-profile-pic">
        <img :src="gig.imgUrl" alt="" />
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
