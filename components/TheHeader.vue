<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__inner">
        <div class="header__left">
          <img
            src="@/assets/images/logo.png"
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
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 35px 0px;

  border-bottom: 1px solid #f1f1f1;

  &__inner {
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

  &__left {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  &__titles-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
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
</style>
