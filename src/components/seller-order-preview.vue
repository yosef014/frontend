<template>
  <div class="table-content">
    <ul class="table-row" v-for="order in ordersToShow" :key="order">
      <li>{{ order.buyer.username }}</li>
      <li class="table-gig-title">{{ order.gig.title }}</li>
      <li>{{ new Date(order.createdAt).toLocaleDateString("iw-IL") }}</li>
      <li>{{ "$" + order.gig.price }}</li>
      <li :class="setStatusClr(order)">
        {{ order.status.toUpperCase() }}
      </li>
      <div class="table-actions">
        <CircleCheckmarkIcon
          fill="#27AE60"
          @click="changeStatus('approved', order)"
        >
        </CircleCheckmarkIcon>
        <CloseIcon
          @click="changeStatus('denied', order)"
          fill="red"
        ></CloseIcon>
      </div>
    </ul>
  </div>
</template>

<script>
import CircleCheckmarkIcon from "../svgs/circle-checkmark-icon.vue";
import CloseIcon from "../svgs/close-icon.vue";
export default {
  props: {
    ordersToShow: Object,
  },
  data() {
    return {};
  },
  created() {},
  computed: {},

  methods: {
    setStatusClr(order) {
      const status = order.status;
      if (status == "approved") return "approved-active";
      if (status == "denied") return "denied-active";
      if (status == "Pending") return "pending-active";
    },
    changeStatus(status, order) {
      this.$emit("changeStatus", status, order);
    },
  },
  components: {
    CircleCheckmarkIcon,
    CloseIcon,
  },
};
</script>
