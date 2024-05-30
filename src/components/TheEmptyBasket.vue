<template>
  <section class="empty-basket">
    <h2 class="empty-basket__title">Корзина пустая 😕</h2>
    <div class="empty-basket__text">
      <p>Вероятнее всего, Вы не заказывали ещё пиццу.</p>
      <p>Для того чтобы заказать пиццу, перейдите на главную страницу.</p>
    </div>
    <img
      class="empty-basket__img"
      src="../assets/images/empty-basket.png"
      alt="empty-basket"
    />
    <router-link class="empty-basket__btn" to="/">
      Вернуться назад
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
  .empty-basket {
    margin-top: 160px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__title {
      font-weight: 700;
      font-size: 32px;
    }

    &__text {
      color: #777777;

      margin-top: 10px;

      text-align: center;

      font-weight: 400;
      font-size: 18px;
    }

    &__img {
      margin-top: 50px;
    }

    &__btn {
      color: #fff;
      background-color: #282828;

      text-decoration: none;

      border-radius: 30px;

      font-weight: 700;
      font-size: 16px;

      margin-top: 75px;
      padding: 13px 26px;
    }
  }
</style>
