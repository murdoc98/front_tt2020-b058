import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "http://localhost:1025/api/";

export default {
  setUserLogged(userLogged) {
    const in30minutes = 1/48;
    Cookies.set("userLogged", userLogged, in30minutes);
  },
  getUserLogged() {
    return Cookies.get("userLogged");
  },
  setUserRole(role) {
    const in30minutes = 1/48;
    Cookies.set("userRole", role, in30minutes);
  },
  getUserRole() {
    return Cookies.get("userRole");
  },
  login(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  },
  logout() {
    Cookies.remove("userLogged");
    Cookies.remove("userRole");
  }
};
