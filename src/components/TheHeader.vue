<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__left">
        <img
          :src="require('../assets/images/logo.png')"
          width="38"
          height="38"
          alt="React pizza"
        />
        <div class="header__titles-wrapper">
          <h1 class="header__title">React pizza</h1>
          <h3 class="header__subtitle">самая вкусная пицца во вселенной</h3>
        </div>
      </div>
      <div class="header__right">
        <the-basket-info />
      </div>
    </div>
  </header>
</template>

<script>
  import TheBasketInfo from "../components/TheBasketInfo.vue";

  export default {
    components: { TheBasketInfo },
  };
</script>

<style lang="scss" scoped>
  .header {
    padding: 35px 24px;

    height: 115px;

    position: sticky;
    top: 0;
    z-index: 9999;

    background-color: #ffffffe6;

    border-bottom: 1px solid #f1f1f1;

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__left {
      display: flex;
      align-items: center;
    }

    &__titles-wrapper {
      display: flex;
      flex-direction: column;

      margin-left: 17px;
    }

    &__title {
      text-transform: uppercase;

      font-weight: 800;
      font-size: 24px;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 16px;

      color: #7b7b7b;
    }
  }

  @media screen and (max-width: 576px) {
    .header {
      padding: 35px 20px;

      &__subtitle {
        display: none;
      }
    }
  }

  @media screen and (max-width: 460px) {
    .header {
      &__title {
        margin-right: 8px;
      }
    }
  }
</style>
