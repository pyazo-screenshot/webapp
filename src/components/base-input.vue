<template>
  <div :class="$style['wrapper']">
    <label>
      <span :class="$style['label']">{{ label }}</span>
      <div>
        <input
          :value="value"
          v-bind="$attrs"
          v-on="listeners"
        >
      </div>
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
      }
    },
  },
}
</script>

<style module lang="scss">
.wrapper {
  margin: 1rem 0;

  .label {
    color: $foreground-darker;
  }
  div {
    background: $background-dark;
    margin-top: .4rem;
    padding: .6rem;
    border: .2rem solid $background-dark;
    border-radius: .2rem;
    transition: border-color .2s ease-in-out;

    &:focus-within {
      border-color: $primary-darker;
    }
    input {
      width: 100%;
      box-sizing: border-box;
      background: $background-dark;
      color: $foreground;
      border: none;
      font-family: Quicksand;
      font-size: 1rem;
    }
  }
}
</style>
