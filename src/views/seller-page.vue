<template>
  <section class="page-content-container">
    <div class="profile-page-layout-fluid">
      <div class="profile-page-layout">
        <div class="profile-page-aside-left">
          <div class="user-info">
            <div class="profile-pic">
              <img :src="loggedinUser.imgUrl" alt="" srcset="" />
            </div>
            <p>
              {{ loggedinUser.username }}
            </p>
            <!-- We need to compute user level to upperCase -->
            <p>{{ loggedinUser.level }} user</p>
            <p>
              {{ loggedinUser.fullname }}
            </p>
          </div>
          <div class="preview-profile-btn">
            <p>Preview Fiverr Profile</p>
          </div>
        </div>

        <div class="profile-page-aside-right">
          <nav class="user-profile-navbar">
            <ul class="nav-links">
              <li
                v-for="userProfileNavLink in userProfileNavLink"
                :key="userProfileNavLink"
              >
                {{ userProfileNavLink.name }}
              </li>
            </ul>
          </nav>
          <ul class="my-orders-label">
            <li class="gig-add-card gig-card">
              <a @click="this.$router.push('/seller/edit')" class="gig-add-btn">
                +
              </a>
              <span>Create a new gig</span>
            </li>
            <li class="gig-card" v-for="order in ordersToShow" :key="order._id">
              <OrdersPreview :order="order" />
            </li>
            <li class="gig-card">
              <p>gig title</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- {{gigsToShow}} -->
  </section>
</template>

<script>
import OrdersPreview from "../components/orders-preview.vue";
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
    OrdersPreview,
  },
};
</script>

<style></style>
