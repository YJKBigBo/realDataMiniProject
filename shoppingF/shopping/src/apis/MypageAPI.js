import axios from 'axios';

const API_URL = 'http://localhost:8080';

const MypageAPI = {
    mypageInfo: () => 
      axios.get(`${API_URL}/members/mypage/info`, { withCredentials: true }),

    myInquireInfo: () =>
      axios.get(`${API_URL}/members/mypage/inquire/info`, { withCredentials: true }),
}

export default MypageAPI;