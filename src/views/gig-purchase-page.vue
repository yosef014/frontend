<template>
  <div class="page-content-container">
    <section v-if="gig" class="gig-checkout-page gig-page">
      <div class="gig-order-preview">
        <p>seller : {{ gig.fullname }}</p>
        <img :src="gig.productImgs[0]" alt="" />
        <p>gig title: {{ gig.title }}</p>
        <p>gig rate:{{ gig.rate }}</p>
        <p>gig reviews:{{ reviewsLength }}</p>
        <p>price: ({{ gig.price }})</p>
      </div>
      <div class="gig-checkout-tab">
        <form class="gig-purchase-content">
          <p>price: ({{ gig.price }})</p>
          <p>-serivce fee {{ serviceFee }}</p>
          <p>final price {{ finalPrice }}</p>
          <button @click.prevent="purchase" v-if="loggedInUser">
            Purchase
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
  import { gigService } from "../services/gig-service";
  import { orderService } from "../services/order-service";
  export default {
    data() {
      return {
        gig: null,
        order: null,
        serviceFee: 5.92,
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
        order.createdAt = Date.now();
        order.buyer = {
          _id: this.loggedInUser,
          fullname: this.loggedInUser,
        };
        order.seller = {
          _id: "the ID of the SELLER",
          fullname: this.gig.fullname,
        };
        order.gig = {
          _id: this.gig._id,
          title: this.gig.title,
        };
        console.log(order);
        debugger;
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
