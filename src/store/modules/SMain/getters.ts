import { GetterTree, Getter } from 'vuex';
import { IMain } from './model';
import { RootState } from '@/types';
import { state } from './index';

export interface GetterTree<S, R> {
  [key: string]: Getter<S, R>;
}

export const getters: GetterTree<IMain, RootState> = {};
