<template>
  <section class="page-content-container">
    <div class="prifile-page-layout-fluid">
      <div class="prifile-page-layout">
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
              <a @click="this.$router.push('/gig')" class="gig-add-btn"> + </a>
              <span>Create a new gig</span>
            </li>
          </ul>

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
      return {
        userProfileNavLink: [
          {
            name: "ACTIVITY GIGS",
          },
          {
            name: "DRAFTS",
          },
          {
            name: "PAUSED",
          },
        ],
      };
    },
    created() {},
    computed: {
      loggedinUser() {
        return this.$store.getters.loggedinUser;
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
      },

      methods: {},

      components: {},
    },
  };
</script>

<style></style>
