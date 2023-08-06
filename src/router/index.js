import { createRouter, createWebHistory } from "vue-router";
const Login = () => import("../views/Login.vue");
const Registration = () => import("../views/Registration.vue");
const Welcome = () => import("../views/Welcome.vue");
const NotFound = () => import("../views/NotFound.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/registration",
      name: "Registration",
      component: Registration,
    },
    {
      path: "/welcome",
      name: "Welcome",
      component: Welcome,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
