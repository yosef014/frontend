<template>
  <div
    :style="{ position: isHomePage ? 'fixed' : 'absolute' }"
    :class="showNavbar"
    class="logged-out-nav-container"
  >
    <div class="logged-out-nav max-width-container">
      <router-link to="/">
        <FiiverrLogo
          class="logo"
          :style="{ fill: logoColorState ? '#fff' : '#404145' }"
        ></FiiverrLogo>
      </router-link>
      <div :style="{ opacity: isShowNavSearch ? 1 : 0 }" class="nav-search">
        <searchIconVue />
        <input type="text" placeholder="Find Services" />
        <button>Search</button>
      </div>
      <div class="link-list">
        <ul>
          <span :style="{ color: linkColorState ? '#fff' : '#1E1692' }"
            >Fiverr Business</span
          >
          <router-link to="/tag">
            <li>Explore</li>
          </router-link>
          <li>ILS</li>
          <router-link to="become a seller">
            <li>Become a Seller</li>
          </router-link>
          <!-- <router-link to="sign in"> -->
          <li @click="toggleLogin(showModal.isLogin)">
            Sign in
            <Modal v-model="showModal.isLogin" :close="toggleLoginClose">
              <div class="modal">
                <login :close="toggleLoginClose" />
              </div>
            </Modal>
          </li>
          <!-- </router-link> -->
          <li @click="toggleSignUp(showModal.isSignUp)" class="join">
            Join
            <Modal v-model="showModal.isSignUp" :close="toggleClose">
              <div class="modal">
                <sign-up :close="toggleClose" />
              </div>
            </Modal>
          </li>
        </ul>
      </div>
    </div>
    <div
      :style="{ opacity: isShowCatagories ? 1 : 0 }"
      class="categories-menu-package"
    >
      <ul class="max-width-container">
        <li v-for="catagory in catagories" :key="catagory.name">
          <router-link :to="'/tag/' + catagory.path">
            <a>{{ catagory.name }}</a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import searchIconVue from "../svgs/search-icon.vue";
  import fiiverrLogoVue from "../svgs/fiiverr-logo.vue";
  import FiiverrLogo from "../svgs/fiiverr-logo.vue";
  import login from "./login.vue";
  import signUp from "./sign-up.vue";
  import { remove } from "@vue/shared";
  export default {
    components: {
      fiiverrLogoVue,
      login,
      signUp,
    },
    data() {
      return {
        showModal: {
          isLogin: false,
          isSignUp: false,
        },
        isHomePage: true,
        isShowNavbar: true,
        isShowCatagories: false,
        isShowNavSearch: false,
        logoColorState: true,
        linkColorState: false,
        elNavLinks: null,
        catagories: [
          {
            name: "Arts And Drafts",
            path: "arts and drafts",
          },
          {
            name: "Data",
            path: "data",
          },
          {
            name: "Logo",
            path: "logo",
          },
          {
            name: "Marketing",
            path: "marketing",
          },
          {
            name: "Research And Summeries",
            path: "research and summeries",
          },
          {
            name: "Programming & Tech",
            path: "programming and tech",
          },
          {
            name: "Business",
            path: "business",
          },
        ],
      };
    },

    methods: {
      toggleLogin() {
        this.showModal.isLogin = true;
      },
      toggleClose() {
        this.showModal.isSignUp = false;
      },
      toggleSignUp() {
        this.showModal.isSignUp = true;
      },
      toggleLoginClose() {
        this.showModal.isLogin = false;
      },
      unstickNavbar() {
        this.isShowNavbar = true;
        this.isShowCatagories = true;
        this.isShowNavSearch = true;
        this.logoColorState = false;
        this.linkColorState = false;
        this.elNavLinks.forEach((link) => (link.style.color = "#62646a"));
      },

      stickNavbar() {
        this.isShowNavbar = false;
        this.isShowCatagories = false;
        this.isShowNavSearch = false;
        this.logoColorState = true;
        this.linkColorState = false;
        this.elNavLinks.forEach((link) => (link.style.color = "#fff"));
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

    mounted() {
      this.elNavLinks = document.querySelectorAll(".link-list li");
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
            this.elNavLinks.forEach((link) => (link.style.color = "#fff"));

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
    },

    components: {
      searchIconVue,
      FiiverrLogo,
    },
  };
</script>
<style scoped lang="scss">
  .modal {
    width: 300px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
    font-size: 20px;
    text-align: center;
  }
  body {
    opacity: 0.7;
  }
</style>
