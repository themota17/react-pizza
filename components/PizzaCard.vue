<template>
  <div class="pizza-card">
    <img src="@/assets/images/pizzas/1.png" alt="pizza" />
    <h3 class="pizza-card__name">Чизбургер-пицца</h3>
    <div class="pizza-card__ui">
      <div class="pizza-card__types">
        <div class="pizza-card__select-btn">тонкое</div>
        <div class="pizza-card__select-btn">традиционное</div>
      </div>
      <div class="pizza-card__sizes">
        <div class="pizza-card__select-btn">26 см.</div>
        <div class="pizza-card__select-btn">30 см.</div>
        <div class="pizza-card__select-btn">40 см.</div>
      </div>
    </div>
    <div class="pizza-card__price">
      от 395 Р
    </div>
    <button class="pizza-card__add-btn">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="#EB5A1E"
        />
      </svg>
      Добавить
    </button>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.pizza-card {
  // display: -webkit-box;
  // display: -ms-flexbox;
  // display: flex;
  // -webkit-box-pack: center;
  // -ms-flex-pack: center;
  // justify-content: center;

  max-width: 280px;

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

    background-color: #fff;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
