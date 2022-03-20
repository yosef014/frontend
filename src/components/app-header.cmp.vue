<template>
  <div class="nav-container" ref="nav">
    <div class="logo">fiiver.</div>
    <div class="nav">
      <ul>
        <li>Fiverr Business</li>
        <li>Explore</li>
        <li>English</li>
        <li>ILS</li>
        <li>Become a Seller</li>
        <li>Sign in</li>
        <li>Join</li>
      </ul>
      <button @click="log">xx</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    log() {
      console.log(this.$refs.nav);
      console.log("hii");
    },
  },

  mounted() {
    const elNav = document.querySelector('.nav-container')
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) console.log(window.scrollY);
      console.log(elNav);
    });
  },

  data: () => {
    return {
   
    };
  },
};
</script>
