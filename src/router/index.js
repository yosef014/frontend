import { createRouter, createWebHashHistory } from "vue-router";
import homePage from "../views/home-page.vue";
import gigList from "../views/explore-page.vue";
import gigDetails from "../views/gig-details.vue";
import userProfile from "../views/profile-page.vue";

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
    {
      path: "/tag/:gig/:id",
      name: "gig-details",
      component: gigDetails,
    },
    {
      path: '/user',
      name: "prifil-page",
      component: userProfile,
      // children: [
      //   {
      //     path: 'orders',
      //     component: sellerOrders
      //   },
      //   {
      //     path: '/user/dashboard',
      //     component: sellerDashboard
      //   },
      //   {
      //     path: '/user',
      //     component: profileTab
      //   },
      // ]
    },
  ],
});

export default router;
