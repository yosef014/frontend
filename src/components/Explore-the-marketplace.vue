<template>
  <section class="Explore-the-marketplace max-width-container">
    <div class="main-categories">
      <h2>Explore The Marketplace</h2>
      <ul class="categories-list">
        <li v-for="icon in icons" :key="icon">
          <a>
            <img :src="icon.url" alt="" />
            {{ icon.name }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Explore-market",
  data() {
    return {
      icons: [
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg",
          name: "Music & Audio",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg",
          name: "Video & Animation",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg",
          name: "Writing & Translation",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg",
          name: "Digital Marketing",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
          name: "Programming & Tech",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg",
          name: "Business",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg",
          name: "Lifestyle",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg",
          name: "Data",
        },
        {
          url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg",
          name: "Graphics & Design",
        },
      ],
    };
  },
};
</script>

<style></style>
