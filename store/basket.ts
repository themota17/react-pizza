import { GetterTree, MutationTree } from "vuex";
import { RootState } from "@/store";

import IPizza from "@/interfaces/Pizza";

export const state = () => ({
  basket: [] as Array<IPizza>,
});

export type AnotherModuleState = ReturnType<typeof state>;

export const mutations: MutationTree<AnotherModuleState> = {
  addPizza(state, pizza: IPizza): void {
    state.basket.push(pizza);
  },
};

export const getters: GetterTree<AnotherModuleState, RootState> = {
  getBasket: ({ basket }): Array<IPizza> => basket,
};
