<template>
  <section class="page-content-container">
    <div class="profile-page-layout-fluid">
      <div class="profile-page-layout max-width-container">
        <div class="profile-page-aside-left">
              <h1>prifile user</h1>
          <div class="user-info">
            <div class="profile-pic">
              <img :src="loggedinUser.imgUrl" alt="" srcset="" />
            </div>
            <p>
            user name:  {{ loggedinUser.username }}
            </p>
            <!-- We need to compute user level to upperCase -->
            <p>{{ loggedinUser.level }} user</p>
            <p>
          full name    {{ loggedinUser.fullname }}
            </p>
          </div>
          <div class="preview-profile-btn">
            <p @click="this.$router.push('/user')">Preview Fiverr Profile</p>
          </div>
        </div>

        <div class="profile-page-aside-right">
          <el-tabs type="border-card">
    <el-tab-pane label="My Active Gigs">
 <ul class="my-orders-label" >
            <li class="gig-add-card gig-card">
              <a @click="this.$router.push('/seller/edit')" class="gig-add-btn">
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
    <el-tab-pane label="Dashboard">Dashboard</el-tab-pane>
  </el-tabs>
          <!-- <nav class="user-profile-navbar">
            <ul class="nav-links">
              <li
                v-for="userProfileNavLink in userProfileNavLink"
                :key="userProfileNavLink"
              >
                {{ userProfileNavLink.name }}
              </li>
            </ul>
          </nav> -->
         
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
    gigs() {
      return this.$store.getters.gigs;
    },
    gigsToShow() {
      // if (!this.gigs) return;
      return this.gigs.filter((gig) => {
        return gig.owner._id == this.loggedinUser._id;
      });
    },
  },

  methods: {},

  components: {
    sellerGigsPreview,
    sellerOrders,
  },
};
</script>

<style></style>
