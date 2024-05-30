<template>
  <main class="basket">
    <div class="wrapper">
      <section v-if="basket.length" class="basket-info">
        <header class="basket-info__header">
          <div class="basket-info__header-left">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z"
                stroke="#3F3F3F"
                stroke-width="2.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z"
                stroke="#3F3F3F"
                stroke-width="2.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825"
                stroke="#3F3F3F"
                stroke-width="2.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1 class="basket-info__title">Корзина</h1>
          </div>

          <button class="basket-info__clean-btn" @click="cleanBasket">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 5H4.16667H17.5"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.33337 9.16667V14.1667"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.6666 9.16667V14.1667"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Очистить корзину
          </button>
        </header>
        <div class="basket-info__items-list">
          <basket-pizza-item
            v-for="(pizza, idx) of basket"
            :key="idx"
            :idx="idx"
          />
        </div>
        <div class="basket-info__data">
          <div class="basket-info__quantity">
            Всего пицц:
            <span class="basket-info__quantity-span">
              {{ basket.length }}
              шт.
            </span>
          </div>
          <div class="basket-info__amount">
            Сумма заказа:
            <span class="basket-info__amount-span">{{ amount }} ₽</span>
          </div>
        </div>
        <div class="basket-info__moves">
          <router-link class="basket-info__back" to="/">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="basket-info__back-text">Вернуться назад</span>
          </router-link>
          <button class="basket-info__pay">Оплатить сейчас</button>
        </div>
      </section>
      <the-empty-basket v-else />
    </div>
  </main>
</template>

<script>
  import BasketPizzaItem from "../components/BasketPizzaItem.vue";
  import TheEmptyBasket from "../components/TheEmptyBasket.vue";

  export default {
    components: {
      BasketPizzaItem,
      TheEmptyBasket,
    },
    mounted() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    methods: {
      cleanBasket() {
        this.$store.commit("basket/cleanBasket");
      },
    },
    computed: {
      basket() {
        return this.$store.getters["basket/getBasket"];
      },
      amount() {
        return this.basket.reduce((acc, curr) => {
          const pizza = this.$store.getters["app/getPizzas"].find(
            (pizza) => pizza.id === curr.id
          );

          return (
            acc +
            pizza.price +
            pizza.thickness[curr.thickness] +
            pizza.sizes[curr.size]
          );
        }, 0);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .basket {
    padding: 1em;
  }

  .basket-info {
    max-width: 820px;

    margin: 40px auto 0 auto;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 0 0 30px 0;

      &-left {
        display: flex;
      }
    }

    &__title {
      font-weight: 700;
      font-size: 32px;

      margin-left: 8px;

      svg {
        color: black;

        margin-right: 18px;
      }
    }

    &__clean-btn {
      border: none;

      color: #b6b6b6;
      background: none;

      font-weight: 400;
      font-size: 16px;

      padding: 1em;

      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 15px;
      }
    }

    &__data {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: 10px;
    }

    &__quantity {
      font-weight: 400;
      font-size: 22px;

      &-span {
        font-weight: 700;
      }
    }

    &__amount {
      font-weight: 400;
      font-size: 22px;

      &-span {
        color: #fe5f1e;

        font-weight: 700;
      }
    }

    &__moves {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__back {
      color: #cacaca;
      background: none;

      display: flex;
      justify-content: center;
      align-items: center;

      text-decoration: none;

      border-radius: 30px;
      border: 1px solid #cacaca;

      font-weight: 400;
      font-size: 16px;

      margin-top: 75px;
      padding: 16px 32px;

      svg {
        margin-right: 6px;
      }
    }

    &__pay {
      color: #fff;
      background-color: #fe5f1e;

      display: flex;
      justify-content: center;
      align-items: center;

      text-decoration: none;

      border-radius: 30px;
      border: none;
      outline: none;

      font-weight: 700;
      font-size: 16px;

      cursor: pointer;

      margin-top: 75px;
      padding: 16px 32px;
    }
  }

  @media screen and (max-width: 460px) {
    .basket-info {
      &__title {
        display: none;
      }

      &__data {
        display: block;
      }

      &__back-text {
        display: none;
      }
    }
  }
</style>
