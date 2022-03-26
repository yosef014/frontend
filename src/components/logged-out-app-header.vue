<template>
  <div
    :style="{ position: isHomePage ? 'fixed' : 'absolute' }"
    :class="onShowNavbar"
    class="logged-out-nav-container"
  >
    <div v-if="showModal.isLogin">
      <Login />
    </div>
    <div v-if="showModal.isSignUp">
      <SignUp />
    </div>
    <div class="logged-out-nav max-width-container">
      <router-link to="/">
        <FiiverrLogo
          class="logo"
          :style="{ fill: logoColorState ? '#fff' : '#404145' }"
        ></FiiverrLogo>
      </router-link>
      <div :class="toggleCatagoriesMenu" class="nav-search">
        <searchIconVue />
        <input type="text" placeholder="Find Services" />
        <button @click="toggleLogin">Search</button>
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
              <a class="nav-link" @click="toggleLogin">Sign Up</a>
            </a>
          </li>
          <li>
            <a>
              <a :class="{ 'login-active': showModal.isLogin || showModal.isSignUp }" class="join" @click="toggleLogin">Join</a>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      :class="toggleCatagoriesMenu"
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
import { remove } from "@vue/shared";
import Login from "./login.vue";
import SignUp from "./sign-up.vue";
import { useDeprecateAppendToBody } from "element-plus";
export default {
  components: {
    fiiverrLogoVue,
    Login,
    SignUp,
  },
  data() {
    return {
      showModal: {
        isLogin: false,
        isSignUp: false,
      },
      isHomePage: true,
      isGigDetailsPage: false,
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
      navLinks: [
        {
          name: "Fiiverr Business",
          route: "fiiver business",
          class: "nav-link business-link",
        },
        {
          name: "Explore",
          route: "explore",
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
    toggleLogin() {
      this.showModal.isLogin = !this.showModal.isLogin;    
      document.querySelector('body').classList.toggle('disable-scrolling')
  
      console.log("🚀 ~ file: logged-out-app-header.vue ~ line 149 ~ toggleLogin ~ this.showModal.isLogin", this.showModal.isLogin)
    },
    toggleSignUp() {
      this.showModal.isSignUp = !this.showModal.isSignUp; 
      document.querySelector('body').classList.toggle('disable-scrolling')
    },

    unstickNavbar() {
      this.isShowNavbar = true;
      this.isShowCatagories = true;
      this.isShowNavSearch = true;
      this.logoColorState = false;
      this.linkColorState = false;
    },

    stickNavbar() {
      this.isShowNavbar = false;
      this.isShowCatagories = false;
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
  },

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
        if (name === 'gig-details') this.isGigDetailsPage = true
        else this.isGigDetailsPage = false
      },
    },
    showModal: {
      handler({isLogin}) {
        console.log('login state changed',isLogin);

      }
    }
    
  },

  computed: {
    onShowNavbar() {
      return {
        "header-transparent": this.isShowNavbar === false,
      };
    },

    toggleCatagoriesMenu() {
      return {"menu-package-open": this.isShowCatagories === true}
    },

    // isModalOpen() {
    //   return {"blurred-body": this.showModal.isLogin || this.showModal.isSignUp}
    // }
    // setLinkColor() {
    //   return { color: linkColorState ? "#fff" : "#1E1692" };
    // },
  },

  components: {
    searchIconVue,
    FiiverrLogo,
    Login,
    SignUp,
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
