import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartInfo from "./CartInfo";
import testImg from "../static/images/testImg01.png";
import MypageAPI from "../apis/MypageAPI";

const MyInfo = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [purchaserOrderProducts, setPurchaserOrderProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [mypageInfo, setMypageInfo] = useState([]);
  const navigate = useNavigate();
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const fetchMypageInfo = async () => {
    try {
      const response = await MypageAPI.mypageInfo();
      setMypageInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMypageInfo();
  }, []);

  const renderOrderStatus = (status) => {
    const statusMap = {
      pending: "대기 중",
      shipped: "배송 중",
      delivered: "배송 완료",
      canceled: "취소됨",
    };
    return statusMap[status] || "알 수 없음";
  };

  useEffect(() => {
    if (mypageInfo.length > 0) {
      const transformedData = mypageInfo.map((item) => ({
        imgUrl: item.goodsDTO.goodsMainStoreImage,
        productName: item.goodsDTO.goodsName,
        deliveryAddr: item.purchaseDTO.deliveryAddr,
        deliveryAddrDetail: item.purchaseDTO.deliveryAddrDetail,
        orderDate: new Date(item.purchaseDTO.purchaseDate)
          .toISOString()
          .split("T")[0]
          .split("-"),
        orderStatus: item.purchaseDTO.purchaseStatus,
        quantity: item.purchaseListDTO.purchaseQty,
        price: item.purchaseListDTO.goodsUnitPrice,
      }));
      setPurchaserOrderProducts(transformedData);
    }
  }, [mypageInfo]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        position: "relative",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <button
        onClick={toggleCart}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "0.5rem 1rem",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        {isCartOpen ? "장바구니 닫기" : "장바구니 열기"}
      </button>
      <main
        style={{ flex: 1, width: "90%", maxWidth: "800px", margin: "20px 0" }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <h4
              style={{ borderBottom: "2px solid #ddd", paddingBottom: "10px" }}
            >
              구매목록
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              {purchaserOrderProducts
                .slice(0, showMore ? undefined : 2)
                .map((product, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: "20px",
                      padding: "10px 0",
                      borderBottom: "1px solid #eee",
                      width: "100%",
                      maxWidth: "800px",
                      textAlign: "center",
                    }}
                  >
                    <h5 style={{ color: "#555", fontSize: "14px" }}>
                      {product.orderDate[0]}년 {product.orderDate[1]}월{" "}
                      {product.orderDate[2]} 일
                    </h5>
                    <img
                      src={`http://localhost:8080/image?imageName=${product.imgUrl}`}
                      alt={product.productName}
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "5px",
                        objectFit: "cover",
                        margin: "10px 0",
                      }}
                    />
                    <p
                      style={{
                        margin: "5px 0",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      제품명 : {product.productName}
                    </p>
                    <p style={{ margin: "5px 0", color: "#666" }}>
                      수량 : {product.quantity}
                    </p>
                    <p style={{ margin: "5px 0", color: "#666" }}>
                      가격 : {product.price.toLocaleString()}원
                    </p>
                    <p style={{ margin: "5px 0", color: "#666" }}>
                      주문상태 : {product.orderStatus}
                    </p>
                    {/* <p style={{ margin: "5px 0", color: "#666" }}>
                      배송현황 : {product.deliveryAddr}{" "}
                      {product.deliveryAddrDetail}
                      <button
                        onClick={() => navigate(`/mypage/delivery/${index}`)}
                        style={{
                          padding: "5px 10px",
                          backgroundColor: "black",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "12px",
                        }}
                      >
                        자세히
                      </button>
                    </p> */}
                  </div>
                ))}
              {!showMore && (
                <button
                  onClick={handleShowMore}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "black",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}
                >
                  더보기
                </button>
              )}
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h4 style={{ borderBottom: "2px solid #ddd", paddingBottom: "10px" }}>
            배송현황
          </h4>
          <p style={{ color: "#666", marginTop: "10px" }}>
            배송 정보가 여기에 표시됩니다.
          </p>
        </div>
      </main>
      <CartInfo isOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  );
};

export default MyInfo;
