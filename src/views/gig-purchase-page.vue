<template>
  <div class="page-content-container">
    <section v-if="gig" class="gig-checkout-page gig-page">
      <div class="gig-order-summary">
        <div class="gig-order-preview">
          <section class="block-two">
            <img :src="gig.productImgs[0]" alt="" />
          </section>
          <section class="block-one">
            <h1>{{ gig.title }}</h1>
            <p>{{ reviewsLength }} reviews</p>
            <div>
              <p>{{ gig.fullname }}</p>
              <div class="gig-rate">
                <p>{{ gig.rate }}</p>
                <ul>
                  <li v-for="starToRender in starsToRender" :key="starToRender">
                    <Star />
                  </li>
                </ul>
              </div>
            </div>
            <h3>{{ gig.price }}</h3>
          </section>
        </div>
        <div class="gig-order-details">
          <h1 class="details-title">Order Details</h1>
          <ul class="gig-features">
            <li
              class="gig-feature"
              v-for="feature in gigFeaturesList"
              :key="feature"
            >
              <Checkmark />
              <p class="feature-desc">{{ feature }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="gig-checkout-summary">
        <h1 class="title">Price Summary</h1>
        <li>
          <p>Subtotal</p>
          <p>{{ gig.price }}</p>
        </li>
        <li>
          <p>Service Fee</p>
          <p>{{ serviceFee }}</p>
        </li>
        <li>
          <p>Final Price</p>
          <p>{{ finalPrice }}</p>
        </li>
        <button @click.prevent="purchase" v-if="loggedInUser">Purchase</button>
        <button v-else>Log In To Purchase!</button>
      </div>
    </section>
  </div>
</template>

<script>
  import { gigService } from "../services/gig-service";
  import { orderService } from "../services/order-service";
  import Checkmark from "../svgs/check-mark.vue";
  import Star from "../svgs/star.vue";
  export default {
    components: {
      Checkmark,
      Star,
    },
    data() {
      return {
        gig: null,
        order: null,
        serviceFee: 5.92,
        gigFeaturesList: [
          "Commercial Use",
          "Color",
          "Source File",
          "High Resoultion",
          "Background/Scene",
        ],
      };
    },
    async created() {
      this.loadGig();
    },
    computed: {
      loggedInUser() {
        return this.$store.getters.loggedinUser;
      },
      reviewsLength() {
        return this.gig.reviewers.length;
      },
      finalPrice() {
        const finalPrice = this.gig.price - this.serviceFee;
        return finalPrice;
      },

      starsToRender() {
        return Math.floor(this.gig.rate + 1);
      },
    },
    methods: {
      async loadGig() {
        const { id } = this.$route.params;
        this.gig = await gigService.getById(id);
        this.order = await orderService.getEmptyOrder();
      },
      async purchase() {
        console.log("purchase button");
        const order = JSON.parse(JSON.stringify(this.order));
        order.title = this.gig.title;
        order.price = this.finalPrice;
        order.description = this.gig.description;
        order.buyer = {
          _id: this.loggedInUser,
          fullname: this.loggedInUser,
        };
        order.seller = {
          _id: this.gig.owner._id,
          fullname: this.gig.owner.fullname,
          imgUrl: this.gig.owner.imgUrl,
        };
        order.gig = {
          _id: this.gig._id,
          title: this.gig.title,
        };
        console.log(order);
        await this.$store.dispatch({ type: "addOrder", order });
      },
    },
  };
</script>

<style>
  .gig-purchase-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #ddd;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
  }
  .gig-order-preview {
    width: 66%;
  }
</style>
