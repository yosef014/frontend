<template>
  <section class="charts-box">
    <el-progress type="dashboard" :percentage="approvedOrders" color="#67c23a">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Approved Orders</span>
      </template>
    </el-progress>

    <el-progress type="dashboard" :percentage="pendingOrders" color="#67c23a">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Completed Orders </span>
      </template>
    </el-progress>

    <el-progress type="dashboard" :percentage="deniedOrders" color="#67c23a">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Denied Orders</span>
      </template>
    </el-progress>
    <el-progress type="dashboard" :percentage="deniedOrders" color="#67c23a">
      <template #default="{ percentage }">
        <span class="percentage-value">${{ totalMoneyMade.toFixed(0) }}</span>
        <span class="percentage-label">Total Profit</span>
      </template>
    </el-progress>
    <!-- <p>{{ totalMoneyMade }}</p> -->
  </section>
</template>

<script>
export default {
  props: {
    ordersToShow: Object,
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    totalMoneyMade() {
      let sum = 0;
      this.ordersToShow
        .filter((order) => order.status === "approved" && order.gig.price)
        .forEach((order) => (sum += order.gig.price));

      return sum;
    },
    deniedOrders() {
      let denied = this.ordersToShow.filter(
        (order) => order.status == "denied"
      ).length;
      denied = denied / this.ordersToShow.length;
      let present = denied * 100;
      return present.toFixed();
    },
    approvedOrders() {
      let approved = this.ordersToShow.filter(
        (order) => order.status == "approved"
      ).length;
      approved = approved / this.ordersToShow.length;
      let present = approved * 100;
      return present.toFixed();
    },
    pendingOrders() {
      let pending = this.ordersToShow.filter(
        (order) => order.status == "Pending"
      ).length;
      pending = pending / this.ordersToShow.length;
      let present = pending * 100;
      return (100 - present).toFixed();
    },
  },

  methods: {},

  components: {},
};
</script>

<style scoped>
.percentage-value {
  display: block;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
