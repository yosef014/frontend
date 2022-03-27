<template>

  <section v-if="gig" class="orders-preview">
    <div class="img-container">
      <img :src="gig.productImgs[0]" />
    </div>

    <div class="owner-prev">
      <img :src="gig.owner.imgUrl" />

      <div class="owner-name-level">
        {{ gig.owner.username }}
        <h5>Level 2 seller</h5>
      </div>
    </div>
    <p :title="gig.title" class="title">
      {{ gig.title }}
    </p>

    <div class="owner-rating">
      <span>time to deliver</span> {{ gig.daysToMake }}days
    </div>

    <div class="gig-footer">
      <el-tooltip content="Add to favorite" placement="top"> </el-tooltip>

      <div class="price">
        <h6>price</h6>
        <span> {{ gig.price }}$</span>
        <button @click="this.$router.push('/seller/edit' + '/' + gig._id)
">edit</button>
      </div>
    </div>
    sdfsdfsf
  </section>
</template>

<script>

export default {
  props: {
    gig: Object,
  },
  components: {
 
  },
  data() {
    return {};
  },
  created() {
  },
  computed: {
   
  },
  methods: {},
};
</script>

<style scoped></style>
