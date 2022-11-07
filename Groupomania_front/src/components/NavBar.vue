<template>
  <div id="nav">
    <router-link v-if="!this.userStore.user" :to="{ name: 'LandingPage' }"
      >Home
    </router-link>
    <router-link v-if="this.userStore.user" :to="{ name: 'PostList' }"
      >Posts
    </router-link>

    <router-link v-if="this.userStore.user" :to="{ name: 'PostCreate' }"
      >Create Post</router-link
    >
    <router-link v-if="!this.userStore.user" :to="{ name: 'register' }"
      >Register User</router-link
    >
    <router-link v-if="!this.userStore.user" :to="{ name: 'login' }"
      >Login User</router-link
    >
    <br />
    <button
      v-if="this.userStore.user"
      class="logout-btn nav-btn"
      @click="logout"
    >
      Logout
    </button>
    <h4 v-if="this.userStore.loggedIn" class="user-info">
      Hello {{ this.userStore.user.name }}, you are logged in as '{{
        this.userStore.user.role
      }}'
    </h4>
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
  methods: {
    logout() {
      this.userStore.logout();
    },
  },
};
</script>
