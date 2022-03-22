// import { toyService } from '../../services/toy-service'
import { gigService } from "../../services/gig-service";

export default {
  state: {
    gigs: [],
  },
  getters: {
    gigs({ gigs }) {
      return gigs;
    },
  },
  mutations: {
    setGigs(state, { gigs }) {
      state.gigs = gigs;
    },
  },
  actions: {
    loadGigs({ commit, state }) {
      gigService.query(state.gigs);
      commit({ type: "setGigs" });
    },
  },
};
