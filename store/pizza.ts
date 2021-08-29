import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "@/store";

export const state = () => ({
  pizzas: [],
});

export type AnotherModuleState = ReturnType<typeof state>;

export const getters: GetterTree<AnotherModuleState, RootState> = {};

export const actions: ActionTree<AnotherModuleState, RootState> = {};

export const mutations: MutationTree<AnotherModuleState> = {};
