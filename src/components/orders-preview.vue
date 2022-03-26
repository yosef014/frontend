<template>
  <section v-if="order" class="orders-preview">
    <div class="img-container">
      <img :src="order.gig.img" />
    </div>

    <div class="owner-prev">
      <img :src="order.seller.imgUrl" />
      <div class="owner-name-level">
        {{ order.seller.username }}
        <h5>Level 2 seller</h5>
      </div>
    </div>
    <p :title="order.gig.title" class="title">
      {{ order.gig.title }}
    </p>

    <div class="owner-rating">
      <span>time to deliver</span> {{ order.gig.timeToDeliver }}days
    </div>

    <div class="gig-footer">
      <el-tooltip content="Add to favorite" placement="top"> </el-tooltip>

      <div class="price">
        <h6>price</h6>
        <span> {{ order.gig.price }}$</span>
        <button>edit</button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    order: Object,
  },
  components: {
 
  },
  data() {
    return {};
  },
  created() {},
  computed: {
   
  },
  methods: {},
};
</script>

<style scoped></style>
