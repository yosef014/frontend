import { createStore } from "vuex";
import gigModule from "./modules/gig-module";
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
    gigModule,
    orderStore,
    userStore,

  },
});

export default store;
