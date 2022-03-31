<template>
  <section>
    <charts :ordersToShow="ordersToShow"></charts>
    <div class="table">
      <div class="table-header">
        <span v-for="category in tabelCategory" :key="category">
          {{ category }}
        </span>
      </div>
      <ordersPreview @changeStatus="changeStatus" :ordersToShow="ordersToShow"></ordersPreview>
    </div>
  </section>
</template>
<script>
import charts from "../components/charts.vue";
import ordersPreview from "../components/seller-order-preview.vue";
export default {
  data() {
    return {
      tableData: [],
      tabelCategory: ["BUYER", "GIG", "DATE", "TOTAL", "STATUS", "ACTIONS"],
    };
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
    orders() {
      return this.$store.getters.orders;
    },
    ordersToShow() {
      return this.orders.filter((order) => {
        return order.seller?._id == this.loggedinUser._id;
      });
    },
    totalPrice() {
      let totalPrice = 0;
      this.ordersToShow.forEach((order) => {
        totalPrice += order.gig.price;
      });
      return totalPrice;
    },
  },
  methods: {
    changeStatus(status, OldOrder) {
      const order = JSON.parse(JSON.stringify(OldOrder));
      order.status = status;
      this.$store.dispatch({ type: "updateOrder", order });
      socketService.emit("statusChanged", order);
    },
  },
  components: {
    charts,
    ordersPreview,
  },
};
</script>
