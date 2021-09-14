<template>
  <div class="pizza-card">
    <img
      class="pizza-card__img"
      :src="require('@/assets/images/pizzas/' + pizza.img)"
      alt="pizza"
    />
    <h3 class="pizza-card__name">{{ pizza.name }}</h3>
    <div class="pizza-card__ui">
      <div class="pizza-card__types">
        <div
          v-for="(key, idx) of Object.keys(pizza.thickness)"
          :key="idx"
          @click="changeTickness(key)"
          class="pizza-card__select-btn"
          :class="{
            'pizza-card__select-btn_active': key === selectedThickness,
          }"
        >
          {{ pizzaThickness[key] }}
        </div>
      </div>
      <div class="pizza-card__sizes">
        <div
          v-for="(key, idx) of Object.keys(pizza.sizes)"
          :key="idx"
          @click="changeSize(Number(key))"
          class="pizza-card__select-btn"
          :class="{
            'pizza-card__select-btn_active': Number(key) === selectedSize,
          }"
        >
          {{ key }} см.
        </div>
      </div>
    </div>
    <div class="pizza-card__price">от {{ price }} ₽</div>
    <button class="pizza-card__add-btn" @click="addPizzaToBasket">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      Добавить
      <div v-if="quantityInBasket" class="pizza-card__quantity">
        {{ quantityInBasket }}
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import IPizza from "@/interfaces/Pizza";
import IPizzaThickness from "@/interfaces/PizzaThickness";
import IPizzaSizes from "@/interfaces/PizzaSizes";
import IPizzaTypesName from "@/interfaces/PizzaTypesName";
import IBasketPizza from "@/interfaces/BasketPizza";

export default Vue.extend({
  props: {
    id: Number,
  },
  data: () => ({
    pizzaThickness: {
      thin: "тонкий",
      traditional: "традиционный",
    } as IPizzaTypesName,
    selectedThickness: "" as keyof IPizzaThickness,
    selectedSize: 0 as keyof IPizzaSizes,
  }),
  mounted(): void {
    // defaut selected from ui
    this.selectedThickness = "thin";
    this.selectedSize = 26;
  },
  methods: {
    changeTickness(thickness: keyof IPizzaThickness): void {
      this.selectedThickness = thickness;
    },
    changeSize(size: keyof IPizzaSizes): void {
      this.selectedSize = size;
    },
    addPizzaToBasket(): void {
      this.$store.commit("basket/addPizza", {
        id: this.pizza.id,
        thickness: this.selectedThickness,
        size: this.selectedSize,
      } as IBasketPizza);
    },
  },
  computed: {
    pizza(): IPizza {
      return this.$store.getters.getPizzas.find(
        (pizza: IPizza) => pizza.id === this.id
      );
    },
    price(): number {
      const pizza = this.pizza;

      return (
        pizza.price +
        pizza.thickness[this.selectedThickness] +
        pizza.sizes[this.selectedSize]
      );
    },
    quantityInBasket(): number {
      const quantity: number = this.$store.getters["basket/getBasket"].reduce(
        (acc: number, curr: IBasketPizza): number => {
          if (
            curr.id === this.id &&
            this.selectedThickness === curr.thickness &&
            this.selectedSize === curr.size
          )
            return acc + 1;

          return acc;
        },
        0
      );

      return quantity;
    },
  },
});
</script>

<style lang="scss" scoped>
.pizza-card {
  max-width: 280px;

  margin-top: 35px;
  margin-right: 35px;

  &__img {
    position: relative;
    bottom: 0;

    cursor: pointer;

    -webkit-transition: linear 0.1s;
    -o-transition: linear 0.1s;
    transition: linear 0.1s;

    &:hover {
      bottom: 3px;
    }
  }

  &__name {
    font-weight: 800;
    font-size: 20px;

    text-align: center;
  }

  &__ui {
    margin-top: 20px;
    padding: 7px;

    border-radius: 10px;

    background-color: #f3f3f3;
  }

  &__types {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  &__sizes {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    margin-top: 7px;
  }

  &__select-btn {
    width: 100%;

    text-align: center;
    font-weight: 700;
    font-size: 14px;

    margin-right: 5px;
    padding: 13px;

    border-radius: 5px;

    cursor: pointer;

    -webkit-transition: linear 0.2s;
    -o-transition: linear 0.2s;
    transition: linear 0.2s;

    &:last-child {
      margin-right: 0;
    }

    &_active {
      background-color: #fff;
    }
  }

  &__price {
    font-weight: 700;
    font-size: 22px;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    margin-top: 17px;
  }

  &__add-btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    width: 100%;
    height: 40px;

    font-weight: 700;
    font-size: 16px;

    outline: none;
    border: 1px solid #eb5a1e;
    border-radius: 30px;

    color: #eb5a1e;
    background-color: #fff;

    margin-top: 17px;
    padding: 10px 15px;

    cursor: pointer;

    -webkit-transition: linear 0.3s;
    -o-transition: linear 0.3s;
    transition: linear 0.3s;

    svg {
      margin-right: 8px;
    }

    svg path {
      fill: #eb5a1e;

      -webkit-transition: linear 0.3s;
      -o-transition: linear 0.3s;
      transition: linear 0.3s;
    }

    &:hover {
      color: #fff;
      background-color: #eb5a1e;

      svg path {
        fill: #fff;
      }

      .pizza-card__quantity {
        color: #eb5a1e;
        background-color: #fff;
      }
    }
  }

  &__quantity {
    font-weight: 700;
    font-size: 16px;

    height: 22px;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    -webkit-transition: linear 0.3s;
    -o-transition: linear 0.3s;
    transition: linear 0.3s;

    padding: 0 8px;

    color: #fff;
    background-color: #eb5a1e;

    border-radius: 12px;

    margin-left: 8px;
  }
}
</style>
