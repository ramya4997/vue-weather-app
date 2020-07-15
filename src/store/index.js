import Vue from "vue";
import Vuex from "vuex";
import cityStore from "./cityStore";
import weatherStore from "./weatherStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cityStore,
    weatherStore
  }
});
