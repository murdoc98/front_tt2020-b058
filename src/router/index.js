import { createWebHistory, createRouter } from "vue-router";

import auth from '@/logic/auth';

// import Login from "@/views/Login.vue";
// import Dashboard from "@/views/Dashboard.vue"; // Deprecated

import LandingPage from "@/views/LandingPage.vue"; // Pagina principal
import SelectRole from '@/views/SelectRole'; // Seleccionar rol

import TeachersLogin from '@/views/TeachersLogin';  // Login Docentes
import TeachersDashboard from "@/views/TeachersDashboard.vue"; // Dashboard Profesores
import TeachersDashboardVerPerfil from "@/views/TeachersDashboard-VerPerfil.vue"; //Ver Perfil Del profesor
import TeachersDashboardGrupos from "@/views/TeachersDashboard-Grupos.vue"; // Ver Grupos

import StudentLogin from '@/views/StudentLogin';  // Login Estudiantes
import StudentsDashboard from "@/views/StudentsDashboard.vue"; // Dashboard Estudiantes
import StudentsDashboardVerPerfil from "@/views/StudentsDashboard-VerPerfil.vue"; //Ver Perfil Estudiantes
import StudentsDashboardGrupos from "@/views/StudentsDashboard-Grupos.vue"; // Ver Grupos
import StudentsDashboardGruposCuestionarios from "@/views/StudentsDashboard-Grupos-Cuestionarios.vue"; //Ver Grupos post cuestionarios
import StudentsDashboardCuestionarios from "@/views/StudentsDashboard-Cuestionarios.vue"; //Ver Grupos post cuestionarios



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
  },
  {
    path: "/teachers/ver-perfil",
    name: 'TeachersDashboardVerPerfil',
    component: TeachersDashboardVerPerfil
  },
  {
    path: "/teachers/grupos",
    name: 'TeachersDashboardGrupos',
    component: TeachersDashboardGrupos
  },
  {
    path: "/student/login",
    name: 'StudentLogin',
    component: StudentLogin
  },
  {
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
  {
    path: "/student/ver-perfil",
    name: 'StudentDashboardVerPerfil',
    component: StudentsDashboardVerPerfil
  },
  {
    path: "/student/grupos-info",
    name: 'StudentDashboardGrupos',
    component: StudentsDashboardGrupos
  },
  {
    path: "/student/grupos-cuestionarios",
    name: 'StudentsDashboardGruposCuestionarios',
    component: StudentsDashboardGruposCuestionarios
  },
  {
    path: "/student/cuestionarios",
    name: 'StudentsDashboardCuestionarios',
    component: StudentsDashboardCuestionarios
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;