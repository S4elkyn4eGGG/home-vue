import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { firstState } from '@/store/modules/SMain';
import { RootState } from '@/types';

Vue.use(Vuex);

const store: StoreOptions<any> = {
  state: {},
  modules: {
    firstState,
  },
  mutations: {},
  actions: {},
  getters: {},
};

export default new Vuex.Store<RootState>(store);
