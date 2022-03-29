<template>
  <section>
    <charts></charts>
    <table>
      <tr class="table-header">
        <th>BUYER</th>
        <th>GIG</th>
        <th>DATE</th>
        <th>TOTAL</th>
        <th>STATUS</th>
        <th>ACTIONS</th>
      </tr>
      <tr v-for="order in ordersToShow" :key="order">
        <td>{{ order.buyer.username }}</td>
        <td>{{ order.gig.title }}</td>
        <td>{{ new Date(order.createdAt).toLocaleDateString("iw-IL") }}</td>
        <td>{{ order.gig.price + "$" }}</td>
        <td>{{ order.status }}</td>
        <td>
          <button class="approve-btn" @click="changeStatus('approved', order)">
            ✔
          </button>
          <button class="disapprove-btn" @click="changeStatus('closed', order)">
            ❌
          </button>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import charts from "../components/charts.vue";

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
  },
};
</script>
