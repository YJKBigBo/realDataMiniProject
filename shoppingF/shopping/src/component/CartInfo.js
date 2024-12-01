import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import CartAPI from "../apis/CartAPI";

const CartInfo = ({ isOpen, toggleCart }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await CartAPI.cartList();
        console.log(response.data);
        setCartItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCart();
  }, []);

  const cartStyle = {
    position: "fixed",
    top: 50,
    right: 0,
    height: "100%",
    width: "300px",
    backgroundColor: "white",
    boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.2)",
    padding: "1rem",
    transform: "translateX(100%)",
    transition: "transform 300ms ease-in-out",
  };

  const cartVisibleStyle = {
    ...cartStyle,
    transform: "translateX(0)",
  };

  const increaseQuantity = async (goodsNum, memberNum, currentQty) => {
    try {
      const response = await CartAPI.getTotalQty(goodsNum);
      const totalQty = response.data;
      if (currentQty + 1 > totalQty) {
        alert("재고 수량을 초과할 수 없습니다.");
        return;
      }

      const updatedQty = currentQty + 1;
      await CartAPI.updateCartQuantity(goodsNum, memberNum, updatedQty);

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.cartDTO.goodsNum === goodsNum
            ? { ...item, cartDTO: { ...item.cartDTO, cartQty: updatedQty } }
            : item
        )
      );
    } catch (error) {
      console.error(error);
      alert("수량 증가에 실패했습니다.");
    }
  };

  const decreaseQuantity = async (goodsNum, memberNum, currentQty) => {
    if (currentQty <= 1) {
      alert("수량은 1개 미만으로 줄일 수 없습니다.");
      return;
    }

    try {
      const updatedQty = currentQty - 1;

      await CartAPI.updateCartQuantity(goodsNum, memberNum, updatedQty);

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.cartDTO.goodsNum === goodsNum
            ? { ...item, cartDTO: { ...item.cartDTO, cartQty: updatedQty } }
            : item
        )
      );
    } catch (error) {
      console.error(error);
      alert("수량 감소에 실패했습니다.");
    }
  };

  return (
    <CSSTransition in={isOpen} timeout={300} classNames="cart" unmountOnExit>
      <div style={isOpen ? cartVisibleStyle : cartStyle}>
        <button
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={toggleCart}
        >
          X
        </button>
        <h2>장바구니</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item) => (
            <li
              key={item.cartDTO.goodsNum}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              {/* 상품 이미지 */}
              <img
                src={`http://localhost:8080/image?imageName=${item.goodsDTO.goodsMainStoreImage}`}
                alt={item.goodsDTO.goodsName}
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
              />
              {/* 상품 이름 */}
              <span style={{ flex: 1 }}>{item.goodsDTO.goodsName}</span>
              <div>
                {/* 수량 증가 감소 버튼 */}
                <button
                  onClick={() =>
                    increaseQuantity(
                      item.cartDTO.goodsNum,
                      item.cartDTO.memberNum,
                      item.cartDTO.cartQty
                    )
                  }
                  style={{
                    margin: "0 5px",
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "5px",
                  }}
                >
                  +
                </button>

                <span style={{ margin: "0 10px", fontWeight: "bold" }}>
                  {item.cartDTO.cartQty}
                </span>

                <button
                  onClick={() =>
                    decreaseQuantity(
                      item.cartDTO.goodsNum,
                      item.cartDTO.memberNum,
                      item.cartDTO.cartQty
                    )
                  }
                  style={{
                    margin: "0 5px",
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "5px",
                  }}
                >
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
        {cartItems.length === 0 && <p>장바구니가 비어 있습니다.</p>}
      </div>
    </CSSTransition>
  );
};

export default CartInfo;
