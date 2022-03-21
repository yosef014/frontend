<template>
  <div class="header-container-fluid fluid-el">
    <div class="nav-container" ref="nav">
      <div class="logo">fiiver<span style="color: #1dbf73">.</span></div>
      <div class="nav-search">
        <searchIconVue/>
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
    {{ windowTop }}
    <div class="categories-menu-package">
      <div class="default-container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi,
        dolorem perspiciatis culpa amet velit id deleniti modi incidunt. Vero
        dolorem nam veniam quibusdam sit porro aliquam provident, cumque odio.
      </div>
    </div>
  </div>
</template>

<script>
import searchIconVue from "../svgs/search-icon.vue";
export default {
  methods: {},

  mounted() {
    const elNav = document.querySelector(".nav-container");
    const elNavFluid = document.querySelector(".fluid-el");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        console.log("200");
        document.querySelector(".categories-menu-package").style.display =
          "flex";
        document.querySelector(".default-container").style.display = "flex";
      } else if (window.scrollY > 50) {
        document.querySelector(".categories-menu-package").style.display =
          "none";
        document.querySelector(".default-container").style.display = "none";
        elNav.classList.remove("nav-container");
        elNav.classList.add("nav-container-open-one");
        elNavFluid.classList.add("header-container-fluid-close");
        elNavFluid.classList.remove("header-container-fluid");
      } else if (window.scrollY > 0) {
        document.querySelector(".categories-menu-package").style.display =
          "none";
        document.querySelector(".default-container").style.display = "none";
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
  computed: {},
  watch: {},
  components: {
    searchIconVue,

  }
};
</script>
