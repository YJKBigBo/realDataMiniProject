import axios from "axios";

const API_URL = "http://localhost:8080";

const ReviewAPI = {
  reviewRegist: (data) =>
    axios.post(`${API_URL}/members/goods/review/regist`, data, {
      withCredentials: true,
    }),

  reviewDelete: (data) =>
    axios.post(`${API_URL}/members/goods/review/delete`, data, {
      withCredentials: true,
    }),
};

export default ReviewAPI;
