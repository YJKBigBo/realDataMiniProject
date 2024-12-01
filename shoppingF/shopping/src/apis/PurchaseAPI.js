import axios from 'axios';

const API_URL = 'http://localhost:8080';

const PurchaseAPI = {
    deliveryInfo: (data) => 
      axios.post(`${API_URL}/members/purchase/delivery`, data, { withCredentials: true }),
}

export default PurchaseAPI;