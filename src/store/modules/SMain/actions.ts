import {ActionTree, Action} from 'vuex';
import {RootState} from '@/types';
import {IMain} from './model';

export interface ActionTree<S, R> {
  [key: string]: Action<S, R>;
}

export const actions: ActionTree<IMain, RootState> = {};
