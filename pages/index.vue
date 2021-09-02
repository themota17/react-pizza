<template>
  <main class="home">
    <div class="wrapper">
      <pizzas-sort :pizza-types="pizzaTypes" />
      <h1 class="home__title">Все пиццы</h1>
      <section class="home__pizzas">
        <pizza-card v-for="pizza of pizzas" :key="pizza.id" :id="pizza.id" />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

import IPizza from "@/interfaces/Pizza";

export default Vue.extend({
  data: () => ({
    selectedType: "" as string,
    pizzaTypes: [
      { name: "Все", value: "all" },
      { name: "Мясные", value: "meet" },
      { name: "Вегетарианские", value: "vegetarian" },
      { name: "Гриль", value: "grill" },
      { name: "Острые", value: "sharp" },
      { name: "Закрытые", value: "closed" },
    ],
  }),
  mounted(): void {
    this.$store.dispatch("fetchPizzas");

    this.selectedType = this.pizzaTypes[0].value;
  },
  methods: {
    changeSelectedType(e: Event, type: string) {
      this.selectedType = type;
    },
  },
  computed: {
    pizzas(): Array<IPizza> {
      return this.$store.getters.getPizzas;
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
