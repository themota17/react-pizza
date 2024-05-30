<template>
  <div class="pizza-card">
    <img
      class="pizza-card__img"
      :src="require('../assets/images/pizza/' + pizza.img)"
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

<script>
  export default {
    props: {
      id: Number,
    },
    data: () => ({
      pizzaThickness: {
        thin: "тонкий",
        traditional: "традиционный",
      },
      selectedThickness: "",
      selectedSize: 0,
    }),
    mounted() {
      // defaut selected from ui
      this.selectedThickness = "thin";
      this.selectedSize = 26;
    },
    methods: {
      changeTickness(thickness) {
        this.selectedThickness = thickness;
      },
      changeSize(size) {
        this.selectedSize = size;
      },
      addPizzaToBasket() {
        this.$store.commit("basket/addPizza", {
          id: this.pizza.id,
          thickness: this.selectedThickness,
          size: this.selectedSize,
        });
      },
    },
    computed: {
      pizza() {
        return this.$store.getters["app/getPizzas"].find(
          (pizza) => pizza.id === this.id
        );
      },
      price() {
        const pizza = this.pizza;

        return (
          pizza.price +
          pizza.thickness[this.selectedThickness] +
          pizza.sizes[this.selectedSize]
        );
      },
      quantityInBasket() {
        const quantity = this.$store.getters["basket/getBasket"].reduce(
          (acc, curr) => {
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
  };
</script>

<style lang="scss" scoped>
  .pizza-card {
    max-width: 250px;

    margin-top: 35px;
    margin-right: 35px;

    &__img {
      position: relative;
      bottom: 0;

      cursor: pointer;

      transition: ease bottom 0.2s;

      &:hover {
        bottom: 2px;
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
      display: flex;
    }

    &__sizes {
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

      display: flex;
      align-items: center;

      margin-top: 17px;
    }

    &__add-btn {
      display: flex;
      justify-content: center;
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

      transition: linear 0.3s;

      svg {
        margin-right: 8px;
      }

      svg path {
        fill: #eb5a1e;

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

      display: flex;
      align-items: center;
      justify-content: center;

      transition: linear 0.3s;

      padding: 0 8px;

      color: #fff;
      background-color: #eb5a1e;

      border-radius: 12px;

      margin-left: 8px;
    }
  }
</style>
