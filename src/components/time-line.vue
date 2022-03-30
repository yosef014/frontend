<template>
  <el-timeline>
    <el-timeline-item
      center
      :timestamp="orderDate"
      placement="top"
      color="#1dbf73"
    >
      <el-card>
        <h4>new order created</h4>
        <p>Waiting for confirm order by seller {{ orderDate }}</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item
      center
      :timestamp="orderDate"
      placement="top"
      color="#1dbf73"
    >
      <el-card>
        <h4>seller approverd</h4>
        <p>the seller working on the order</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item center :timestamp=" orderFuterDate" placement="top">
      get the order
    </el-timeline-item>
    <el-timeline-item :timestamp=" orderFuterDate" placement="top">
      order end
    </el-timeline-item>
  </el-timeline>
</template>

<script>
import timeLine from "../components/time-line.vue";

export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    orderDate() {
      const d = new Date();
      return d.toLocaleDateString();
    },
    orderFuterDate() {
      var date = new Date();
      date.setDate(date.getDate() + 3);
      return date.toLocaleDateString()
    },
  },

  methods: {},

  components: {},
};
</script>
