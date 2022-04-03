<template>
  <div class="page-content-container" v-if="!isLoading">
  <div
  v-loading.fullscreen.lock="isLoading"
  element-loading-text="Loading..."
  element-loading-background="rgba(255,255,255)">
    <section v-if="gig" class="gig-checkout-page gig-page">
      <div class="gig-order-summary">
        <div class="gig-order-preview">
          <section class="block-two">
            <div class="image-container">
              <img :src="gig.productImgs[0]" alt="" />
            </div>
            <div class="gig-order-details">
              <h1 class="details-title">Order Details</h1>
              <ul class="gig-features">
                <li
                  class="gig-feature"
                  v-for="feature in gigFeaturesList"
                  :key="feature"
                >
                  <CheckmarkIcon />
                  <p class="feature-desc">{{ feature }}</p>
                </li>
              </ul>
            </div>
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
            <h3>${{ gig.price }}</h3>
          </section>
        </div>
      </div>
      <div class="gig-checkout-summary">
        <h1 class="title">Price Summary</h1>
        <ul>
          <li>
            <p>Subtotal</p>
            <p>${{ gig.price }}</p>
          </li>
          <li>
            <p>Service Fee</p>
            <p>${{ serviceFee }}</p>
          </li>
          <li>
            <p>Final Price</p>
            <p>${{ finalPrice }}</p>
          </li>
        </ul>
        <button @click.prevent="purchase" v-if="loggedInUser">Purchase</button>
        <button v-else>Log In To Purchase!</button>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import { gigService } from "../services/gig-service";
import { orderService } from "../services/order-service";
import CheckmarkIcon from "../svgs/check-mark-icon.vue";
import StarIcon from "../svgs/star-icon.vue";
import { socketService } from "../services/socket.service";
export default {
  components: {
    CheckmarkIcon,
    StarIcon,
  },
  data() {
    return {
      gig: null,
      order: null,
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
    socketService.emit("chat topic", this.topic);
    socketService.on("chat addMsg", this.addMsg);
  },
  unmounted() {
    socketService.off("chat addMsg", this.addMsg);
    socketService.off("chat userTyping", this.isTyping);
    // socketService.terminate();
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    reviewsLength() {
      return this.gig.reviewers.length;
    },
    serviceFee() {
        return ((this.gig.price * 10) / 100).toFixed(2);
    },
    finalPrice() {
      const finalPrice = this.gig.price + (+this.serviceFee);
      return finalPrice.toFixed(2);
    },
    starsToRender() {
      return Math.floor(this.gig.rate + 1);
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
  methods: {
    sendMsg() {
      socketService.emit("chat newMsg", "test test from checkout-page");
    },
    async loadGig() {
      const { id } = this.$route.params;
      this.gig = await gigService.getById(id);
      this.order = await orderService.getEmptyOrder();
    },
    async purchase() {
      const order = JSON.parse(JSON.stringify(this.order));
      order.createdAt = Date.now();
      (order.imgUrl = this.gig.productImgs[0]),
        (order.description = this.gig.description);
      order.title = this.gig.title;
      order.buyer = {
        _id: this.loggedInUser._id,
        fullname: this.loggedInUser.fullname,
        imgUrl: this.loggedInUser.imgUrl,
        username: this.loggedInUser.username,
      };
      order.seller = {
        _id: this.gig.owner._id,
        fullname: this.gig.owner.fullname,
        username: this.gig.owner.username,
        imgUrl: this.gig.owner.imgUrl,
      };
      order.gig = {
        _id: this.gig._id,
        title: this.gig.title,
        category: this.gig.category,
        price: this.gig.price,
        productImgs: this.gig.productImgs,
      };
      await this.$store.dispatch({ type: "addOrder", order });
      this.$router.push("/user");
      socketService.emit("newOrderAded", this.gig.owner);
    },
  },
};
</script>

<style></style>
