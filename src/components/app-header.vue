<template>
  <div
    @click="toggleMenu"
    class="side-menu-container"
    :class="isMenuOpen ? 'show-side-menu' : 'hide-side-menu'"
  >
    <nav>
      <li v-if="loggedinUser" class="profile-avatar">
        <router-link to="/seller">
          <div class="user-avatar">
            <img
              class="logged-user-avatar"
              :src="loggedinUser.imgUrl"
              @click="routeToProfile"
            />
            <a
              class="notification-indicator"
              :style="{
                backgroundColor: isGotNotification ? 'orange' : 'rgba(0,0,0,0)',
              }"
              >{{ newMsgCount }}</a
            >
          </div>
          <div class="user-info">
            <span>{{ loggedinUser.username }}</span>
            <span v-if="newMsgCount > 0">{{ newMsgCount }} New Messages</span>
            <span v-else>No New Messages</span>
          </div>
        </router-link>
      </li>
      <li v-if="!loggedinUser" @click="toggleSignup" class="join">Sign Up</li>
      <li v-if="!loggedinUser" @click="toggleLogin">Sign In</li>
      <!-- <li v-if="loggedinUser"><a class="join">Sign Out</a></li> -->
      <li>Become A Seller</li>
      <router-link to="/tag">
        <li>Explore</li>
      </router-link>
    </nav>
    <div class="toggle-menu"></div>
  </div>
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
      <span
        @click="toggleMenu"
        v-if="isMobileDisplay"
        :style="toggleColor"
        class="hamburger-menu"
        ><HamburgerMenuIcon />
      </span>
      <router-link class="logo" to="/">
        <FiiverrLogo
          :style="{ fill: logoColorState ? '#fff' : '#404145' }"
        ></FiiverrLogo>
      </router-link>
      <div
        v-if="!isMobileDisplay"
        :style="{ opacity: isShowNavSearch ? 1 : 0 }"
        class="nav-search"
      >
        <searchIconVue />
        <ul
          :class="{ 'search-results-box': categoriesToShow !== false }"
          class="nav-search-results-box"
          v-if="categoriesToShow"
        >
          <h3>Services</h3>
          <li v-for="res in categoriesToShow" :key="res">
            <router-link :to="'/tag/' + res.path">
              <a>{{ res.name }}</a>
            </router-link>
          </li>
        </ul>
        <input type="text" placeholder="Find Services" v-model="inputVal" />
        <button>Search</button>
      </div>
      <div v-if="!isMobileDisplay" class="link-list">
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
          <li v-if="!loggedinUser">
            <a>
              <a
                :class="{ 'login-active': showModal.isLogin === true }"
                class="nav-link"
                @click="toggleLogin"
                v-if="!loggedinUser"
                >Sign In</a
              >
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
                  <span
                    class="notification-indicator"
                    :style="{
                      backgroundColor: isGotNotification
                        ? 'rgb(207, 13, 13)'
                        : 'rgba(0,0,0,0)',
                    }"
                    >{{ newMsgCount }}</span
                  >
                </router-link>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="isMobileDisplay"
      :style="toggleCategoriesMenu"
      class="mobile-search-bar-container"
    >
      <SearchIcon class="search-icon" />
      <input placeholder="Search" class="mobile-search-bar" type="text" />
    </div>
    <div
      v-if="!isMobileDisplay"
      :style="toggleCategoriesMenu"
      class="categories-menu-package"
    >
      <ul class="max-width-container">
        <li v-for="category in categories" :key="category.name">
          <router-link :to="'/tag/' + category.path">
            <a>{{ category.name }}</a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
import searchIconVue from "../svgs/search-icon.vue";
import FiiverrLogo from "../svgs/fiiverr-logo.vue";
import { remove } from "@vue/shared";
import Login from "./login.vue";
import SignUp from "./sign-up.vue";
import HamburgerMenuIcon from "../svgs/hamburger-menu-icon.vue";
import { useDeprecateAppendToBody } from "element-plus";
import SearchIcon from "../svgs/search-icon.vue";
export default {
  components: {
    searchIconVue,
    FiiverrLogo,
    Login,
    SignUp,
    HamburgerMenuIcon,
    SearchIcon,
  },
  data() {
    return {
      newMsgCount: 0,
      inputVal: "",
      windowWidth: window.innerWidth,
      loggedinUser: this.$store.getters.loggedinUser,
      isMenuOpen: false,
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
      isMenuOpen: false,
      categories: [
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
      ],
    };
  },

  methods: {
    categoryChosen(res) {
      this.inputVal = res;
      this.$router.push("/tag" + "/" + res);
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.querySelector("body").classList.toggle("disable-scrolling");
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
      this.inputVal = "";
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
        this.inputVal = "";
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
    orderAddedNotefication(ownerOrder) {
      ElNotification({
        title: "New Order Added!",
        message: `New Pending Order Has Been Added In Seller Control`,
        type: "success",
        position: "bottom-right",
      });
      this.$store.dispatch({ type: "loadOrders" });
    },
    orderStatusChanged(status) {
      this.$store.dispatch({ type: "loadOrders" });
      console.log("socket works");
      ElNotification({
        title: "Your Order Status Changed",
        message: `Status Changed To ${status}`,
        type: "success",
        position: "bottom-right",
      });
    },
  },

  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },

  watch: {
    $route: {
      handler({ path, name }) {
        window.scrollTo(0, 0);
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
      if (!this.inputVal) return false;

      const regex = new RegExp(this.inputVal, "i");
      return this.categories.filter((category) => regex.test(category.name));
    },
    toggleCategoriesMenu() {
      return {
        opacity: this.isShowCategories ? 1 : 0,
        transform: this.isShowCategories ? "rotateX(0deg)" : "rotateX(90deg)",
      };
    },

    toggleColor() {
      return { fill: this.isShowNavbar ? "#000" : "#fff" };
    },

    isLoading() {
      this.$store.getters.isLoading;
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

    isMobileDisplay() {
      return this.windowWidth < 800;
    },
    isGotNotification() {
      const logedUser = this.$store.getters.loggedinUser;
      if (!logedUser) return false;
      let orders = this.$store.getters.orders;
      orders = orders.filter((order) => {
        return order.seller?._id == logedUser._id;
      });
      this.newMsgCount = 0;
      let isPending = false;
      orders.forEach((order) => {
        if (order.status == "Pending") {
          isPending = true;
          this.newMsgCount++;
        }
      });
      if (this.newMsgCount == 0) {
        this.newMsgCount = " ";
      }
      return isPending;
    },
  },
  created() {
    socketService.on("Notefication orderAdded", this.orderAddedNotefication);
    socketService.on("Notefication statusChanged", this.orderStatusChanged);
  },
  destroyed() {
    socketService.off("Notefication orderAdded", this.orderAddedNotefication);
    socketService.off("Notefication statusChanged", this.orderStatusChanged);
  },
};
</script>
