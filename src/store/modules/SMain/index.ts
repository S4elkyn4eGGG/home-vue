import { Module } from 'vuex';
import { IMain } from './model';
import { RootState } from '@/types';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export const state: IMain = {
  main: {},
};

const namespaced: boolean = true;

export const firstState: Module<IMain, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
