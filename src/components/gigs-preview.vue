<template>
  <section v-if="gig">
    <!-- <div class="gig-img" @click="this.$router.push('/tag' + '/' + gig.category + '/'+ gig._id)"> -->
    <el-carousel :autoplay="false" trigger="click">
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
        <a>{{ gig.owner.username }}</a>
        <h5>{{ capSentence }}</h5>
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
      <StarIcon />{{ gig.rate }} <span>({{ gig.reviews }})</span>
    </div>

    <div class="gig-footer">
      <el-tooltip content="Add to favorite" placement="top">
        <FavoriteIcon
          @click="setFavorite"
          :style="{ fill: this.isFavorite ? '#FF0000' : '#b5b6ba' }"
        />
      </el-tooltip>

      <div class="price">
        <small>STARTING AT</small>
        <span>
          ${{ gig.price.toFixed(0) }} <sup>{{ getDecimals }}</sup>
        </span>
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
    return {
      isFavorite: false,
    };
  },
  // components: { StarIcon, FavoriteIcon },
  created() {},
  computed: {
    setStarsToRender() {
      return gig.reviews;
    },

    getDecimals() {
      return (this.gig.price % 1).toFixed(2).substring(2);
    },

    capSentence() {
      return this.gig.level
        .split(" ")
        .map((word) => word.split("")[0].toUpperCase() + word.substring(1))
        .join(" ");
    },
    setFavoriteColor() {
      return;
    },
  },
  methods: {
    setFavorite() {
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>
