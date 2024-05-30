<template>
  <div class="pizza-sort-by-properties">
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
        fill="#2C2C2C"
      />
    </svg>
    <span>Сортировка по:</span>
    <app-select
      @option-selected="onOptionSelect"
      :current-value-class="'pizza-sort-by-properties__current-property'"
      :drop-down-class="'pizza-sort-by-properties__drop-down'"
      :option-class="'pizza-sort-by-properties__property'"
      :options="pizzaSortProperties"
    />
  </div>
</template>

<script>
  import AppSelect from "../components/AppSelect.vue";

  export default {
    components: {
      AppSelect,
    },
    props: {
      pizzaSortProperties: {
        type: Array,
        default: [],
      },
    },
    methods: {
      onOptionSelect(optionName) {
        this.$store.commit("app/changeSelectedSortProperty", optionName);
      },
    },
  };
</script>

<style lang="scss">
  .pizza-sort-by-properties {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }

    &__current-property {
      color: #fe5f1e;

      margin-left: 7px;

      text-decoration: none;

      border-bottom: 1px dotted #fe5f1e;
    }

    &__drop-down {
      min-width: 140px;

      z-index: 9999;

      background-color: #fff;

      box-shadow: 0px 12px 12px #2828286a;

      border-radius: 6px;
    }

    &__property {
      width: 100%;
      height: 40px;

      padding: 0 22px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 400;
      font-size: 14px;

      cursor: pointer;
    }
  }
</style>
