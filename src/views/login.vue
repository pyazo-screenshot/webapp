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
        <p
          v-for="(error, index) in errors"
          :key="index"
          :class="$style['errors']"
        >
          {{ error }}
        </p>
        <span :class="$style['forgot-password']">
          <router-link to="/forgot">
            Forgot password?
          </router-link>
        </span>
        <base-button
          text="LOG IN"
          @click="submit"
        />
        <span :class="$style['signup-link']">
          Don't have an account? <router-link to="/register">Sign up</router-link>
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
      },
    }
  },
  computed: {
    ...mapGetters({
      errors: 'auth/errors',
    }),
  },
  methods: {
    ...mapActions('auth', ['login']),
    async submit() {
      try {
        await this.login(this.form)
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
      .signup-link {
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
