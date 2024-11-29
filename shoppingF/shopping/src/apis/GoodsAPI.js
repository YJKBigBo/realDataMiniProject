import axios from 'axios';

const API_URL = 'http://localhost:8080';

const goodsApi = {
    goodsList: (data) => 
      axios.get(`${API_URL}/members/goods/List`, { params: data, withCredentials: true }),
    goodsImage: (imageName) => 
      axios.get(`${API_URL}/image`, { 
        params: { imageName }, 
        withCredentials: true 
      }),
};

export default goodsApi;