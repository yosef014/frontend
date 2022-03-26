import { createRouter, createWebHashHistory } from "vue-router";
import homePage from "../views/home-page.vue";
import gigList from "../views/explore-page.vue";
import gigDetails from "../views/gig-details.vue";
import userProfile from "../views/profile-page.vue";
import gigCheckoutPage from "../views/gig-checkout-page.vue";
import gigEdit from "../views/gig-edit.vue";
import sellerPage from "../views/seller-page.vue";
import sellerOrders from "../views/seller-orders.vue";
import signUp from "@/components/sign-up.vue";

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
      path: "/signup",
      name: "signup",
      component: signUp,
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
      path: "/checkout/:id",
      name: "gig-checkout-page",
      component: gigCheckoutPage,
    },
    {
      path: "/tag/:gig/:id",
      name: "gig-details",
      component: gigDetails,
    },
    {
      path: "/seller",
      name: "seller",
      component: sellerPage,
    },
    {
      path: "/seller/edit",
      name: "gig-edit",
      component: gigEdit,
    },
    {
      path: "/seller/orders",
      name: "seller-orders",
      component: sellerOrders,
    },
    {
      path: "/user",
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
