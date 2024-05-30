<template>
  <div class="basket-pizza-item">
    <img
      :src="require('../assets/images/pizza/1.png')"
      width="80"
      height="80"
      alt="pizza"
    />
    <div class="basket-pizza-item__info">
      <div class="basket-pizza-item__main-info">
        <h2 class="basket-pizza-item__name">{{ pizza.name }}</h2>
        <div class="basket-pizza-item__data">
          <span class="basket-pizza-item__type"> {{ typeName }}, </span>
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

<script>
  export default {
    props: {
      idx: Number,
    },
    methods: {
      removePizzaFromBasket() {
        this.$store.commit("basket/removePizzaWithIdx", this.idx);
      },
    },
    computed: {
      pizzaFromBasket() {
        const basket = this.$store.getters["basket/getBasket"];

        const pizzaFromBasket = basket.find(
          (pizza) => this.idx === basket.indexOf(pizza)
        );

        if (pizzaFromBasket) return pizzaFromBasket;
        else return {};
      },
      pizza() {
        const pizzaFromBasket = this.pizzaFromBasket;

        return this.$store.getters["app/getPizzas"].find(
          (pizza) => pizza.id === pizzaFromBasket.id
        );
      },
      price() {
        const pizza = this.pizza;

        return (
          pizza.price +
          pizza.thickness[this.pizzaFromBasket.thickness] +
          pizza.sizes[this.pizzaFromBasket.size]
        );
      },
      typeName() {
        switch (this.pizzaFromBasket.thickness) {
          case "thin":
            return "тонкое тесто";
          case "traditional":
            return "толстое тесто";
          default:
            return "";
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .basket-pizza-item {
    padding: 30px 0 30px 0;

    border-top: 1px solid #f4f4f4;

    display: flex;

    img {
      margin-right: 15px;
    }

    &__info {
      width: 100%;

      display: flex;
      justify-content: space-between;
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

      display: flex;
      justify-content: center;
      flex: 1;
    }

    &__remove-wrapper {
      display: flex;
      justify-content: flex-end;
      flex: 1;
    }

    &__remove-btn {
      width: 32px;
      height: 32px;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50%;
      border: 1px solid #d7d7d7;

      cursor: pointer;

      background: none;
    }
  }
</style>
