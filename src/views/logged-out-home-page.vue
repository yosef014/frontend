<template>
  <div class="logged-out-homepage-container">
    <div class="logged-out-homepage">
      <div class="hero-backgrounds">
        <div class="hero-wrapper hero-andrea">
          <div class="seller-name">
            <p>
              Andrea,
              <b>Fashion Designer</b>
            </p>
          </div>
        </div>
        <div class="hero-wrapper hero-moon">
          <div class="seller-name">
            <p>
              Moon,
              <b>Marketing Expert</b>
            </p>
          </div>
        </div>
        <div class="hero-wrapper hero-ritika">
          <div class="seller-name">
            <p>
              Ritka,
              <b>Shoemaker, and Designer</b>
            </p>
          </div>
        </div>
        <div class="hero-wrapper hero-gabrielle">
          <div class="seller-name">
            <p>
              Gabriella,
              <b>Video Editor</b>
            </p>
          </div>
        </div>
        <div class="hero-wrapper hero-zack">
          <div class="seller-name">
            <p>
              Zack,
              <b>Bar Owner</b>
            </p>
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

        if (this.heroIdx > 4) this.heroIdx = 0;
        elHeroWrappers.forEach((hero) => {
          hero.style.opacity = "0";
        });
        elHeroWrappers[this.heroIdx].style.opacity = "1";
        console.log(
          "🚀 ~ file: logged-out-home-page.vue ~ line 73 ~ heroAnimation ~ elHeroWrappers[this.heroIdx].style.opacity",
          elHeroWrappers[this.heroIdx].style.opacity
        );
        this.heroIdx++;
        setTimeout(this.heroAnimation, 6000);
      },
    },
  };
</script>

<style></style>
