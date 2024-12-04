import axios from 'axios';

const API_URL = 'http://localhost:8080';

const InquireAPI = {
    updateInquire: (data) =>
      axios.post(`${API_URL}/members/mypage/inquire/update`, data ,{ withCredentials: true }),

    inquireRegist: (data) =>
      axios.post(`${API_URL}/members/inquire/regist`, data ,{withCredentials : true}),
}

export default InquireAPI;