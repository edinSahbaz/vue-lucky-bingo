import Vue from "vue";
import Vuex from "vuex";
import timerModule from "./modules/timerModule";
import combinationModule from "./modules/combinationModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    timerModule,
    combinationModule
  }
});
