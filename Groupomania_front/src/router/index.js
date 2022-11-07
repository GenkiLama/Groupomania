import { createRouter, createWebHistory } from "vue-router";
import PostList from "@/views/PostList.vue";
import PostDetails from "@/views/PostDetails.vue";
import PostCreate from "@/views/PostCreate.vue";
import RegisterUser from "@/views/RegisterUser.vue";
import LoginUser from "@/views/LoginUser.vue";
import LandingPage from "@/views/LandingPage.vue";
import EditPost from "@/views/EditPost.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/postlist",
    name: "PostList",
    component: PostList,
    meta: { requiresAuth: true },
  },
  {
    path: "/post/:id",
    name: "PostDetails",
    props: true,
    component: PostDetails,
    meta: { requiresAuth: true },
  },
  {
    path: "/post/create",
    name: "PostCreate",
    component: PostCreate,
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterUser,
  },
  {
    path: "/login",
    name: "login",
    component: LoginUser,
  },
  {
    path: "/post/:id",
    name: "EditPost",
    component: EditPost,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  } else {
    next();
  }
});

export default router;
