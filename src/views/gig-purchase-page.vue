<template>
<div class="page-content-container">
  <section v-if="gig" class="gig-checkout-page gig-page">
    <div class="gig-order-preview">
      <img :src="gig.productImgs[0]" alt="" />
      <p>{{ gig.title }}on</p>
      {{ gig.rate }}
      {{ gig.review }}
    </div>
    <div class="gig-checkout-tab">
      <form class="gig-purchase-content">
        <button @click="purchase" v-if="loggedInUser">PURCHASE</button>
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
      };
    },
    async created() {
      const { id } = this.$route.params;
      this.gig = await gigService.getById(id);
      this.order = await orderService.getEmptyOrder();
    },
    computed: {
      loggedInUser() {
        return this.$store.getters.loggedinUser;
      },
    },
    methods: {
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
        await this.$store.dispatch({ type: "addOrder", order });
      },
    },
  };
</script>

<style></style>
