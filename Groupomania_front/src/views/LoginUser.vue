<script>
import { useUserStore } from "../store/UserStore.js";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  setup() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },

  methods: {
    login() {
      this.userStore
        .login({
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "PostList" });
        });
    },
  },
};
</script>

<template>
  <div>
    <form @submit.prevent="login">
      <label for="email"> Email: </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password"> Password: </label>
      <input v-model="password" type="password" name="password" value />

      <button type="submit" name="button">Login</button>
      <br />
      <router-link :to="{ name: 'register' }">
        Don't have an account? Register.
      </router-link>
    </form>
  </div>
</template>
