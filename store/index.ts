import { GetterTree, ActionTree, MutationTree } from "vuex";

import IPizza from "@/interfaces/Pizza";

export const state = () => ({
  pizzas: [] as Array<IPizza>,
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  setPizzas(state, pizzas: Array<IPizza>) {
    state.pizzas = pizzas;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  fetchPizzas({ commit }): void {
    setTimeout(() => {
      commit("setPizzas", [
        {
          id: 1,
          name: "Чизбургер-пицца",
          img: "1.png",
          price: 395,
          types: { thin: 40, traditional: 60 },
          sizes: { 26: 40, 30: 55, 40: 62 },
        },
        {
          id: 2,
          name: "Сырная",
          img: "2.png",
          price: 450,
          types: { thin: 40, traditional: 60 },
          sizes: { 26: 40, 30: 55, 40: 62 },
        },
        {
          id: 3,
          name: "Креветки по азатски",
          img: "3.png",
          price: 290,
          types: { thin: 40, traditional: 60 },
          sizes: { 26: 40, 30: 55, 40: 62 },
        },
        {
          id: 4,
          name: "Сырный цыпленок",
          img: "4.png",
          price: 385,
          types: { thin: 40, traditional: 60 },
          sizes: { 26: 40, 30: 55, 40: 62 },
        },
      ]);
    }, 1200);
  },
};

export const getters: GetterTree<RootState, RootState> = {
  getPizzas: ({ pizzas }) => pizzas,
};
