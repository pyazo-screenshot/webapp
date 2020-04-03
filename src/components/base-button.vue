<template>
  <div :class="$style['wrapper']">
    <button v-on="listeners">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        click: (event) => {
          event.preventDefault()
          this.$emit('click')
        },
      }
    },
  },
}
</script>

<style module lang="scss">
.wrapper {
  margin: 1rem 0;
  display: inline;

  button {
    width: 100%;
    padding: .8rem 0;
    background: $primary;
    color: $foreground;
    border: 2px solid $primary;
    border-radius: .3rem;
    outline: none;
    font-size: 1rem;
    transition: border-color .2s ease-in-out;

    &:focus {
      border: 2px solid $accent;
    }
  }
  button::-moz-focus-inner {
    border: none;
  }
}
</style>
