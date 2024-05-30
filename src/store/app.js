export default {
  namespaced: true,
  state: () => ({
    selectedType: "all",
    selectedSortProperty: "popularity",
    pizzas: [],
  }),
  mutations: {
    changeSelectedType(state, type) {
      state.selectedType = type;
    },
    changeSelectedSortProperty(state, sortProperty) {
      state.selectedSortProperty = sortProperty;
    },
    setPizzas(state, pizzas) {
      state.pizzas = pizzas;
    },
  },
  actions: {
    fetchPizzas({ commit }) {
      setTimeout(() => {
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
            name: "Креветки по азиатски",
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
  },
  getters: {
    getSelectedType: ({ selectedType }) => selectedType,
    getSelectedSortProperty: ({ selectedSortProperty }) => selectedSortProperty,
    getPizzas: ({ pizzas }) => pizzas,
  },
};
