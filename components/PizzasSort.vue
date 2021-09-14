<template>
  <section class="pizzas-sort">
    <div class="pizzas-sort__types">
      <div
        v-for="(type, idx) of pizzaTypes"
        :key="idx"
        @click="changeSelectedType(type.value)"
        class="pizzas-sort__type"
        :class="{ 'pizzas-sort__type_active': type.value === selectedType }"
      >
        {{ type.name }}
      </div>
    </div>
    <div class="pizzas-sort__other">
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
      <a href="#" @click="openDrop">{{ selectedSortTypeName }}</a>
      <div
        class="pizzas-sort__drop"
        :class="{ 'pizzas-sort__drop_active': dropActive }"
      >
        <div
          v-for="(sortType, idx) of pizzaSortTypes"
          :key="idx"
          @click="changeSelectedSortType(sortType.value)"
          class="pizzas-sort__drop-item"
          :class="{
            'pizzas-sort__drop-item_active':
              sortType.value === selectedSortType,
          }"
        >
          {{ sortType.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

import IPizzaSortType from "@/interfaces/PizzaSortType";

export default Vue.extend({
  props: {
    pizzaTypes: Array,
    pizzaSortTypes: <PropOptions<Array<IPizzaSortType>>>{
      required: true,
    },
  },
  data: () => ({
    dropActive: false,
  }),
  methods: {
    changeSelectedType(type: string): void {
      this.$store.commit("changeSelectedType", type);
    },
    changeSelectedSortType(sortType: string): void {
      this.$store.commit("changeSelectedSortType", sortType);
    },
    openDrop(): void {
      this.dropActive = !this.dropActive;
    },
  },
  computed: {
    selectedType(): string {
      return this.$store.getters.getSelectedType;
    },
    selectedSortType(): string {
      return this.$store.getters.getSelectedSortType;
    },
    selectedSortTypeName(): string {
      const name = this.pizzaSortTypes.find(
        (type: IPizzaSortType) => type.value === this.selectedSortType
      )?.name;

      return name || "";
    },
  },
});
</script>

<style lang="scss" scoped>
.pizzas-sort {
  margin-top: 40px;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  &__types {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  &__type {
    margin-right: 10px;
    padding: 12px 23px;

    border-radius: 30px;

    background-color: #f9f9f9;

    font-weight: 600;
    font-size: 16px;

    cursor: pointer;

    -webkit-transition: linear 0.3s;
    -o-transition: linear 0.3s;
    transition: linear 0.3s;

    &:last-child {
      margin-right: 0;
    }

    &_active {
      color: #fff;
      background-color: #282828;
    }
  }

  &__other {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    position: relative;

    a {
      color: #fe5f1e;

      margin-left: 7px;

      text-decoration: none;

      border-bottom: 1px dotted #fe5f1e;
    }

    svg {
      margin-right: 10px;
    }
  }

  &__drop {
    position: absolute;
    top: 40px;
    right: 0;
    z-index: 2;

    background-color: #fff;

    -webkit-box-shadow: 0px 4px 4px #b4b4b4;
    box-shadow: 0px 4px 4px #b4b4b4;

    border-radius: 10px;

    -webkit-transition: linear 0.3s;
    -o-transition: linear 0.3s;
    transition: linear 0.3s;

    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);

    &_active {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    &-item {
      width: 100%;
      height: 40px;

      padding: 0 22px;

      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;

      font-weight: 400;
      font-size: 14px;

      cursor: pointer;

      &_active {
        color: #fe5f1e;
        background-color: #fe5f1e0d;
      }
    }
  }
}
</style>
