import { createStore } from "vuex";
import gigModule from "./modules/gig-module";

// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    gigModule,
  },
});

export default store;
