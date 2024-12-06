import axios from "axios";

const API_URL = "http://localhost:8080";

const goodsApi = {
  goodsList: (data) =>
    axios.get(`${API_URL}/members/goods/List`, {
      params: data,
      withCredentials: true,
    }),
  goodsImage: (data) =>
    axios.get(`${API_URL}/image`, {
      params: { data },
      withCredentials: true,
    }),
  goodsDetail: (data) =>
    axios.get(`${API_URL}/members/goods/detail`, {
      params: { data },
      withCredentials: true,
    }),
  goodsCount: () =>
    axios.get(`${API_URL}/members/goods/count`, {
      withCredentials: true,
    }),
};

export default goodsApi;
