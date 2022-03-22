import { createRouter, createWebHistory } from "vue-router";
import homePage from "../views/home-page.vue";
import gigDetails from "../views/gig-details.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homePage,
    },
    {
      path: "/gig/:id",
      name: "gig-details",
      component: gigDetails,
    },
  ],
});

export default router;
