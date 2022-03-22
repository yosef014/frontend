import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import gigList from '../views/gigs-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/gig',
      name: 'gig',
      component: gigList
    },
  ]
})

export default router
