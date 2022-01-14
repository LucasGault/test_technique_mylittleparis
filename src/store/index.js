import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pillows_number: 1,
    form: {
      optin: false,
      email: "",
      birthDate: null,
    },
  },
  mutations: {
    removePillow(state) {
      state.pillows_number--;
    },
    addPillow(state) {
      state.pillows_number++;
    },
    saveForm(state, form) {
      state.form = form;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
