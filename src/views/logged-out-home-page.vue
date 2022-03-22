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
              ><svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"
                ></path></svg></span
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
      // console.log(elHeroWrappers);

      if (this.heroIdx > 4) this.heroIdx = 0;
      elHeroWrappers.forEach((hero) => {
        hero.style.opacity = "0";
      });
      elHeroWrappers[this.heroIdx].style.opacity = "1";
      this.heroIdx++;
      setTimeout(this.heroAnimation, 6000);
    },
  },
};
</script>

<style></style>
