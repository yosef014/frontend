<template>
  <div :style="toggleFixed" :class="toggleTransperant" class="logged-out-nav-container">
    <div class="logged-out-nav max-width-container"  ref="nav">
      <div class="logo">fiiver<span>.</span></div>
      <div class="nav-search">
        <searchIconVue />
        <input type="text" placeholder="Find Services" />
        <button class="nav-serach-bt">Search</button>
      </div>
      <div class="link-list">
        <ul>
          <li class="business-link">Fiverr Business</li>
          <li>Explore</li>
          <li>English</li>
          <li>ILS</li>
          <li>Become a Seller</li>
          <li>Sign in</li>
          <li class="join">Join</li>
        </ul>
      </div>
    </div>
    <div class="categories-menu-package ">
      <ul class="max-width-container">
        <li>Graphic & Design</li>
        <li>Digital Marketing</li>
        <li>Writing & Translation</li>
        <li>Video & Animation</li>
        <li>Music & Audio</li>
        <li>Programming & Tech</li>
        <li>Business</li>
      </ul>
    </div>
  </div>
</template>

<script>
import searchIconVue from "../svgs/search-icon.vue";
export default {
  data() {
    return {
      isTransparent: true,
    }
  },

  methods: {},

  created() {
    console.log(document.querySelector(".categories-menu-package"));
  },
  mounted() {
    var elCatagoryMenu = document.querySelector(".categories-menu-package");
    var elNavSearch = document.querySelector(".nav-search");
    var elNavLinks = document.querySelectorAll('.link-list li')
    var elBusinessLink = document.querySelector('.business-link')
    
    
    window.addEventListener("scroll", () => {
      if (window.scrollY < 5 ) {
        elNavLinks.forEach((link) => link.style.color = '#fff')
        this.isTransparent = true
      }
      if (window.scrollY > 10) {
        elNavLinks.forEach((link) => link.style.color = '#62646a')
                elBusinessLink.style.color = '#1e1692'

        this.isTransparent = false
      }
      
      if (window.scrollY < 100) {
        elCatagoryMenu.style.opacity = 0
        elNavSearch.style.opacity = 0
      }
      if (window.scrollY > 200) {
        elNavSearch.style.opacity = 1
         elCatagoryMenu.style.opacity = 1
         
      }

    })
  
  },

  computed: {
    toggleTransperant() {
      return {
        'header-transparent': this.isTransparent === true,
      }
    },

    toggleFixed() {
      return 'position: fixed'
    }
  },
  // mounted() {
  //   const elNav = document.querySelector(".logged-out-nav-container");
  //   const elNavFluid = document.querySelector(".fluid-el");
  //   window.addEventListener("scroll", function () {
  //     if (window.scrollY > 200) {
  //       document.querySelector(".categories-menu-package").style.display =
  //         "flex";
  //       document.querySelector(".nav-search").style.display = "flex";
  //       document.querySelector(".default-container").style.display = "flex";
  //     } else if (window.scrollY > 50) {
  //       document.querySelector(".nav-search").style.display = "none";
  //       document.querySelector(".categories-menu-package").style.display =
  //         "none";
  //       document.querySelector(".default-container").style.display = "none";
  //       elNav.classList.remove("nav-container");
  //       elNav.classList.add("nav-container-open-one");
  //       elNavFluid.classList.add("header-container-fluid-close");
  //       elNavFluid.classList.remove("header-container-fluid");
  //     } else if (window.scrollY > 0 || window.scrollY == 0) {
  //       document.querySelector(".nav-search").style.display = "none";
  //       document.querySelector(".categories-menu-package").style.display =
  //         "none";
  //       document.querySelector(".default-container").style.display = "none";
  //       elNavFluid.classList.remove("header-container-fluid-close");
  //       elNavFluid.classList.add("header-container-fluid");
  //       elNav.classList.remove("nav-container-open-one");
  //       elNav.classList.add("nav-container");
  //     }
    // });
  

  
  watch: {},
  components: {
    searchIconVue,
  },
};
</script>
