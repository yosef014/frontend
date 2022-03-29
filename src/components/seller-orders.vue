<template>
  <section>
    <charts></charts>
    <div class="table">
      <div class="table-header">
        <span>BUYER</span>
        <span>GIG</span>
        <span>DATE</span>
        <span>TOTAL</span>
        <span>STATUS</span>
        <span>ACTIONS</span>
      </div>
      <ul class="table-row" v-for="order in ordersToShow" :key="order">
        <li>{{ order.buyer.username }}</li>
        <li class="table-gig-title">{{ order.gig.title }}</li>
        <li>{{ new Date(order.createdAt).toLocaleDateString("iw-IL") }}</li>
        <li>{{ order.gig.price + "$" }}</li>
        <li
          :style="{
            color: order.status === 'approved' ? '#27AE60' : '#C0392B',
          }"
        >
          {{ order.status }}
        </li>

        <div class="table-actions">
          <CircleCheckmarkIcon
            :fill="order.status === 'approved' ? '#27AE60' : ''"
            @click="changeStatus('approved', order)"
          >
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
  },

  methods: {
    changeStatus(status, OldOrder) {
      const order = JSON.parse(JSON.stringify(OldOrder));
      order.status = status;
      this.$store.dispatch({ type: "updateOrder", order });
    },
  },

  components: {
    charts,
    CircleCheckmarkIcon,
    CloseIcon,
  },
};
</script>
