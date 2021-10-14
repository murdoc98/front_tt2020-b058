import { createWebHistory, createRouter } from "vue-router";

import auth from '@/logic/auth';

import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    beforeEnter(to, from, next) {
      if(auth.getUserLogged()) {
        next("/dashboard");
      }
      else {
        next();
      }
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter(to, from, next) {
      if(auth.getUserLogged()) {
        next();
      }
      else {
        next("/");
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;