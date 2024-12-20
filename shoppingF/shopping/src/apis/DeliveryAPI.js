import axios from "axios";

const API_URL = "http://localhost:8080";

const DeliveryAPI = {
  fetchDelivery: (data) =>
    axios.get(`${API_URL}/delivery/detail`, {
      params: { purchaseNum: data },
      withCredentials: true,
    }),

  updateDelivery: (data) =>
   axios.post(`${API_URL}/delivery/update`, { purchaseNum: data }, {
      withCredentials: true,
    }),
};

export default DeliveryAPI;
