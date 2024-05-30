<template>
  <app-select
    @option-selected="onOptionSelect"
    :select-class="'pizza-sort-by-types'"
    :current-value-class="'pizza-sort-by-types__current-type'"
    :drop-down-class="'pizza-sort-by-types__drop-down'"
    :option-class="'pizza-sort-by-types__type'"
    :options="pizzaTypes"
  />
</template>

<script>
  import AppSelect from "../components/AppSelect.vue";

  export default {
    components: {
      AppSelect,
    },
    props: {
      pizzaTypes: {
        type: Array,
        default: [],
      },
    },
    methods: {
      onOptionSelect(optionName) {
        this.$store.commit("app/changeSelectedType", optionName);
      },
    },
  };
</script>

<style lang="scss">
  .pizza-sort-by-types {
    margin-top: 40px;

    width: 240px;

    position: relative;

    &__drop-down {
      z-index: 9999;

      border-radius: 22px;

      background-color: #f3f3f3;

      margin-top: 10px;

      box-shadow: 0px 12px 32px #2828286a;

      &_active {
        height: auto;
      }
    }

    &__current-type,
    &__type {
      padding: 12px 23px;

      color: #fff;

      border-radius: 30px;

      font-weight: 600;
      font-size: 16px;

      cursor: pointer;
    }

    &__current-type {
      background-color: #282828;
    }

    &__type {
      width: 100%;

      color: #282828;
      background-color: #f3f3f3;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: #f3f3f3;
        background-color: #282828;
      }
    }
  }

  @media screen and (max-width: 576px) {
    .pizza-sort-by-types {
      width: 100%;
    }
  }
</style>
