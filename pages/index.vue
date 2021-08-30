<template>
  <main class="home">
    <div class="wrapper">
      <pizzas-sort />
      <h1 class="home__title">Все пиццы</h1>
      <section class="home__pizzas">
        <pizza-card />
        <pizza-card />
        <pizza-card />
        <pizza-card />
        <pizza-card />
      </section>
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
}
</style>
