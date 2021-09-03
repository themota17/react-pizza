import { GetterTree, ActionTree, MutationTree } from "vuex";

import IPizza from "@/interfaces/Pizza";

export const state = () => {
  const selectedType: string = "all";
  const selectedSortType: string = "popularity";
  const pizzas: Array<IPizza> = [];

  return { selectedType, selectedSortType, pizzas };
};

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  changeSelectedType(state, type: string): void {
    state.selectedType = type;
  },
  changeSelectedSortType(state, sortType: string): void {
    state.selectedSortType = sortType;
  },
  setPizzas(state, pizzas: Array<IPizza>): void {
    state.pizzas = pizzas;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  fetchPizzas({ commit }): void {
    setTimeout((): void => {
      commit("setPizzas", [
        {
          id: 1,
          name: "Чизбургер-пицца",
          img: "1.png",
          price: 395,
          popularity: 1,
          thickness: { thin: 40, traditional: 60 },
          sizes: { 26: 40, 30: 55, 40: 62 },
          types: ["meet", "vegetarian", "sharp", "closed"],
        },
        {
          id: 2,
          name: "Сырная",
          img: "2.png",
          price: 450,
          popularity: 4,
          thickness: { thin: 40, traditional: 60 },
          sizes: { 26: 40, 30: 55, 40: 62 },
          types: ["meet", "vegetarian", "grill", "sharp"],
        },
        {
          id: 3,
          name: "Креветки по азатски",
          img: "3.png",
          price: 290,
          popularity: 6,
          thickness: { thin: 40, traditional: 60 },
          sizes: { 26: 40, 30: 55, 40: 62 },
          types: ["meet", "grill", "sharp", "closed"],
        },
        {
          id: 4,
          name: "Сырный цыпленок",
          img: "4.png",
          price: 385,
          popularity: 2,
          thickness: { thin: 40, traditional: 60 },
          sizes: { 26: 40, 30: 55, 40: 62 },
          types: ["meet", "vegetarian", "sharp", "closed"],
        },
      ]);
    }, 1200);
  },
};

export const getters: GetterTree<RootState, RootState> = {
  getSelectedType: ({ selectedType }) => selectedType,
  getSelectedSortType: ({ selectedSortType }) => selectedSortType,
  getPizzas: ({ pizzas }) => pizzas,
};
