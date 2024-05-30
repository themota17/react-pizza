<template>
  <div @click="toggleDropDown" class="app-select" :class="selectClass">
    <div class="app-select__current-value" :class="currentValueClass">
      {{ currentOptionValue }}
    </div>
    <div
      class="app-select__drop-down"
      :class="[
        dropDownActive ? 'app-select__drop-down_active' : '',
        dropDownClass,
        positionAtLeft
          ? 'app-select__drop-down_at-left'
          : 'app-select__drop-down_at-right',
      ]"
    >
      <div
        v-for="(option, idx) of optionsWithoutSelected"
        :key="idx"
        @click="selectOption(option.name)"
        class="app-select__option"
        :class="optionClass"
      >
        {{ option.value }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      selectClass: String,
      currentValueClass: String,
      dropDownClass: String,
      optionClass: String,
      options: {
        type: Array,
        default: [],
      },
      positionAtLeft: {
        type: Boolean,
        default: false,
      },
    },
    emits: ["optionSelected"],
    data: () => ({
      currentOptionName: "",
      dropDownActive: false,
    }),
    mounted() {
      this.currentOptionName = this.options[0].name;

      document.body.addEventListener(
        "click",
        this.handleOutsideClick.bind(this)
      );
    },
    befureUnmount() {
      document.body.removeEventListener(
        "click",
        this.handleOutsideClick.bind(this)
      );
    },
    methods: {
      selectOption(optionName) {
        this.currentOptionName = optionName;

        this.$emit("optionSelected", optionName);
      },
      toggleDropDown() {
        this.dropDownActive = !this.dropDownActive;
      },
      handleOutsideClick(e) {
        if (!this.dropDownActive) {
          return;
        }

        if (!this.$el.contains(e.target)) {
          this.dropDownActive = false;
        }
      },
    },
    computed: {
      optionsWithoutSelected() {
        return this.options.filter(
          (type) => type.name !== this.currentOptionName
        );
      },
      currentOptionValue() {
        let currentOption = this.options.find(
          (option) => option.name === this.currentOptionName
        );

        if (currentOption) {
          return currentOption.value;
        }

        return "";
      },
    },
  };
</script>

<style lang="scss" scoped>
  .app-select {
    position: relative;

    cursor: pointer;

    &__drop-down {
      position: absolute;
      top: 100%;

      overflow: hidden;

      width: 100%;
      height: 0;

      &_active {
        height: auto;
      }

      &_at-left {
        left: 0;
      }

      &_at-right {
        right: 0;
      }
    }
  }
</style>
