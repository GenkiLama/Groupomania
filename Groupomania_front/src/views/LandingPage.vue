<script>
import { useUserStore } from "../store/UserStore.js";
export default {
  setup() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
};
</script>
<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <img
      src="@/assets/shridhar-gupta-dZxQn4VEv2M-unsplash.jpg"
      class="post-img"
    />
    <div v-if="!this.userStore.user">
      To use the app, you'll need to
      <router-link :to="{ name: 'login' }">Login</router-link>
      or
      <router-link :to="{ name: 'register' }">Register</router-link>
    </div>
  </div>
</template>
