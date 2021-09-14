import { GetterTree, MutationTree } from "vuex";
import { RootState } from "@/store";

import IBasketPizza from "@/interfaces/BasketPizza";

export const state = () => ({
  basket: [] as Array<IBasketPizza>,
});

export type AnotherModuleState = ReturnType<typeof state>;

export const mutations: MutationTree<AnotherModuleState> = {
  addPizza(state, pizza: IBasketPizza): void {
    state.basket.push(pizza);
  },
};

export const getters: GetterTree<AnotherModuleState, RootState> = {
  getBasket: ({ basket }): Array<IBasketPizza> => basket,
};
