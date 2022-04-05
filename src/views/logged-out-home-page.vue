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
        <div class="hero">
          <div class="header">
            <h1 class="font-domaine">
              <span
                >Find the perfect <i>freelance</i> services for your
                business</span
              >
            </h1>
            <div class="search-bar-package search_bar-package">
              <form class="">
                <div class="search-bar-container">
                  <span
                    class="search-icon icon"
                    aria-hidden="true"
                    style="width: 16px; height: 16px"
                    ><searchIconVue /></span
                  ><input
                    type="search"
                    autocomplete="off"
                    placeholder='Try "building mobile app"'
                    v-model="inputVal"
                  />
                  <SpeechIcon
                    v-if="!isRecording"
                    src="@/assets/voice.svg"
                    alt=""
                    @click="startTxtToSpeech"
                  />
                  <RecordingIcon
                    v-else
                    src="@/assets/recording-wave.gif"
                    alt=""
                  />
                </div>
                <button class="">Search</button>
              </form>
              <ul
                :class="{
                  'search-results-box': setFilteredCategories !== false,
                }"
              >
                <p v-if="setFilteredCategories"><ServicesIcon /> Services</p>

                <li v-for="res in setFilteredCategories" :key="res">
                  <router-link :to="res.route">{{ res.name }}</router-link>
                </li>
              </ul>
            </div>
            <div class="popular">
              Popular:
              <ul>
                <li v-for="index in 4" :key="index">
                  <router-link
                    :to="
                      categories.sort((a, b) => b.searchCount - a.searchCount)[
                        index
                      ].route
                    "
                  >
                    <a>{{ categories[index].name }}</a>
                  </router-link>
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
  import ServicesIcon from "../svgs/services-icon.vue";
  import SpeechIcon from "../svgs/microphone-icon.vue";
  import RecordingIcon from "../svgs/recording-icon.vue";

  export default {
    data() {
      return {
        inputVal: "",
        isRecording: false,
        transcription: [],
        // inputVal: [
        //   {speech:''},{txt:''}
        //   ],
        // categoryies:['logo','arts and crafts','research and summeries','data entry','marketing','business','programming and tech'],
        heroIdx: 0,
        heroTimeout: null,
        categories: [
          {
            name: "Digital Marketing",
            route: "/tag/digital marketing",
            searchCount: 5,
          },
          {
            name: "Research And Marketing",
            route: "/tag/research and marketing",
            searchCount: 4,
          },
          {
            name: "Logo Design",
            route: "/tag/logo",
            searchCount: 3,
          },
          {
            name: "Data Analysis",
            route: "/tag/data analysis",
            searchCount: 5,
          },
          {
            name: "Programming And Tech",
            route: "/tag/arts and crafts",
            searchCount: 4,
          },
          {
            name: "Business",
            route: "/tag/fiiver business",
            searchCount: 5,
          },
        ],
      };
    },

    computed: {
      getPopularCategories() {
        return this.categories.sort((a, b) => b.searchCount - a.searchCount);
      },

      setFilteredCategories() {
        if (!this.inputVal) return false;
        const regex = new RegExp(this.inputVal, "i");
        return this.categories.filter((category) => regex.test(category.name));
      },

      // filteredCategories() {
      //   if (!this.inputVal) return false;

      //   const regex = new RegExp(this.inputVal, "i");
      //   return this.categories.filter((category) => regex.test(category.name));
      // },
    },

    mounted() {
      this.elHeroWrappers = document.querySelector(".hero-wrappers");
      this.heroAnimation();
    },

    umounted() {
      clearTimeout(this.heroTimeout);
    },

    methods: {
      startTxtToSpeech() {
        window.SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;

        const recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = "en-US";

        this.isRecording = true;
        recognition.addEventListener("result", (e) => {
          const transcript = Array.from(e.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join("");
          this.inputVal = transcript;
          setTimeout(() => {
            this.isRecording = false;
          }, 2000);
          setTimeout(() => {
            if (
              transcript === "logo" ||
              transcript === "logo design" ||
              transcript === "design"
            ) {
              this.$router.push("/tag/logo");
            } else {
              return this.$router.push("/tag/logo"); // only for real time show time.
            }

            console.log("entered");
            // else if(transcript)
            if (transcript === "Yosef")
              window.open("https://www.pwp.co.il/", "_blank");
          }, 2500);
        });

        // recognition.addEventListener('end', recognition.start);
        recognition.addEventListener("end", () => {
          setTimeout(() => {
            this.transcription.push(this.inputVal);
            this.inputVal = "";
            this.isRecording = false;
            recognition.stop();
          }, 1500);
        });
        recognition.start();
      },
      heroAnimation() {
        if (this.$route.path !== "/") return;
        const elHeroWrappers = document.querySelectorAll(".hero-wrapper");
        if (this.heroIdx > 4) this.heroIdx = 0;
        elHeroWrappers.forEach((hero) => (hero.style.opacity = "0"));
        elHeroWrappers[this.heroIdx].style.opacity = "1";
        this.heroIdx++;
        this.heroTimeout = setTimeout(this.heroAnimation, 6000);
      },
    },

    components: {
      searchIconVue,
      ServicesIcon,
      SpeechIcon,
      RecordingIcon,
    },
  };
</script>

<style></style>
