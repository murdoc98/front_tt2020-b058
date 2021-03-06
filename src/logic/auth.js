import axios from "axios";
import Cookies from "js-cookie";

const api = 'https://evaio.mx/api/';

export default {
  setUserToken(token) {
    const in30minutes = 1/48;
    Cookies.set('token', token, in30minutes);
  },
  getUserToken() {
    return Cookies.get('token');
  },
  setUserRole(role) {
    const in30minutes = 1/48;
    Cookies.set('role', role, in30minutes);
  },
  getUserRole() {
    return Cookies.get('role');
  },
  teachersLogin(email, password) {
    const user = { email, password };
    return axios.post(`${api}/teachers/auth/login`, user);
  },
  studentsLogin(email, password) {
    const user = { email, password };
    return axios.post(`${api}/students/auth/login`, user);
  },
  logout() {
    Cookies.remove('token');
    Cookies.remove('role');
  },
  getStudentProfile() {
    return axios.get(`${api}/students/auth/profile`, {
      headers: {
        token: this.getUserToken()
      }
    });
  },
  getTeacherProfile() {
    return axios.get(`${api}/teachers/auth/profile`, {
      headers: {
        token: this.getUserToken()
      }
    });
  },
  recoverStudentPassword(email) {
    return axios.put(`${api}/students/auth/resetPassword`,
      { email }
    );
  },
  recoverTeacherPassword(email) {
    return axios.put(`${api}/teachers/auth/resetPassword`,
      { email }
    );
  },
  signinStudent(data) {
    return axios.post(`${api}/students/auth/signin`, data);
  }
};
