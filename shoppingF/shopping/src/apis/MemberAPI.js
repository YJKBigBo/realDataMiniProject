import axios from "axios";

const API_URL = "http://localhost:8080";

const memberApi = {
  signup: (data) =>
    axios.post(`${API_URL}/members/regist`, data, { withCredentials: true }),

  updateInfo: (data) =>
    axios.post(`${API_URL}/members/update/info`, data, {
      withCredentials: true,
    }),
};

export default memberApi;
