<template>
  <div class="header-container-fluid fluid-el">
    <div class="nav-container" ref="nav">
      <div class="logo">fiiver<span style="color: #1dbf73">.</span></div>
      <div class="nav-search">
        <button class="search-icon">🔍</button>
        <input type="text" placeholder="Find Services" />
        <button class="nav-serach-bt">Search</button>
      </div>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},

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
