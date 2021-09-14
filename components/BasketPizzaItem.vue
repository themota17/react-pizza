<template>
  <div class="basket-pizza-item">
    <img
      src="@/assets/images/pizzas/1.png"
      width="80"
      height="80"
      alt="pizza"
    />
    <div class="basket-pizza-item__info">
      <div class="basket-pizza-item__main-info">
        <h2 class="basket-pizza-item__name">{{ pizza.name }}</h2>
        <div class="basket-pizza-item__data">
          <span class="basket-pizza-item__type">
            {{ pizzaFromBasket.thickness }},
          </span>
          <span class="basket-pizza-item__size">
            {{ pizzaFromBasket.size }} см.
          </span>
        </div>
      </div>
      <div class="basket-pizza-item__price">{{ price }} ₽</div>
      <div class="basket-pizza-item__remove-wrapper">
        <button
          class="basket-pizza-item__remove-btn"
          @click="removePizzaFromBasket"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7479 9.95572L9.49931 7.70712L11.7479 5.45852C12.1618 5.04459 12.1618 4.37339 11.7479 3.95946C11.334 3.54553 10.6628 3.54553 10.2488 3.95946L8.00024 6.20806L5.75164 3.95946C5.33771 3.54553 4.66651 3.54553 4.25258 3.95946C3.83865 4.37339 3.83865 5.04459 4.25258 5.45852L6.50118 7.70712L4.25258 9.95572C3.83865 10.3697 3.83865 11.0409 4.25258 11.4548C4.66651 11.8687 5.33772 11.8687 5.75164 11.4548L8.00024 9.20619L10.2488 11.4548C10.6628 11.8687 11.334 11.8687 11.7479 11.4548C12.1618 11.0409 12.1618 10.3697 11.7479 9.95572Z"
              fill="#D0D0D0"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import IPizza from "@/interfaces/Pizza";
import IBasketPizza from "@/interfaces/BasketPizza";

export default Vue.extend({
  props: {
    idx: Number,
  },
  methods: {
    removePizzaFromBasket(): void {
      this.$store.commit("basket/removePizzaWithIdx", this.idx);
    },
  },
  computed: {
    pizzaFromBasket(): IBasketPizza {
      const basket: Array<IBasketPizza> = this.$store.getters[
        "basket/getBasket"
      ];

      const pizzaFromBasket: IBasketPizza | undefined = basket.find(
        (pizza: IBasketPizza) => this.idx === basket.indexOf(pizza)
      );

      if (pizzaFromBasket) return pizzaFromBasket;
      else return {} as IBasketPizza;
    },
    pizza(): IPizza {
      const pizzaFromBasket: IBasketPizza = this.pizzaFromBasket;

      return this.$store.getters.getPizzas.find(
        (pizza: IPizza) => pizza.id === pizzaFromBasket.id
      );
    },
    price(): number {
      const pizza: IPizza = this.pizza;

      return (
        pizza.price +
        pizza.thickness[this.pizzaFromBasket.thickness] +
        pizza.sizes[this.pizzaFromBasket.size]
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.basket-pizza-item {
  padding: 30px 0 30px 0;

  border-top: 1px solid #f4f4f4;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  img {
    margin-right: 15px;
  }

  &__info {
    width: 100%;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  &__main-info {
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2;
  }

  &__name {
    font-weight: 700;
    font-size: 22px;
  }

  &__data {
    color: #8d8d8d;

    font-weight: 400;
    font-size: 18px;
  }

  &__price {
    font-weight: 700;
    font-size: 22px;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  &__remove-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  &__remove-btn {
    width: 32px;
    height: 32px;

    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    border-radius: 50%;
    border: 1px solid #d7d7d7;

    cursor: pointer;

    background: none;
  }
}
</style>
