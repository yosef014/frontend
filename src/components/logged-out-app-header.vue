<template>
  <div
   
    class="logged-out-nav-container"
  >
    <div class="logged-out-nav max-width-container" ref="nav">
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
    <div class="categories-menu-package">
      <ul class="max-width-container">
        <router-link to="/tag/arts and crafts">
          <li>arts and crafts</li>
        </router-link>

        <li>data</li>

        <router-link to="/tag/logo">
          <li>logo</li>
        </router-link>

        <li>marketing</li>
        <li>research and summeries</li>
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
        isHomePage: null,
      };
    },

    methods: {},

    created() {

    },
    mounted() {
      

      // this.pageName === "home"
      //   ? (this.isHomePage = true)
      //   : (this.isHomePage = false);
      // var elCatagoryMenu = document.querySelector(".categories-menu-package");
      // var elNavSearch = document.querySelector(".nav-search");
      // var elNavLinks = document.querySelectorAll(".link-list li");
      // var elBusinessLink = document.querySelector(".business-link");

      // window.addEventListener("scroll", () => {
      //   if (window.scrollY < 5) {
      //     elNavLinks.forEach((link) => (link.style.color = "#fff"));
      //     this.isTransparent = true;
      //   }
      //   if (window.scrollY > 10) {
      //     elNavLinks.forEach((link) => (link.style.color = "#62646a"));
      //     elBusinessLink.style.color = "#1e1692";

      //     this.isTransparent = false;
      //   }

      //   if (window.scrollY < 100) {
      //     elCatagoryMenu.style.opacity = 0;
      //     elNavSearch.style.opacity = 0;
      //   }
      //   if (window.scrollY > 200) {
      //     elNavSearch.style.opacity = 1;
      //     elCatagoryMenu.style.opacity = 1;
      //   }
      // });
    },

    computed: {
     
    },
    

   


    watch: {
     "$route":{
       handler(newParams){
         console.log(newParams);
       }
     }
    },
    components: {
      searchIconVue,
    },
  };
</script>

