import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("UserStore", {
  state() {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${currentUser.token}`;
    }

    return {
      user: currentUser,
    };
  },
  getters: {
    loggedIn: (state) => state.user,
  },
  actions: {
    setUserData(response) {
      if (response) {
        this.user = response.data;
        localStorage.setItem("user", JSON.stringify(response.data));
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
      }
    },
    async register(user) {
      const response = await axios
        .post("http://localhost:3000/api/auth/register", user)
        .catch((error) => console.log(error));
      if (response) {
        this.setUserData(response);
      }
    },
    async login(user) {
      const response = await axios
        .post("http://localhost:3000/api/auth/login", user)
        .catch((error) => console.log(error));
      this.setUserData(response);
    },
    logout() {
      localStorage.removeItem("user");
      location.reload();
    },
  },
});
