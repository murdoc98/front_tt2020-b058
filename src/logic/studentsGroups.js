import axios from 'axios';
import auth from './auth';

const api = 'http://localhost:1025/api/students';

export default {
  getGroups() {
    return axios.get(`${api}/groups`, {
      headers: {
        token: auth.getUserToken()
      }
    });
  }
}