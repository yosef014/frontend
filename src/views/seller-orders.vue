<template>
  <section class="page-content-container">

    <!-- <el-table :data="tableData" style="width: 100%" :row-class-name="getClassNames"	>
      <el-table-column  prop="BUYER" label="BUYER" width="100" />
      <el-table-column prop="GIG" label="GIG" width="150" />
      <el-table-column prop="DATE" label="DATE" width="100" />
      <el-table-column prop="DUE" label="DUE ON" width="100" />
      <el-table-column prop="TOTAL" label="TOTAL" width="60" />
      <el-table-column prop="STATUS" label="STATUS" width="120" />
      <el-table-column fixed="right" label="ACTIONS" width="120" >
        <template #default>
          <el-button type="text" size="small" @click="handleClick(tableData)"
            >Detail</el-button
          >
          <el-button type="text" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table> -->
    <table>
      <tr>
        <th>BUYER</th>
        <th>GIG</th>
        <th>DATE</th>
        <th>DADUE ONTE</th>
        <th>TOTAL</th>
        <th>STATUS</th>
        <th>ACTIONS</th>
      </tr>
      <tr v-for="order in ordersToShow" :key="order">
        <td>{{order.buyer.username}}</td>
        <td>{{order.gig.title}}</td>
        <td>{{new Date(order.createdAt).toLocaleDateString('iw-IL')}}</td>
        <td>{{order.gig.timeToDeliver + ' '+ 'days'}}</td>
        <td>{{order.gig.price +'$'}}</td>
        <td>{{order.status}}</td>
        <td><button @click="changeStatus('approved', order)">✔</button><button @click="changeStatus('closed',order)">❌</button></td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tableData:[]
    };
  },
  created() {
   
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
        return order.seller._id == this.loggedinUser._id;
      });
    },
  },

  methods: {
    changeStatus(status,OldOrder) {
      const order = JSON.parse(JSON.stringify(OldOrder));
      order.status=status
      this.$store.dispatch({ type: "updateOrder", order });
    },
   
  },

  components: {},
};
</script>
