<template>
  <section>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="user-page-layout-container">
      <div class="user-page-left">
        <h1>user profile</h1>
        <div class="user-img">
          <img :src="loggedinUser.imgUrl" />
        </div>
     username:   {{ loggedinUser.username }}
        <p>
      full name:    {{ loggedinUser.fullname }}
        </p>
        <p>
      level:    {{ loggedinUser.level }}
        </p>
        <button>Preview seller controll</button>
      </div>


      <div class="user-page-orders-main">
        <h1>orders list</h1>
      <div class="user-page-orders-list">
        
 <table>
      <tr>
        <th>gig</th>
        <th>title</th>
        <th>order date</th>
        <th>price</th>
        <th>status</th>
        <th>massnger</th>
      </tr>
      <tr v-for="order in ordersToShow" :key="order">
        <td><img :src="order.gig.productImgs[0]"></td>
        <td>{{order.gig.title}}</td>
        <td>{{new Date(order.createdAt).toLocaleDateString('iw-IL')}}</td>
        <td>{{order.gig.price +'$'}}</td>
        <td>{{order.status}}</td>
        <td><button>tallk whit seller</button></td>
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
