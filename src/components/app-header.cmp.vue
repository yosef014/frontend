<template>
  <div class="header-container-fluid fluid-el">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    log() {
      // console.log(this.$refs.nav);
      console.log("hii");
    },
  },

  mounted() {
    const elNav = document.querySelector(".nav-container");
    const elNavFluid = document.querySelector(".fluid-el");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        console.log("200");

        // console.log(elNav);
      } else if (window.scrollY > 50) {
        elNav.classList.remove("nav-container");
        elNav.classList.add("nav-container-open-one");
        elNavFluid.classList.add("header-container-fluid-close");
        elNavFluid.classList.remove("header-container-fluid");
      } else if (window.scrollY > 0) {
        elNavFluid.classList.remove("header-container-fluid-close");
        elNavFluid.classList.add("header-container-fluid");
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
