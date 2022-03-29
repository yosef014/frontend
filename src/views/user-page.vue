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
    <div class="user-page-layout-container" v-if="loggedinUser">
      <div class="user-page-left">
        <h1>user profile</h1>
        <div class="user-img">
          <img :src="loggedinUser.imgUrl" />
        </div>
        username: {{ loggedinUser.username }}
        <p>full name: {{ loggedinUser.fullname }}</p>
        <p>level: {{ loggedinUser.level }}</p>
        <button @click="this.$router.push('/seller')">
          Preview seller controll
        </button>
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
              <td><img :src="order.gig.productImgs[0]" /></td>
              <td>{{ order.gig.title }}</td>
              <td>
                {{ new Date(order.createdAt).toLocaleDateString("iw-IL") }}
              </td>
              <td>{{ order.gig.price + "$" }}</td>
              <td>{{ order.status }}</td>
              <td>
                <button
                  @click="
                    msgTo = {
                      fullname: order.seller.fullname,
                      _id: order.seller._id,
                      imgUrl:order.seller.imgUrl
                    }
                  "
                >
                  tallk whit seller
                </button>
              </td>
            </tr>
          </table>
           <button @click="nextPage">next Page</button>
        <button @click="prevPage">prev Page</button>
         <el-pagination  layout="prev, pager, next" :total="50" :next-click="nextPage()" />
         <el-pagination @click="prevPage" layout="prev, pager, next" :total="50" v-model="pageIdx" />
              <!-- <chat :msgTo="msgTo"></chat> -->

        </div>
      </div>
    </div>
    <div v-else>
      plase log in
      </div>
  </section>
</template>

<script>
import chat from "../components/chat.vue";

export default {
  data() {
    return {
      pageSize:4,
      pageIdx:0,
      msgTo: { fullname: "guest", id: "623f4e421513c14a270f61a4" , imgUrl:'data:image/png;base64,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'},
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
    startIdx(){
      return this.pageIdx * this.pageSize;
    },
     ordersToShow() {
      // if (!this.gigs) return;
      const orders = this.orders.filter((order)=>{
        return order.buyer._id == this.loggedinUser._id;
      });
      return orders.slice(this.startIdx, this.startIdx + this.pageSize)
    },
    // ordersToShow() {
    //   return this.orders.filter((order) => {
    //     return order.buyer._id == this.loggedinUser._id;
    //   });
    // },
  },

  methods: {
    nextPage(){
      this.pageIdx++
      let maxPage = Math.ceil(this.orders.length / this.pageSize)
         if (this.pageIdx >= maxPage-1 ) return this.pageIdx--
    },
    prevPage(){
        this.pageIdx--
         let maxPage = Math.ceil(this.orders.length / this.pageSize)
       if (this.pageIdx < 0) this.pageIdx = 0
    }
  },

  components: {
    chat,
  },
};
</script>

<style></style>