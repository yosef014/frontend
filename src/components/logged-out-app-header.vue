<template>
  <div :style="setNavbarPosition" :class="showNavbar" class="logged-out-nav-container">
    <div class="logged-out-nav max-width-container" ref="nav">
      <router-link to="/">
        <FiiverrLogo class="logo" :style="setLogoColor"></FiiverrLogo>
      </router-link>
      <div :style="showNavSearch" class="nav-search">
        <searchIconVue />
        <input type="text" placeholder="Find Services" />
        <button>Search</button>
      </div>
      <div class="link-list">
        <ul>
          <span :style="setLinkColor">Fiverr Business</span>
          <li>Explore</li>
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
export default {
  components: {
    fiiverrLogoVue,
  },
  data() {
    return {
      isHomePage: null,
      isShowNavbar: false,
      isShowCatagories: false,
      isShowNavSearch: false,
      logoColorState: false,
      linkColorState: false,
    };
  },

  methods: {},

  mounted() {
    var elNavLinks = document.querySelectorAll(".link-list li");

    window.addEventListener("scroll", () => {
      if (window.scrollY < 5) {
        elNavLinks.forEach((link) => (link.style.color = "#fff"));
        this.isShowNavbar = true;
        this.logoColorState = true;
        this.linkColorState = true;
      }
      if (window.scrollY > 10) {
        elNavLinks.forEach((link) => (link.style.color = "#62646a"));
        this.linkColorState = false;
        this.isShowNavbar = false;
      }

      if (window.scrollY < 100) {
        this.isShowCatagories = false;
        this.isShowNavSearch = false;
        this.logoColorState = false;
      }
      if (window.scrollY > 200) {
        this.isShowNavSearch = true;
        this.isShowCatagories = true;
      }
    });
  },

  watch: {
    $route: {
      handler({path}) {
            this.isHomePage = path === "/";

      },
    },
  },

  computed: {
    showNavbar() {
      return {
        "header-transparent": this.isShowNavbar === true,
      };
    },

    showCatagories() {
      return this.isShowCatagories ? "opacity: 1" : "opacity: 0";
    },

    showNavSearch() {
      return this.isShowNavSearch ? "opacity: 1" : "opacity: 0";
    },

    toggleFixed() {
      return "position: fixed";
    },

    setLogoColor() {
      return this.logoColorState ? "fill: #fff" : "fill: #19a463";
    },

    setLinkColor() {
      return this.linkColorState ? "color: #fff" : "color: #1E1692";
    },

    setNavbarPosition() {
      return this.isHomePage ? 'position: fixed' : 'position: absolute'
    }
  },

  components: {
    searchIconVue,
    FiiverrLogo,
  },
};
</script>
