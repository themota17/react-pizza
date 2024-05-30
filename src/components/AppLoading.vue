<template>
  <div class="app-loading">
    <div class="app-loading__point"></div>
  </div>
</template>

<style lang="scss" scoped>
  .app-loading {
    display: flex;

    &__point::before,
    &__point::after {
      content: "";

      width: 20px;
      height: 20px;

      background-color: #282828;

      border-radius: 20px;

      position: absolute;
      top: 0;
    }

    &__point::before {
      left: -30px;

      animation: first-point-animation 1s infinite linear;
    }

    &__point {
      width: 20px;
      height: 20px;

      margin-left: 12px;

      background-color: #282828;

      border-radius: 20px;

      position: relative;

      animation: central-point-animation 1s infinite linear;
    }

    &__point::after {
      content: "";

      left: 30px;

      animation: last-point-animation 1s infinite linear;
    }
  }

  @keyframes first-point-animation {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1.2);
    }
    50% {
      transform: scale(1, 0.8);
    }
    75% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  @keyframes central-point-animation {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 1.2);
    }
    75% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  @keyframes last-point-animation {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 0.8);
    }
    75% {
      transform: scale(1, 1.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }
</style>
