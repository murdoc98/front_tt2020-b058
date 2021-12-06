import { createWebHistory, createRouter } from "vue-router";

import auth from '@/logic/auth';

// import Login from "@/views/Login.vue";
// import Dashboard from "@/views/Dashboard.vue"; // Deprecated
import LandingPage from "@/views/LandingPage.vue"; // Dashboard de estudiantes y profesores PRIMERA
import TeachersDashboard from "@/views/TeachersDashboard.vue"; // Primera pagina
import TeachersLogin from '@/views/TeachersLogin';
import StudentLogin from '@/views/StudentLogin';

const routes = [
  // {
  //   path: "/",
  //   name: "Login",
  //   component: Login,
  // },
  //{
  //  path: "/dashboard",
  //  name: "Dashboard",
  //  component: Dashboard,
  //},
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  }, {
    path: "/teachers/dashboard",
    name: "TeachersDashboard",
    component: TeachersDashboard,
    beforeEnter(to, from, next) {
      if(!auth.getUserToken()) {
        next("/");
      }
      else {
        next();
      }
    }
  }, {
    path: "/teachers/login",
    name: 'TeachersLogin',
    component: TeachersLogin
  },{
    path: "/student/login",
    name: 'StudentLogin',
    component: StudentLogin
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;