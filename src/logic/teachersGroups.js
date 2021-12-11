import axios from 'axios';
import auth from './auth';

const api = 'http://localhost:1025/api/teachers';

export default {
  getGroups() {
    return axios.get(`${api}/groups`, {
      headers: {
        token: auth.getUserToken()
      }
    });
  },
  getGroup(groupId) {
    return axios.get(`${api}/groups/${groupId}`, {
      headers: {
        token: auth.getUserToken()
      }
    });
  }
}