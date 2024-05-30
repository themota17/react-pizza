export default {
  namespaced: true,
  state: {
    basket: [],
  },
  mutations: {
    addPizza(state, pizza) {
      state.basket.push(pizza);
    },
    cleanBasket(state) {
      state.basket = [];
    },
    removePizzaWithIdx(state, idx) {
      state.basket = state.basket.filter(
        (basketPizza) => idx !== state.basket.indexOf(basketPizza)
      );
    },
  },
  getters: {
    getBasket: (state) => state.basket,
  },
};
