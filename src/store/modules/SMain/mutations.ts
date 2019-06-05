import {MutationTree, Mutation} from 'vuex';
import {IMain} from './model';
import {state} from './index';

export interface MutationTree<S> {
  [key: string]: Mutation<S>;
}

export const mutations: MutationTree<IMain> = {};
