<template>
  <main class="home">
    <div class="wrapper">
      <pizzas-sort
        :pizza-types="pizzaTypes"
        :pizza-sort-types="pizzaSortTypes"
      />
      <h1 class="home__title">Все пиццы</h1>
      <section class="home__pizzas">
        <pizza-card
          v-for="pizza of sortedPizzas"
          :key="pizza.id"
          :id="pizza.id"
        />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

import IPizza from "@/interfaces/Pizza";
import IPizzaSortType from "@/interfaces/PizzaSortType";

export default Vue.extend({
  data: () => ({
    pizzaTypes: [
      { name: "Все", value: "all" },
      { name: "Мясные", value: "meet" },
      { name: "Вегетарианские", value: "vegetarian" },
      { name: "Гриль", value: "grill" },
      { name: "Острые", value: "sharp" },
      { name: "Закрытые", value: "closed" },
    ] as Array<IPizzaSortType>,
    pizzaSortTypes: [
      { name: "популярности", value: "popularity" },
      { name: "цене", value: "price" },
      { name: "алфавиту", value: "alphabet" },
    ] as Array<IPizzaSortType>,
  }),
  mounted(): void {
    this.$store.dispatch("fetchPizzas");
  },
  computed: {
    pizzas(): Array<IPizza> {
      return this.$store.getters.getPizzas;
    },
    sortedPizzas(): Array<IPizza> {
      const pizzas = [...this.pizzas];
      const selectedType = this.$store.getters.getSelectedType;
      const selectedSortType = this.$store.getters.getSelectedSortType;

      const sort = (a: IPizza, b: IPizza): any => {
        switch (selectedSortType) {
          case "popularity":
            return b.popularity - a.popularity;
          case "price":
            return b.price - a.price;
          case "alphabet":
            if (b.name > a.name) return -1;
        }
      };

      if (selectedType === "all") return pizzas.sort(sort);

      return pizzas
        .filter((pizza: IPizza) =>
          pizza.types.some((type) => type === selectedType)
        )
        .sort(sort);
    },
  },
});
</script>

<style lang="scss" scoped>
.home {
  &__title {
    margin-top: 32px;

    font-weight: 700;
    font-size: 32px;
  }

  &__pizzas {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
}
</style>
