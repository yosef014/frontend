<template>
  <section class="page-content-container">
    
    <div class="prifile-page-layout-fluid">
      <div class="prifile-page-layout">
        <div class="profile-page-aside-left">
          <div class="profile-pic">
            <img :src="loggedinUser.imgUrl" alt="" srcset="" />
            name:{{ loggedinUser.username }}
          </div>
          <div class="user-info">
            {{ loggedinUser.fullname }}
            <br />
            lavel:{{ loggedinUser.level }}
          </div>
        </div>

        <div class="profile-page-aside-right">
          <div class="my-orders-label">my orders</div>
          <div class="my-orders-list">
            <div
              class="my-orders-preview"
              v-for="order in ordersToShow"
              :key="order._id"
            >
              <img :src="order.gig.img" class="gig-preview-pic" />
              {{ order.gig.title }}
              <div class="seller-preview-info">
                <img :src="order.seller.imgUrl" class="seller-preview-pic" />
                {{ order.seller.username }}
              </div>
              ${{ order.gig.price }}
            </div>

            <br />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
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
        console.log(order.buyer._id);
        order.buyer._id == this.loggedinUser._id;
        return order;
      });
    },
  },

  methods: {},

  components: {},
};
</script>

<style></style>
