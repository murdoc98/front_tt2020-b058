import axios from 'axios';
import auth from './auth';

const api = 'https://evaio.mx/api/students';

export default {
  geQuizzesLogic(groupId) {
    return axios.get(`${api}/groups/${groupId}/quizzes`, {
      headers: {
        token: auth.getUserToken()
      }
    });
  },
  getQuestionLogic(quizId) {
    return axios.get(`${api}/quiz/${quizId}/question`, {
      headers: {
        token: auth.getUserToken()
      }
    });
  },
  postQuiz(groupId) {
    return axios.post(`${api}/groups/${groupId}/quiz`, {}, {
      headers: {
        token: auth.getUserToken()
      }
    });
  },
  postQuestionLogic(quizId, questionId, optionId, answers) {
    console.log(quizId);
    const request =  axios.post(`${api}/quiz/${quizId}/question`, 
      {
        question: questionId,
        option: optionId,
        answers
      },
      { headers: { token: auth.getUserToken() } }
    );
    console.log(request);
    return request;
  }
}