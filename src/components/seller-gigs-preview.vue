<template>
  <section class="seller-orders-preview-card">
    <div class="seller-gig-img-container">
      <img :src="gig.productImgs[0]" />
    </div>

    <div class="owner-prev-container">
      <div class="owner-profile-pic">
        <img :src="gig.owner.imgUrl" />
      </div>
    
      <div class="owner-info">
        <p>{{ gig.owner.username }}</p>
        <h5>Level 2 seller</h5>
      </div>
     
    </div>
    <p :title="gig.title" class="title">
      {{ gig.title }}
    </p>

    <div class="owner-rating">
      <span>Delivery in:</span> {{ gig.daysToMake }} days
    </div>

    <div class="seller-gig-footer">
      <div class="card-actions">
        <EditIcon @click="this.$router.push('/seller/edit' + '/' + gig._id)">
          edit
        </EditIcon>
        <TrashIcon />
        <el-tooltip content="Add to favorite" placement="top"
          ><FavoriteIcon
        /></el-tooltip>
      </div>

      <div class="price">
        <span> ${{ gig.price }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import FavoriteIcon from "../svgs/favorite-icon.vue";
import EditIcon from "../svgs/edit-icon.vue";
import TrashIcon from "../svgs/trash-icon.vue";
export default {
  props: {
    gig: Object,
  },
  components: { FavoriteIcon, EditIcon, TrashIcon },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style scoped></style>
