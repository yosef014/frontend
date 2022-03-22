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
      console.log(gigs);
      state.gigs = gigs;
    },
  },
  actions: {
    loadGigs({ commit, state }) {
     const gigs = gigService.query(state.gigs);
    //  console.log(gigs);
      commit({ type: "setGigs" ,gigs});
    },
  },
};
