<template>
  <div class="logged-out-homepage-container">
    <div class="logged-out-homepage">
      <div class="hero-wrapper-container">
      <div class="hero-backgrounds">
        <div class="hero-wrapper hero-andrea">
          <div class="seller-name max-width-container">
            <p>
              Andrea,
              <b>Fashion Designer</b>
            </p>
          </div>
        </div>
        <div class="hero-wrapper hero-moon">
          <div class="seller-name max-width-container">
            <p>
              Moon,
              <b>Marketing Expert</b>
            </p>
          </div>
        </div>
        <div class="hero-wrapper hero-ritika">
          <div class="seller-name max-width-container">
            <p>
              Ritka,
              <b>Shoemaker, and Designer</b>
            </p>
          </div>
        </div>
        <div class="hero-wrapper hero-gabrielle">
          <div class="seller-name max-width-container">
            <p>
              Gabriella,
              <b>Video Editor</b>
            </p>
          </div>
        </div>
        <div class="hero-wrapper hero-zack">
          <div class="seller-name max-width-container">
            <p>
              Zack,
              <b>Bar Owner</b>
            </p>
          </div>
        </div>
      </div>
      <div class="hero max-width-container">
      <div class="header ">
        <h1 class="font-domaine">
          <span
            >Find the perfect <i>freelance</i> services for your business</span
          >
        </h1>
        <div class="search-bar-package search_bar-package">
          <form class="">
            <span
              class="search-icon icon"
              aria-hidden="true"
              style="width: 16px; height: 16px"
              ><searchIconVue/></span
            ><input
              type="search"
              autocomplete="off"
              placeholder='Try "building mobile app"'
              value=""
            /><button
              class=""
            >
              Search
            </button>
          </form>
        </div>
        <div class="popular">
          Popular:
          <ul>
            <li>
              <a>Website Design</a>
            </li>
            <li>
              <a>WordPress</a>
            </li>
            <li>
              <a>Logo Design</a>
            </li>
            <li>
              <a>NFT Art</a>
            </li>
          </ul>
        </div>

      </div>

      </div>

      </div>
    </div>
  </div>
</template>

<script>
import searchIconVue from "../svgs/search-icon.vue";
export default {
  data() {
    return {
      heroIdx: 0,
    };
  },

  mounted() {
    this.heroAnimation();
  },

  methods: {
    heroAnimation() {
      const elHeroWrappers = document.querySelectorAll(".hero-wrapper");
      console.log(elHeroWrappers);

      if (this.heroIdx > 4) this.heroIdx = 0;
      elHeroWrappers.forEach((hero) => {
        hero.style.opacity = "0";
      });
      elHeroWrappers[this.heroIdx].style.opacity = "1";
      this.heroIdx++;
      setTimeout(this.heroAnimation, 6000);
    },
  },

  components: {
    searchIconVue,
  }
};
</script>

<style></style>
