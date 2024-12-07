import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import CartAPI from "../apis/CartAPI";
import PurchaseAPI from "../apis/PurchaseAPI";

const CartInfo = ({ isOpen, toggleCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [showAddressModal, setShowAddressModal] = useState(false);

  const fetchCart = async () => {
    try {
      const response = await CartAPI.cartList();
      console.log(response.data);
      setCartItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleCheckboxChange = (cartDTO) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(cartDTO)
        ? prevCheckedItems.filter((item) => item !== cartDTO)
        : [...prevCheckedItems, cartDTO]
    );
  };

  const handlePurchase = async () => {
    if (checkedItems.length === 0) {
      alert("구매할 상품을 선택하세요.");
      return;
    }
    setShowAddressModal(true);
  };

  const handleDelete = async () => {
    if (checkedItems.length === 0) {
      alert("삭제할 상품을 선택하세요.");
      return;
    }
    try {
      const goodsCartDTO = cartItems
        .filter((item) => checkedItems.includes(item.cartDTO))
        .map((item) => ({
          goodsDTO: item.goodsDTO,
          cartDTO: item.cartDTO,
        }));

      await CartAPI.deleteCart(goodsCartDTO);

      setCheckedItems([]);
      fetchCart();

      alert("삭제가 완료되었습니다.");
    } catch (error) {
      console.error(error);
      alert("삭제가 실패했습니다.");
    }
  };

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

  const deliverySubmit = async (e) => {
    e.preventDefault();

    const purchaseData = {
      deliveryAddr: e.target.deliveryAddr.value,
      deliveryAddrDetail: e.target.deliveryAddrDetail.value,
      deliveryPost: e.target.deliveryPost.value,
      deliveryPhone: e.target.deliveryPhone.value,
      message: e.target.message.value,
    };

    try {
      const goodsCartDTO = cartItems
        .filter((item) => checkedItems.includes(item.cartDTO))
        .map((item) => ({
          goodsDTO: item.goodsDTO,
          cartDTO: item.cartDTO,
        }));

      const purchaseCartDTO = {
        goodsCartDTO,
        purchaseDTO: purchaseData,
      };

      const response = await PurchaseAPI.cartPurchase(purchaseCartDTO);

      setCartItems((prevItems) =>
        prevItems.filter(
          (item) => !checkedItems.some((checked) => checked === item.cartDTO)
        )
      );

      setCheckedItems([]);
      setShowAddressModal(false);

      alert(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("주문이 실패했습니다.");
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

                <input
                  type="checkbox"
                  name="checkItem"
                  checked={checkedItems.includes(item.cartDTO)}
                  onChange={() => handleCheckboxChange(item.cartDTO)}
                  style={{ marginLeft: "10px" }}
                />
              </div>
            </li>
          ))}
        </ul>
        {cartItems.length === 0 && <p>장바구니가 비어 있습니다.</p>}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button
            onClick={handlePurchase}
            style={{
              flex: 1,
              backgroundColor: "#28a745",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              marginRight: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#218838")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#28a745")}
          >
            구매하기
          </button>

          <button
            onClick={handleDelete}
            style={{
              flex: 1,
              backgroundColor: "#dc3545",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              marginLeft: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#c82333")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#dc3545")}
          >
            삭제하기
          </button>
        </div>

        {/* 주소 입력 모달 */}
        {showAddressModal && (
          <div
            className="modal"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setShowAddressModal(false)}
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                width: "600px",
                textAlign: "center",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>배송지 입력</h2>
              <form onSubmit={deliverySubmit}>
                <input
                  type="text"
                  placeholder="배송지를 입력하세요"
                  name="deliveryAddr"
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />

                <input
                  type="text"
                  placeholder="배송지 상세를 입력하세요"
                  name="deliveryAddrDetail"
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />

                <input
                  type="text"
                  placeholder="우편번호를 입력하세요"
                  name="deliveryPost"
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />

                <input
                  type="text"
                  placeholder="전화번호를 입력하세요"
                  name="deliveryPhone"
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />

                <input
                  type="text"
                  placeholder="기타 정보를 입력하세요"
                  name="message"
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />
                <button type="submit" className="btn btn-primary">
                  주문하기
                </button>
              </form>
              <button
                className="btn btn-secondary"
                onClick={() => setShowAddressModal(false)}
              >
                닫기
              </button>
            </div>
          </div>
        )}
      </div>
    </CSSTransition>
  );
};

export default CartInfo;
