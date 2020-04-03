<template>
  <router-view />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      authStatus: 'auth/status',
    }),
  },
}
</script>

<style lang="scss">
html {
  height: 100%;
  font-size: $root-font-size;
}
body {
  height: 100%;
  margin: 0;
  background: $background;
  color: $foreground;
  font-family: Quicksand;
}
a {
  color: $primary;
  border: 1px solid transparent;
  border-radius: .3rem;
  transition: border-color .1s ease-in-out;
  padding: 0.1rem;

  &:focus {
    border-color: $accent;
    outline: none;
  }
}
p {
  margin: 0;
}
</style>
