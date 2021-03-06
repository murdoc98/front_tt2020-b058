import axios from "axios";
import auth from "./auth";

const ENDPOINT_PATH = "https://evaio.mx/api/";

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
