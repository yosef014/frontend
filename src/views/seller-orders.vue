<template>
  <section>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <br />
    <br />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="date" label="BUYER" width="150" />
      <el-table-column prop="name" label="GIG" width="120" />
      <el-table-column prop="state" label="DATE" width="120" />
      <el-table-column prop="city" label="DUE ON" width="120" />
      <el-table-column prop="address" label="TOTAL" width="600" />
      <el-table-column prop="zip" label="STATUS" width="120" />
      <el-table-column fixed="right" label="ACTIONS" width="120">
        <template #default>
          <el-button type="text" size="small" @click="handleClick"
            >Detail</el-button
          >
          <el-button type="text" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Home",
        },
      ],
    };
  },
  created() {},
  computed: {
    tableDataToShow(){
      let tableDataToShow 
      this.ordersToShow.foreach((order)=>{
        let tableData= [
        {
          date: order.buyer.username,
          name: order.gig.title,
          state: order.createdAt,
          city: order.gig.timeToDeliver,
          address: order.price,
          zip: order.buyer.username,
          tag: order.buyer.username,
        }]
      })

    },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
    orders() {
      return this.$store.getters.orders;
    },
    ordersToShow() {
      return this.orders.filter((order) => {
        return order.seller._id == this.loggedinUser._id;
      });
    },
  },

  methods: {
    handleClick() {
      console.log("click");
    },
  },

  components: {},
};
</script>
