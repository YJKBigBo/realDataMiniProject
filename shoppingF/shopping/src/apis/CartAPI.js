import axios from "axios";

const API_URL = "http://localhost:8080";

const CartAPI = {
  addCart: (data) =>
    axios.post(`${API_URL}/members/cart/regist`, data, {
      withCredentials: true,
    }),

  cartList: () =>
    axios.get(`${API_URL}/members/cart/list`, { withCredentials: true }),

  updateCartQuantity: (goodsNum, memberNum, cartQty) =>
    axios.post(
      `${API_URL}/members/cart/updateQty`,
      {
        goodsNum,
        memberNum,
        cartQty,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ),

  getTotalQty: (goodsNum) =>
    axios.get(`${API_URL}/members/goods/totalQty`, {
      params: { goodsNum },
      withCredentials: true,
    }),
};

export default CartAPI;
