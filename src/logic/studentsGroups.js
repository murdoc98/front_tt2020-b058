import axios from 'axios';
import auth from './auth';

const api = 'https://evaio.mx/api/students';

export default {
  getGroups() {
    return axios.get(`${api}/groups`, {
      headers: {
        token: auth.getUserToken()
      }
    });
  },
  putGroupLogic(groupId) {
    return axios.post(`${api}/groups/${groupId}/enroll`, {}, 
    { 
      headers: { token: auth.getUserToken() }
    });
  }
}