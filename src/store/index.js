import { createStore } from "vuex";
import { gigStore } from "./modules/gig-store";
import { orderStore } from './modules/order.store'
import { userStore } from './modules/user.store'



// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    gigStore,
    orderStore,
    userStore,

  },
});

export default store;
