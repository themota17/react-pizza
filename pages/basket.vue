<template>
  <main class="basket">
    <div class="wrapper">
      <the-empty-basket />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.empty-basket {
  max-width: 540px;
  min-height: 100%;

  margin: 0 auto;

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

    font-weight: 400;
    font-size: 18px;
  }

  &__img {
    margin-top: 50px;
  }
}
</style>
