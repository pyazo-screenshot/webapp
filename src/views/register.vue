<template>
  <div :class="$style['container']">
    <div :class="$style['wrapper']">
      <img src="../assets/logo.svg">
      <h1>Welcome to Pyazo</h1>
      <form>
        <base-input
          v-model="form.username"
          label="Username"
          name="username"
          type="text"
          autofocus
        />
        <base-input
          v-model="form.password"
          label="Password"
          name="password"
          type="password"
        />
        <base-input
          v-model="form.confirm"
          label="Confirm password"
          name="confirm"
          type="password"
        />
        <p
          v-for="(error, index) in errors"
          :key="index"
          :class="$style['errors']"
        >
          {{ error }}
        </p>
        <base-button
          text="SIGN UP"
          @click="submit"
        />
        <span :class="$style['login-link']">
          Already have an account? <router-link to="/login">Log in</router-link>
        </span>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        confirm: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      errors: 'auth/errors',
    }),
  },
  methods: {
    ...mapActions('auth', ['register', 'addError']),
    async submit() {
      if (this.form.password !== this.form.confirm) {
        this.addError('Passwords don\'t match')
        return
      }
      try {
        await this.register(this.form)
        this.$router.push({name: 'images'})
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style module lang="scss">
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper { /* TODO: nested?*/
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 2rem;

    img {
      width: 8rem;
    }
    h1 {
      margin-bottom: 5rem;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;

      .forgot-password {
        display: flex;
        justify-content: flex-end;
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
      .login-link {
        text-align: center;
      }
    }
  }
  @media (min-width: 750px) {
    .wrapper {
      width: 26rem;
    }
  }
}
.errors {
  color: $error;
}
</style>
