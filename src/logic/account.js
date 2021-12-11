import axios from "axios";
import auth from "./auth";

const ENDPOINT_PATH = "http://64.227.8.125:1025/api/";

export default {
  getProfile() {
    console.log(auth.getUserLogged);
    return axios.get(ENDPOINT_PATH + "profile", {
      headers: {
        session: auth.getUserLogged(), //the token is a variable which holds the token
      },
    });
  },
};
