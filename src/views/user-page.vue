<template>
  <section class="page-content-container">
    
    <div class="prifile-page-layout-fluid max-width-container">
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
<!-- left side -->
        <div class="user-orders-container">

          <table>
      <tr>
        <th>order</th>
        <th>title</th>
        <th>order date</th>
        <th>price</th>
        <th>STATUS</th>
      </tr>
      <tr v-for="order in ordersToShow" :key="order">
        <td>כאן יהיה תמונה</td>
        <td>{{order.gig.title}}</td>
        <td>{{order.buyer.username}}</td>
        <td>{{new Date(order.createdAt).toLocaleDateString('iw-IL')}}</td>
        <td>{{order.gig.timeToDeliver + ' '+ 'days'}}</td>
        <td>{{order.gig.price +'$'}}</td>
        <td>{{order.status}}</td>
        <td><button @click="changeStatus('approved', order)">✔</button><button @click="changeStatus('closed',order)">❌</button></td>
      </tr>
    </table>
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
