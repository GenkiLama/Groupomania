<template>
  <div>
    <form @submit.prevent="register">
      <label for="name"> Name: </label>
      <input v-model="name" type="text" name="name" value pattern="[a-zA-Z]+" />

      <label for="email"> Email: </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password"> Password: </label>
      <input v-model="password" type="password" name value />

      <button type="submit" name="button">Register</button>
      <br />
      <router-link :to="{ name: 'login' }">
        Already have an account? login.
      </router-link>
    </form>
  </div>
</template>

<script>
import { useUserStore } from "../store/UserStore.js";
export default {
  setup() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      this.userStore
        .register({
          name: this.name,
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

<style lang="scss" scoped></style>
