import axios from "axios";

const API_URL = "http://localhost:8080";

const PointAPI = {
  pointCharge: () =>
    axios.get(`${API_URL}/members/point/charge`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }),

  sendCharge: (data) =>
    axios.post(`${API_URL}/point/INIstdpay_pc_return`, data, {
      withCredentials: true,
    }),

  charge: (data) =>
    axios.post(`${API_URL}/point`, data, {
      withCredentials: true,
    }),
};

export default PointAPI;
