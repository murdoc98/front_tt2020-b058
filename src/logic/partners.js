import axios from "axios";
import auth from "./auth";

const ENDPOINT_PATH = "http://localhost:1025/api/";

export default {
  getPartners() {
    return axios.get(ENDPOINT_PATH + "showPartners", {
      headers: {
        session: auth.getUserLogged(), //the token is a variable which holds the token
      },
    });
  },
};
