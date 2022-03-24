<template>
  <div
    :style="setNavbarPosition"
    :class="showNavbar"
    class="logged-out-nav-container"
  >
    <div class="logged-out-nav max-width-container" ref="nav">
      <router-link to="/">
        <FiiverrLogo class="logo" :style="setLogoColor"></FiiverrLogo>
      </router-link>
      <div :style="{ opacity: isShowNavSearch ? 1 : 0 }" class="nav-search">
        <searchIconVue />
        <input type="text" placeholder="Find Services" />
        <button>Search</button>
      </div>
      <div class="link-list">
        <ul>
          <span :style="setLinkColor">Fiverr Business</span>
          <router-link to="tag/">
            <li>Explore</li>
          </router-link>
          <li>English</li>
          <li>ILS</li>
          <li>Become a Seller</li>
          <li>Sign in</li>
          <li class="join">Join</li>
        </ul>
      </div>
    </div>
    <div :style="showCatagories" class="categories-menu-package">
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
  import fiiverrLogoVue from "../svgs/fiiverr-logo.vue";
  import FiiverrLogo from "../svgs/fiiverr-logo.vue";
  import { remove } from "@vue/shared";
  export default {
    components: {
      fiiverrLogoVue,
    },
    data() {
      return {
        isHomePage: true,
        isShowNavbar: true,
        isShowCatagories: false,
        isShowNavSearch: false,
        logoColorState: true,
        linkColorState: false,
        elNavLinks: null,
      };
    },

    methods: {
      unstickNavbar() {
        this.isShowNavbar = true;
        this.isShowCatagories = true;
        this.isShowNavSearch = true;
        this.logoColorState = false;
      },

      stickNavbar() {
        this.isShowNavbar = false;
        this.isShowCatagories = false;
        this.isShowNavSearch = false;
        this.logoColorState = true;
      },

      onScroll() {
        if (window.scrollY < 5) {
          this.elNavLinks.forEach((link) => (link.style.color = "#fff"));
          this.isShowNavbar = false;
          this.logoColorState = true;
          this.linkColorState = true;
        }
        if (window.scrollY > 10) {
          this.elNavLinks.forEach((link) => (link.style.color = "#62646a"));
          this.linkColorState = false;
          this.isShowNavbar = true;
          this.logoColorState = false;
        }

        if (window.scrollY < 200) {
          this.isShowCatagories = false;
          this.isShowNavSearch = false;
        }
        if (window.scrollY > 200) {
          this.isShowNavSearch = true;
          this.isShowCatagories = true;
        }
      },
    },

    //THE BUG CAUSED BY THE EVENT LISTENER - IT LISTENS FOR SCROLL ALL THE TIME, FIND
    // A WAY TO CANCEL IT WHEN MOVING FROM THE HOME PAGE
    mounted() {
      // if (this.isHomePage === false) return
      this.elNavLinks = document.querySelectorAll(".link-list li");
      if (this.isHomePage) {
        this.elNavLinks.forEach((link) => (link.style.color = "#fff"));
        window.addEventListener("scroll", this.onScroll);
      }
    },

    watch: {
      $route: {
        handler({ path }) {
          this.isHomePage = path === "/";
          if (!this.isHomePage) {
            removeEventListener("scroll", this.onScroll);
            this.unstickNavbar();
          } else {
            window.addEventListener("scroll", this.onScroll);
            this.stickNavbar();
          }
        },
      },
    },

    computed: {
      showNavbar() {
        return {
          "header-transparent": this.isShowNavbar === false,
        };
      },

      showCatagories() {
        return this.isShowCatagories ? "opacity: 1" : "opacity: 0";
      },

      // showNavSearch() {
      //   return this.isShowNavSearch ? "opacity: 1" : "opacity: 0";
      // },

      toggleFixed() {
        return "position: fixed";
      },

      setLogoColor() {
        return this.logoColorState ? "fill: #fff" : "fill: #404145";
      },

      setLinkColor() {
        return this.linkColorState ? "color: #fff" : "color: #1E1692";
      },

      setNavbarPosition() {
        return this.isHomePage ? "position: fixed" : "position: absolute";
      },
    },

    components: {
      searchIconVue,
      FiiverrLogo,
    },
  };

  //  user click on order purchase - v-if= loginuser
  // what I need to send to the seller (userId,gigId,sellerId, date.now(),     {
  //METhod get user with the details, dispatch to store, method that gets all the order,
  // method - get data from gig details = (userId,gigId,sellerId, date.now()
  // dispatch - createOrder.
  // order-service - createOrder
  // userService - push to order for each user (buyer, seller) via getUserById.
  // mutation 1.
</script>
