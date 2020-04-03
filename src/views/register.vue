<template>
  <v-card class="login-form-card">
    <h2>Login</h2>
    <form>
      <input
        v-model="form.username"
        label="Username"
        name="username"
        type="text"
      >
      <input
        v-model="form.password"
        label="Password"
        name="password"
        type="password"
      >
      <p
        v-for="(error, index) in registerErrors"
        :key="index"
        class="red--text"
      >
        {{ error }}
      </p>
      <button @click.prevent="submit">
        Login
      </button>
    </form>
  </v-card>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
      }
    },

    methods: {
      ...mapActions(['register']),

      async submit() {
        this.register(this.form)
      },
    },
  }
</script>

<style>
  .login-form-card {
    padding: 2rem;
    margin-top: 5rem;
  }
</style>
