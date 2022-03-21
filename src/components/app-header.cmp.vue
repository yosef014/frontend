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
        <li class="join">Join</li>
      </ul>
      <!-- <button @click="log">xx</button> -->
      {{ navContainer }}
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    log() {
      // console.log(this.$refs.nav);
      console.log("hii");
      this.navContainer = "nav-container-open-one";
    },
  },

  mounted() {
    const elNav = document.querySelector(".nav-container");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        console.log("200");
        this.navContainer = "nav-container-open-one";

        // console.log(elNav);
      } else if (window.scrollY > 50) {
        elNav.classList.remove("nav-container");
        elNav.classList.add("nav-container-open-one");
      } else if (window.scrollY > 0) {
        elNav.classList.remove("nav-container-open-one");
        elNav.classList.add("nav-container");
      }
    });
  },

  data: () => {
    return {};
  },
};
</script>
