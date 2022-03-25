<template>
  <section class="page-content-container">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <button @click="removeOrder('o1225')">dell</button>
    <button @click="addOrder()">add</button>
    <pre>
  {{ orders }}
  </pre
    >
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    orders() {
      return this.$store.getters.orders;
    },
  },

  methods: {
    removeOrder(orderId) {
      console.log(orderId);
      this.$store.dispatch({ type: "removeOrder", orderId });
    },
    addOrder() {
      let order =  {
        "createdAt": 9898989,
        "buyer": {
          "_id": "123sads",
          "username": "yosef",
          "imgUrl": "/img/img1.jpg",
          "level": "basic/premium",
          "ordersId": ["sdsadmf123"]
        },
        "seller": {
          "_id": "1243sads",
          "username": "emil",
          "imgUrl": "/img/img1.jpg",
          "level": "basic/premium",
          "ordersId": ["sdsadmf123"]
        },
        "gig": {
          "_id": "i101",
          "title": "Design Logo",
          "price": 20,
          "description": 'deeescriptionn',
          "timeToDeliver": '2',
        },
        "status": "pending"
      }
      this.$store.dispatch({ type: "addOrder", order });
    },
  },

  components: {},
};
</script>

<style></style>
