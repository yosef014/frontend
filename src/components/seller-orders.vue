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
      <tr v-for="order in orders" :key="order">
        <td>{{ order.buyer.username }}</td>
        <td>{{ order.gig.title }}</td>
        <td>{{ new Date(order.createdAt).toLocaleDateString("iw-IL") }}</td>
        <td>{{ order.gig.price + "$" }}</td>
        <td>{{ order.status }}</td>
        <td>
          <button @click="changeStatus('approved', order)">✔</button>
          <button @click="changeStatus('closed', order)">❌</button>
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
  },
};
</script>
