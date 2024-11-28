import axios from 'axios';

const API_URL = 'http://localhost:8080';

const authApi = {
  login: (data) => 
    axios.post(`${API_URL}/members/login`, data, { withCredentials: true }),
  sessionCheck: () =>
    axios.get(`${API_URL}/members/sessionCheck`, { withCredentials: true }),
  logout: () =>
    axios.get(`${API_URL}/members/logout`, {withCredentials : true})
};

export default authApi;