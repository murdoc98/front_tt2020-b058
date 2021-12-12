import axios from 'axios';
import auth from './auth';

const api = 'http://64.227.8.125:1025/api/teachers';

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
  },
  updateStudentAccess(groupId, studentId, status) {
    return axios.put(
      `${api}/groups/${groupId}/${studentId}`, 
      { status },
      { headers: { token: auth.getUserToken() }} 
    );
  },
  createGroupLogic(name) {
    return axios.post(
      `${api}/groups/`, 
      { name },
      { headers: { token: auth.getUserToken() }} 
    );
  }
}