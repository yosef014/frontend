<template>
  <div
    :style="{ position: isHomePage ? 'fixed' : 'absolute' }"
    :class="onShowNavbar"
    class="logged-out-nav-container"
  >
    <div v-if="showModal.isLogin">
      <Login @closeModal="closeModal" />
    </div>
    <div v-if="showModal.isSignUp">
      <SignUp @closeModal="closeModal" />
    </div>
    <div class="logged-out-nav max-width-container">
      <router-link to="/">
        <FiiverrLogo
          class="logo"
          :style="{ fill: logoColorState ? '#fff' : '#404145' }"
        ></FiiverrLogo>
      </router-link>
      <div :style="{ opacity: isShowNavSearch ? 1 : 0 }" class="nav-search">
        <searchIconVue />
        <div class="nav-search-results-box" v-if="categoriesToShow">
          <h3>Services</h3>
          <ul
            class="nav-serach-result-list"
            v-for="res in categoriesToShow"
            :key="res"
          >
            <router-link :to="res.route">
              <li>{{ res.name }}</li>
            </router-link>
          </ul>
        </div>
        <input type="text" placeholder="Find Services" v-model="inputLine" />
        <button>Search</button>
      </div>
      <div class="link-list">
        <ul>
          <li v-for="navLink in navLinks" :key="navLink">
            <router-link :to="navLink.route">
              <a
                :style="navLink.name === 'business-link' ? setLinkColor : ''"
                :class="navLink.class"
                >{{ navLink.name }}</a
              >
            </router-link>
          </li>
          <li>
            <a>
              <a
                :class="{ 'login-active': showModal.isLogin === true }"
                class="nav-link"
                @click="toggleLogin"
                v-if="!loggedinUser"
                >Sign In</a
              >
              <a class="join" v-else>Sign Out</a>
            </a>
          </li>
          <li>
            <a>
              <a
                :class="{ 'signup-active': showModal.isSignUp === true }"
                class="join"
                @click="toggleSignup"
                v-if="!loggedinUser"
                >Join</a
              >
              <div v-else class="profile-avatar">
                <router-link to="/seller">
                  <img
                    class="logged-user-avatar"
                    :src="loggedinUser.imgUrl"
                    @click="routeToProfile"
                  />
                  <i
                    class="notification-indicator"
                    :style="{
                      backgroundColor: isGotNotification
                        ? '#1dbf73'
                        : '#ff62ad',
                    }"
                  ></i>
                </router-link>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div :style="toggleCategoriesMenu" class="categories-menu-package">
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
import FiiverrLogo from "../svgs/fiiverr-logo.vue";
import { remove } from "@vue/shared";
import Login from "./login.vue";
import SignUp from "./sign-up.vue";
import { useDeprecateAppendToBody } from "element-plus";
export default {
  components: {
    searchIconVue,
    FiiverrLogo,
    Login,
    SignUp,
  },
  data() {
    return {
      inputLine: "",
      categoryies: [
        "logo",
        "arts and crafts",
        "research and summeries",
        "data entry",
        "marketing",
        "business",
        "programming and tech",
      ],
      loggedinUser: this.$store.getters.loggedinUser,
      isGotNotification: true,
      showModal: {
        isLogin: false,
        isSignUp: false,
      },
      isHomePage: true,
      isGigDetailsPage: false,
      isShowNavbar: true,
      isShowCategories: false,
      isShowNavSearch: false,
      logoColorState: true,
      linkColorState: false,
      elNavLinks: null,
      catagories: [
        {
          name: "Arts And Crafts",
          path: "arts and crafts",
        },
        {
          name: "Data Entry",
          path: "data entry",
        },
        {
          name: "Logo Design",
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
      navLinks: [
        {
          name: "Fiiverr Business",
          route: "/tag/fiiver business",
          class: "nav-link business-link",
        },
        {
          name: "Explore",
          route: "/tag",
          class: "nav-link",
        },
        {
          name: "ILS",
          route: "ils",
          class: "nav-link currency",
        },
        {
          name: "Become A Seller",
          route: "become a seller",
          class: "nav-link",
        },
      ],
    };
  },

  methods: {
    categoryChosen(res) {
      this.inputLine = res;
      this.$router.push("/tag" + "/" + res);
    },
    toggleLogin() {
      this.showModal.isLogin = true;
      document.querySelector("body").classList.toggle("disable-scrolling");
    },
    toggleSignup() {
      this.showModal.isSignUp = true;
      document.querySelector("body").classList.toggle("disable-scrolling");
    },
    closeModal() {
      this.showModal.isSignUp = false;
      this.showModal.isLogin = false;
      document.body.classList.toggle("disable-scrolling");
    },

    unstickNavbar() {
      this.isShowNavbar = true;
      this.isShowCategories = true;
      this.isShowNavSearch = true;
      this.logoColorState = false;
      this.linkColorState = false;
    },

    stickNavbar() {
      this.isShowNavbar = false;
      this.isShowCategories = false;
      this.isShowNavSearch = false;
      this.logoColorState = true;
      this.linkColorState = false;
    },

    onScroll() {
      if (window.scrollY < 5) {
        this.isShowNavbar = false;
        this.logoColorState = true;
        this.linkColorState = true;
      }
      if (window.scrollY > 10) {
        this.linkColorState = false;
        this.isShowNavbar = true;
        this.logoColorState = false;
      }

      if (window.scrollY < 200) {
        this.isShowCategories = false;
        this.isShowNavSearch = false;
      }
      if (window.scrollY > 200) {
        this.isShowNavSearch = true;
        this.isShowCategories = true;
      }
    },

    onSignOut() {
      this.$store.mutation;
    },
  },

  mounted() {},

  watch: {
    $route: {
      handler({ path, name }) {
        this.isHomePage = path === "/";
        if (!this.isHomePage) {
          removeEventListener("scroll", this.onScroll);
          this.unstickNavbar();
        } else {
          window.addEventListener("scroll", this.onScroll);
          this.stickNavbar();
        }
        if (name === "gig-details") this.isGigDetailsPage = true;
        else this.isGigDetailsPage = false;
      },
    },
    showModal: {
      handler({ isLogin }) {
        console.log("login state changed", isLogin);
      },
    },
  },

  computed: {
    categoriesToShow() {
      if (!this.inputLine) return false;

      const regex = new RegExp(this.inputLine, "i");
      return this.categories.filter(({ name }) => regex.test(name));
    },
    toggleCategoriesMenu() {
      return {
        opacity: this.isShowCategories ? 1 : 0,
        transform: this.isShowCategories ? "rotateX(0deg)" : "rotateX(90deg)",
      };
    },
    onShowNavbar() {
      return {
        "header-transparent": this.isShowNavbar === false,
      };
    },

    getLoggedinAvatar() {
      return {
        backgroundImage: this.loggedinUser
          ? 'url("' + this.loggedinUser.imgUrl + '")'
          : "",
        backgroundColor: this.loggedinUser ? "#00000" : "#fff",
      };
    },
  },
};
</script>
