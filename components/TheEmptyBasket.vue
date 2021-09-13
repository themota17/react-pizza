<template>
  <section class="empty-basket">
    <h2 class="empty-basket__title">Корзина пустая 😕</h2>
    <div class="empty-basket__text">
      <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
      <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
    </div>
    <img
      class="empty-basket__img"
      src="@/assets/images/empty-basket.png"
      alt="empty-basket"
    />
    <a class="empty-basket__btn" href="#">
      Вернуться назад
    </a>
  </section>
</template>

<style lang="scss" scoped>
.empty-basket {
  min-height: 100%;

  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-direction: column;
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

    margin-top: 75px;
    padding: 13px 26px;
  }
}
</style>
