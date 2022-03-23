// import { toyService } from '../../services/toy-service'
import { gigService } from "../../services/gig-service";

export default {
  state: {
    gigs: [],
    isHomePage: false
  },
  getters: {
    gigs({ gigs }) {
      return gigs;
    },
    isHomePage({ isHomePage }) {
      return isHomePage;
    },
  },
  mutations: {
    setGigs(state, { gigs }) {
      state.gigs = gigs;
    },
    isHomePage(state, { isHome }) {
      state.isHomePage = isHome;
    },
  },
  actions: {
    loadGigs({ commit, state }) {
     const gigs = gigService.query();
      commit({ type: "setGigs" ,gigs});
    },
    setPage({ commit, state },{isHome}) {
      commit({ type: "isHomePage" ,isHome});
    },
    
  
  },
};
