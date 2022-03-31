<template>
  <section class="charts-box">
 <el-progress type="dashboard" :percentage="approvedOrders" color="green">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">approvedOrders</span>
      </template>
    </el-progress>

 <el-progress type="dashboard" :percentage="pendingOrders" color="orange">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">complete </span>
      </template>
    </el-progress>

 <el-progress type="dashboard" :percentage="closedOrders" color="blue">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">closed</span>
      </template>
    </el-progress>
  
  </section>
</template>

<script >
export default {
    props: {
    ordersToShow: Object,
  },
  data() {
    return {
     
    };
  },
  created() {},
  computed: {
    totalPrice() {
      let totalPrice = 0;
      this.ordersToShow.forEach((order) => {
        totalPrice += order.gig.price;
      });
      return totalPrice;
    },
    closedOrders() {
      let closed= this.ordersToShow.filter((order) => order.status == "closed").length
      closed= closed / this.ordersToShow.length; 
      let present = closed * 100
      return present.toFixed()
     
    },
    approvedOrders() {
      let approved= this.ordersToShow.filter((order) => order.status == "approved").length
      approved= approved / this.ordersToShow.length; 
      let present = approved * 100
      return present.toFixed()
     
    },
    pendingOrders() {
      let pending= this.ordersToShow.filter((order) => order.status == "Pending").length
      pending= pending / this.ordersToShow.length; 
      let present = pending * 100
      return (100 - present).toFixed()
     
    },
  },

  methods: {
  },

  components: {
  },
};
</script>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>