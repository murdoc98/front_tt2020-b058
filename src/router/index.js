import { createWebHistory, createRouter } from "vue-router";

import auth from '@/logic/auth';

// import Login from "@/views/Login.vue";
// import Dashboard from "@/views/Dashboard.vue"; // Deprecated

import LandingPage from "@/views/LandingPage.vue"; // Pagina principal
import SelectRole from '@/views/SelectRole'; // Seleccionar rol

import TeachersLogin from '@/views/TeachersLogin';  // Login Docentes
import TeachersDashboard from "@/views/TeachersDashboard.vue"; // Dashboard Profesores

import StudentLogin from '@/views/StudentLogin';  // Login Estudiantes
import StudentsDashboard from "@/views/StudentsDashboard.vue"; // Dashboard Estudiantes


const routes = [
  // {
  //   path: "/",
  //   name: "Login",
  //   component: Login,
  // },
  // {
  //  path: "/dashboard",
  //  name: "Dashboard",
  //  component: Dashboard,
  // },
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },{
    path: "/selectrole",
    name: "SelectRole",
    component: SelectRole, 
  },{
    path: "/teachers/login",
    name: 'TeachersLogin',
    component: TeachersLogin
  },{
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
    path: "/student/login",
    name: 'StudentLogin',
    component: StudentLogin
  },{
    path: "/student/dashboard",
    name: "StudentsDashboard",
    component: StudentsDashboard,
    beforeEnter(to, from, next) {
      if(!auth.getUserToken()) {
        next("/");
      }
      else {
        next();
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;