import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    supportBroswer: {
      url: ["chrome", "safari", "firefox", "opera", "yandex"],
      open: ["chrome", "safari", "firefox", "opera", "yandex"],
      remove: ["chrome"],
      test: ["chrome"]
    },
    osVersion: ""
  },
  getters: {
    supportBroswer: state => state.supportBroswer,
    osVersion: state => state.osVersion
  },
  mutations: {
    updateOsVersion(state, version) {
      state.osVersion = version;
    }
  },
  actions: {}
});