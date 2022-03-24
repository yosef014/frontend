<template>
  <div>
    
    <div class="breadcrumbs">
     <span @click="this.$router.push('/')" > FIVERR</span> > 
     <span @click="this.$router.push('/tag')">TAGS</span> >
     <span> {{  breadcrumbsToShow.toUpperCase() }} </span>>
      <h1>{{ breadcrumbsToShow }}</h1>
      {{ gigsToShow.length }} services available
    </div>
    <gigTabsCarousel></gigTabsCarousel>

    <div class="gig-filters">filters</div>
    <ul class="gig-list grid">
      <li v-for="gig in gigsToShow" :key="gig._id">
        <gigsPreview :gig="gig" />
      </li>
    </ul>
<!-- <pre>   {{taggss}}
</pre> -->
   </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import gigsPreview from "../components/gigs-preview.vue";
import gigTabsCarousel from "../components/gigs-tabs-carousel.vue";
import LoggedOutNavbar from "../components/logged-out-app-header.vue";

export default {
  data() {
    return {};
  },
  components: {
    gigTabsCarousel,
    gigsPreview,
    Carousel,
    Slide,
    Navigation,
    LoggedOutNavbar,
  },
  async created() {},
  computed: {
    gigs() {
      return this.$store.getters.gigs;
    },
    gigsToShow() {
      const category = this.$route.params.gig;
      if (!category) return this.gigs;
      // const gigsToDisplay = this.gigs.filter((gig) => gig.category == category);
      const gigsToDisplay = this.gigs.filter((gig) => {
      return gig.category.some((tab) => category.includes(tab))
    })
      return gigsToDisplay;
    },
    breadcrumbsToShow(){
      if (this.$route.params.gig) return this.$route.params.gig
      return "all gigs"

    },
     trttt() {
      let lest = JSON.parse(JSON.stringify(this.gigs));

      const newdb = lest.map((gigg) => {
        let nweUrls = [this.getRandomImg(),this.getRandomImg(),this.getRandomImg(),this.getRandomImg()];
         gigg.productImgs = nweUrls;
         return gigg

      });
      return newdb;
    },
     taggss() {
      let lest = JSON.parse(JSON.stringify(this.gigs));

      const newdb = lest.map((gigg) => {
        let nweTags = [this.getRandomTag(),this.getRandomTag(),this.getRandomTag()];
         gigg.category = nweTags;
         return gigg

      });
      return newdb;
    },
  },
   methods: {
      getRandomTag() {
      const tags = [
       "logo","arts and crafts","data entry","logo","marketing","research and summeries"
      ];
      const random = Math.floor(Math.random() * tags.length);
      return (random, tags[random]);
    },
    getRandomImg() {
      const imgsUrls = [
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123518981/original/6b57c2c591ff0513ab3ca5bedaba7107114ff831/design-a-professional-signature-logo-in-24hrs.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/907e9cc6a0dfc3023841f8c061af2d40-1612374611/Rig-Tours-10.jpg",
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/123518981/original/110019e76de514a1dd1984d234c9fd477efd1e77/design-a-professional-signature-logo-in-24hrs.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/36656035/original/86cf6e21b116b7a0606964358913d91f41d6bbfd.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/621340/original/a5624b7fbe6e0ec37e94894fd3ea68251a0fae5c.png",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132488260/original/955d6d66789bd57075f25da7de2b3a4233b2e26a.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/187680580/original/e03cbfb4c19b84d78b748678e1a917758d58b81a.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145155138/original/fb51086fd4e7fe74fe60f72015f07f3311224e14.png",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127942188/original/14b2092c5fa6b50f36a0c97615b7b29779b23a5b.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/103837432/original/9943dc7e5846e8fa3befd5b90b60dcf4f11bac7c.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/194009784/original/5d2ce9be504e32084e203aaf20151469c65107b3.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/756993/original/25cb6cee0b0a3b28d3650b13b1dd6de4956e28c5.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/170694345/original/df363e7ac460d550b06dbaa484a60e72a53dd227.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/91164/original/7a37b6aeebd243f148e71ed76bd8120e88155471.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/32027980/original/afa3c1b5d7f58cee3c0c8c0639a5237075e565b9.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/102582299/original/c3400f801a79e51105e33c0a65a6d850ec2ea3a0.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/103068639/original/6fc1138155083b9ffc1e14be3bb8e7036bee0356.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/162295509/original/81ad3690b23118c3da1461f15dfbb3046f0dcb3d.png",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/146428100/original/43a4e8ca36aee84bd3e2d9388f8e31f1adf3366e.png",
        "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/k6gayzavecij4zskucom.png",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/4259374/original/9338a69d06a32a6434c3a493258eca38ad2611f0.png",
        "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/yan7cajqzb88t9yjbgdi.png",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/99066472/original/3d22deef9c60a97ff3acee145f22d5d077a16aa0.png",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/85010751/original/e98fcdc7ab0538c8381eb99887b64dbe42a93caf.png",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/99365338/original/cf8a3d6811de78361dd1bd896d10712ce97fd6f1.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125591662/original/8fe883adb620795bf7808202a13dc25525875109.png",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/68213576/original/175585d6eb852131867449d113e2c4ed75e67a13.png",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/68762796/original/3e060210316e42972fbe0b478a67f315d3263a64.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/6140105/original/8bd93aca256ce30d7c73209105b50e12b247f404.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/104176703/original/1e4f1323093a63a2beb0cc1ea4388fab6333799a.png",
      ];
      const random = Math.floor(Math.random() * imgsUrls.length);
      return (random, imgsUrls[random]);
    },
  },
};
</script>
