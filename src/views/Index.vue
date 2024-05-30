<template>
  <main class="home">
    <pizza-sort-by-type :pizza-types="pizzaTypes" />
    <div class="home__top">
      <h1 class="home__title">Все пиццы</h1>
      <pizza-sort-by-properties :pizza-sort-properties="pizzaSortProperties" />
    </div>
    <section class="home__pizzas">
      <template v-if="pizzas.length">
        <pizza-card
          v-for="pizza of sortedPizzas"
          :key="pizza.id"
          :id="pizza.id"
        />
      </template>
      <div class="home__loading" v-else>
        <app-loading />
      </div>
    </section>
  </main>
</template>

<script>
  import AppLoading from "../components/AppLoading.vue";
  import PizzaSortByType from "../components/PizzaSortByType.vue";
  import PizzaSortByProperties from "../components/PizzaSortByProperties.vue";
  import PizzaCard from "../components/PizzaCard.vue";

  export default {
    components: {
      AppLoading,
      PizzaSortByType,
      PizzaSortByProperties,
      PizzaCard,
    },
    data: () => ({
      pizzaTypes: [
        { name: "all", value: "Все" },
        { name: "meet", value: "Мясные" },
        { name: "vegetarian", value: "Вегетарианские" },
        { name: "grill", value: "Гриль" },
        { name: "sharp", value: "Острые" },
        { name: "closed", value: "Закрытые" },
      ],
      pizzaSortProperties: [
        { name: "popularity", value: "популярности" },
        { name: "price", value: "цене" },
        { name: "alphabet", value: "алфавиту" },
      ],
    }),
    mounted() {
      this.$store.dispatch("app/fetchPizzas");
    },
    computed: {
      pizzas() {
        return this.$store.getters["app/getPizzas"];
      },
      sortedPizzas() {
        let pizzas = [...this.pizzas];
        const selectedType = this.$store.getters["app/getSelectedType"];
        const selectedSortProperty =
          this.$store.getters["app/getSelectedSortProperty"];

        if (selectedType !== "all") {
          pizzas = pizzas.filter((pizza) =>
            pizza.types.some((type) => type === selectedType)
          );
        }

        return pizzas.sort((a, b) => {
          switch (selectedSortProperty) {
            case "popularity":
              return b.popularity - a.popularity;
            case "price":
              return b.price - a.price;
            case "alphabet":
              if (b.name > a.name) return -1;
          }
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .home {
    &__top {
      margin-top: 40px;

      display: flex;
      justify-content: space-between;
    }

    &__title {
      font-weight: 700;
      font-size: 32px;
    }

    &__pizzas {
      display: flex;
      flex-wrap: wrap;
    }

    &__loading {
      width: 100%;

      margin-top: 60px;

      display: flex;
      justify-content: center;
    }
  }
</style>
