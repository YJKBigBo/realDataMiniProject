import axios from "axios";

const API_URL = "http://localhost:8080";

const WishAPI = {
  fetchWish: (goodsNum) =>
    axios.get(`${API_URL}/members/goods/wish`, {
      params: { goodsNum },
      withCredentials: true,
    }),

  registWish: (goodsNum) =>
    axios.post(
      `${API_URL}/members/goods/wish/regist`,
      { goodsNum },
      { withCredentials: true }
    ),

    deleteWish: (goodsNum) =>
      axios.post(
        `${API_URL}/members/goods/wish/delete`,
        {goodsNum},
        {withCredentials: true}
      ),
};

export default WishAPI;
