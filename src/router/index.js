import { createWebHistory, createRouter } from "vue-router";

// import auth from '@/logic/auth';

// import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
// import LandingPage from "@/views/LandingPage.vue";
import Welcome from "@/views/Welcome.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Login",
  //   component: Login,
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  // {
  //   path: "/",
  //   name: "LandingPage",
  //   component: LandingPage,
  // },
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;