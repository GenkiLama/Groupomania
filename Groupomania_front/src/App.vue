<template>
  <div id="app">
    <main-header />
    <nav-bar />
    <router-view />
    <main-footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
  components: {
    NavBar,
    MainHeader,
    MainFooter,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.user-info {
  color: #fd2d01;
  margin-top: 20px;
}
button {
  align-items: center;
  height: 50px;
  padding: 0 40px;
  background: #4e5166;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s linear;
  margin: 10px;
}
button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  color: #fd2d01;
}
h1 {
  margin-bottom: 20px;
}
h2 {
  font-size: 40px;
  font-weight: 700;
}
h3 {
  font-size: 25px;
  font-weight: 700;
}
h4 {
  font-size: 20px;
  font-weight: 700;
}
input {
  display: block;
  width: 95%;
  height: 30px;
  margin: 10px auto;
}
input:focus {
  border-color: #2c3e50;
  outline: 0;
}
.nav-btn {
  margin-top: 20px;
}
#nav {
  padding: 30px;
  margin: 0 auto;
}
#nav a {
  font-weight: bold;
  color: #4e5166;
  margin: 0 10px;
}
#nav a.router-link-exact-active {
  color: #fd2d01;
}
.form-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

select:focus {
  border-color: #16c0b0;
  outline: 0;
}

li {
  list-style: none;
}
.post-img {
  max-width: 300px;
  border-radius: 30px;
  margin: 30px;
}
.post-message {
  margin: 0 0 30px 0;
}
.post-details {
  padding: 15px;
}
@media (min-width: 768px) {
  .post-details {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
  input {
    width: 60%;
  }
}
</style>
