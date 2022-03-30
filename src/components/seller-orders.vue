<template>
  <section>
    <charts></charts>
    orders total {{ ordersToShow.length }}
    <br />
    aproved:
    {{ ordersToShow.filter((order) => order.status == "approved").length }}
    <br />
    pending:
    {{ ordersToShow.filter((order) => order.status == "panding").length }}
    <br />
    total price: {{ totalPrice }}
    <div class="table">
      <div class="table-header">
        <span v-for="category in tabelCategory" :key="category">
          {{ category }}
        </span>
      </div>
      <ul class="table-row" v-for="order in ordersToShow" :key="order">
        <li>{{ order.buyer.username }}</li>
        <li class="table-gig-title">{{ order.gig.title }}</li>
        <li>{{ new Date(order.createdAt).toLocaleDateString("iw-IL") }}</li>
        <li>{{ order.gig.price + "$" }}</li>
        <li
          :class="
            order.status === 'approved' ? 'approved-active' : 'denied-active'
          "
          :style="{
            color: order.status === 'Pending' ? 'orange' : '',
          }"
        >
          {{ order.status.toUpperCase() }}
        </li>
        <div class="table-actions">
          <CircleCheckmarkIcon :fill="order.status === 'approved' ? '#27AE60' : ''" @click="changeStatus('approved', order)">
          </CircleCheckmarkIcon>
          <CloseIcon @click="changeStatus('closed', order)"></CloseIcon>
        </div>
      </ul>
    </div>
  </section>
</template>
<script>
import charts from "../components/charts.vue";
import CircleCheckmarkIcon from "../svgs/circle-checkmark-icon.vue";
import CloseIcon from "../svgs/close-icon.vue";

export default {
  data() {
    return {
      tableData: [],
      tabelCategory: ["BUYER", "GIG", "DATE", "TOTAL", "STATUS", "ACTIONS"],
    };
  },
  created() {},
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
    orders() {
      return this.$store.getters.orders;
    },
    ordersToShow() {
      return this.orders.filter((order) => {
        console.log(this.loggedinUser._id);
        return order.seller?._id == this.loggedinUser._id;
      });
    },
    setStatusColor() {
      return order.status === "Approved" ? "approved-active" : "denied-active";
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
    CircleCheckmarkIcon,
    CloseIcon,
  },
};
</script>
<<<<<<< HEAD
<style>
.approved-active {
  color: green;
}
.denied-active {
  color: red;
}
</style>
=======
<style scoped></style>
>>>>>>> 90690a18144a93010ac0c83a912525411730ead2
