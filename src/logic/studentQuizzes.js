import axios from 'axios';
import auth from './auth';

const api = 'http://64.227.8.125:1025/api/students';

export default {
  geQuizzesLogic(groupId) {
    return axios.get(`${api}/groups/${groupId}/quizzes`, {
      headers: {
        token: auth.getUserToken()
      }
    });
  },
  getQuestionLogic(quizId) {
    const request = axios.get(`${api}/quiz/${quizId}/question`, {
      headers: {
        token: auth.getUserToken()
      }
    });
    console.log(request);
    return request;
  },
  postQuiz(groupId) {
    console.log(auth.getUserToken());
    const response = axios.post(`${api}/groups/${groupId}/quiz`, {
      headers: {
        token: auth.getUserToken()
      }
    });
    console.log(response);
    return response;
  }
}