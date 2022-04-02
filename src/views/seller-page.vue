<template>
  <section class="page-content-container">
    <div class="profile-page-layout-fluid">
      <div class="profile-page-layout max-width-container">
        <div class="profile-page-aside-left">
          <h1>Seller Profile</h1>
          <div class="user-info">
            <div class="profile-pic">
              <img :src="loggedinUser.imgUrl" alt="" srcset="" />
            </div>
            <p>user name: {{ loggedinUser.username }}</p>
            <!-- We need to compute user level to upperCase -->
            <p>level: {{ loggedinUser.level }}</p>
          </div>

          <div class="demo-progress">
            <p>Order Completion</p>
            <el-progress
              :text-inside="true"
              :stroke-width="15"
              :percentage="70"
              :color="color"
            />
            <p>On-Time Delivery</p>
            <el-progress
              :text-inside="true"
              :stroke-width="15"
              :percentage="100"
              :color="color"
            />
            <p>Selling Seniority</p>
            <el-progress
              :text-inside="true"
              :stroke-width="15"
              :percentage="80"
              :color="color"
            />
            <p>Rating</p>
            <el-progress
              :text-inside="true"
              :stroke-width="15"
              :percentage="50"
              :color="color"
            />
          </div>

          <div class="preview-profile-btn">
            <p @click="this.$router.push('/user')">Preview Fiverr Profile</p>
          </div>
        </div>

        <div class="profile-page-aside-right">
          <el-tabs
            v-model="activeName"
            type="border-card"
            @tab-click="togglePagination"
          >
            <el-tab-pane label="My Active Gigs" name="first">
              <ul class="my-orders-label">
                <li class="gig-add-card gig-card">
                  <a
                    @click="this.$router.push('/seller/edit')"
                    class="gig-add-btn"
                  >
                    +
                  </a>
                  <span>Create a new gig</span>
                </li>
                <li class="gig-card" v-for="gig in gigsToShow" :key="gig._id">
                  <sellerGigsPreview :gig="gig" />
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="Orders manager">
              <sellerOrders></sellerOrders>
            </el-tab-pane>
          </el-tabs>

          <div v-if="openPagination" class="seller-paginaton-page">
            <el-button @click="prevPage"> &lt; Prev </el-button>
            <el-button @click="nextPage">Next > </el-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sellerGigsPreview from "../components/seller-gigs-preview.vue";
import sellerOrders from "../components/seller-orders.vue";
export default {
  data() {
    return {
      color: "#67c23a",
      activeName: "first",
      pageSize: 7,
      pageIdx: 0,
      openPagination: true,
      userProfileNavLink: [
        {
          name: "My Active Gigs",
        },
        {
          name: "Orders manager",
        },
        {
          name: "Dashboard",
        },
      ],
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
        return order.seller._id == this.loggedinUser._id;
      });
    },
    startIdx() {
      return this.pageIdx * this.pageSize;
    },
    gigs() {
      return this.$store.getters.gigs;
    },
    gigsToShow() {
      // if (!this.gigs) return;
      const gigs = this.gigs.filter((gig) => {
        return gig.owner._id == this.loggedinUser._id;
      });
      return gigs.slice(this.startIdx, this.startIdx + this.pageSize);
    },
  },

  methods: {
    togglePagination() {
      if (this.activeName == 1) return (this.openPagination = false);
      if (this.activeName === "first") return (this.openPagination = true);
    },
    nextPage() {
      this.pageIdx++;
      let maxPage = Math.ceil(this.orders.length / this.pageSize);
      if (this.pageIdx >= maxPage) return this.pageIdx--;
    },
    prevPage() {
      this.pageIdx--;
      if (this.pageIdx < 0) this.pageIdx = 0;
    },
    handleChange(pageIdx) {
      this.pageIdx = pageIdx;
    },
  },

  components: {
    sellerGigsPreview,
    sellerOrders,
  },
};
</script>

<style>
.demo-progress .el-progress--line {
  margin-bottom: 5px;
}
</style>
