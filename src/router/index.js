import { createRouter, createWebHashHistory } from "vue-router";
import homePage from "../views/home-page.vue";
import gigList from "../views/gigs-page.vue";
import gigDetails from "../views/gig-details.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homePage,
    },
    {
      path: "/tag",
      name: "tag",
      component: gigList,
    },
    {
      path: "/tag/:gig",
      name: "gig",
      component: gigList,
    },
    {
      path: "/tag/:gig/:id",
      name: "gig-details",
      component: gigDetails,
    },
  ],
});

export default router;
