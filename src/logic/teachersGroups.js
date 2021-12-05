import axios from 'axios';
import auth from './auth';

const api = 'http://localhost:1025/api/teachers';

export default {
  getGroups() {
    console.log(auth.getUserToken());
    return axios.get(`${api}/groups`, {
      headers: {
        token: auth.getUserToken()
      }
    });
  }
}