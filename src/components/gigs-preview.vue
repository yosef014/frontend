<template>
  <section v-if="gig">
    <!-- <div class="gig-img" @click="this.$router.push('/tag' + '/' + gig.category + '/'+ gig._id)"> -->
    <el-carousel :autoplay="false" trigger="click" height="197px">
      <el-carousel-item v-for="currImg in gig.productImgs" :key="currImg">
        <div class="img-container">
          <img
            :src="currImg"
            @click="
              this.$router.push('/tag' + '/' + gig.category + '/' + gig._id)
            "
          />
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="owner-prev">
      <img :src="gig.owner.imgUrl" />
      <div class="owner-name-level">
        {{ gig.owner.username }}
        <h5>Level 2 seller</h5>
      </div>
    </div>
    <p
      :title="gig.title"
      class="title"
      @click="this.$router.push('/tag' + '/' + gig.category + '/' + gig._id)"
    >
      {{ gig.title }}
    </p>

    <div class="owner-rating">
      <StarIcon />{{ gig.rate }} <span>(1K+)</span>
    </div>

    <div class="gig-footer">
      <el-tooltip content="Add to favorite" placement="top">
        <FavoriteIcon />
      </el-tooltip>

      <div class="price">
        <h6>starting at</h6>
        <span> ${{ gig.price }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import StarIcon from "../svgs/star-icon.vue";
import FavoriteIcon from "../svgs/favorite-icon.vue";
export default {
  props: {
    gig: Object,
  },
  components: {
    StarIcon,
    FavoriteIcon,
  },
  data() {
    return {};
  },
  components: { StarIcon, FavoriteIcon },
  created() {},
  computed: {
    setStarsToRender() {
      return gig.reviews;
    },
  },
  methods: {},
};
</script>
