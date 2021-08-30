<template>
  <main class="home">
    <div class="wrapper">
      <pizzas-sort />
      <h1 class="home__title">Все пиццы</h1>
      <div class="home__pizzas">
        <pizza-card />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.home {
  &__title {
    margin-top: 32px;

    font-weight: 700;
    font-size: 32px;
  }

  &__pizzas {
    margin-top: 35px;
  }
}
</style>
