import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartInfo from "./CartInfo";
import MypageAPI from "../apis/MypageAPI";
import ReviewModal from "../component/ReviewModal";
import InquireModal from "../component/InquireModal";

const MyInfo = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [purchaserOrderProducts, setPurchaserOrderProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [mypageInfo, setMypageInfo] = useState([]);
  const [reviewModal, setReviewModal] = useState(false);
  const [inquireModal, setInquireModal] = useState(false);
  const [inquireProducts, setInquireProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const toggleReviewModal = (product) => {
    setSelectedProduct(product);
    setReviewModal((prev) => !prev);
  };

  const toggleInquireModal = (product) => {
    setSelectedProduct(product);
    setInquireModal((prev) => !prev);
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  const fetchMypageInfo = async () => {
    try {
      const response = await MypageAPI.mypageInfo();
      setMypageInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchInquireInfo = async () => {
    try {
      const response = await MypageAPI.myInquireInfo();
      setInquireProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMypageInfo();
    fetchInquireInfo();
  }, []);

  useEffect(() => {
    if (mypageInfo.length > 0) {
      const info = mypageInfo.map((item) => ({
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
        purchaseNum: item.purchaseDTO.purchaseNum,
        goodsNum: item.goodsDTO.goodsNum,
        hasReview: item.reviewDTO?.reviewNum !== null,
        reviewContents: item.reviewDTO.reviewContents,
        rating: item.reviewDTO.rating,
        reviewNum: item.reviewDTO.reviewNum,
      }));
      setPurchaserOrderProducts(info);
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
                .slice(0, showMore ? purchaserOrderProducts.length : 3)
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

                    {product.hasReview ? (
                      <>
                        <button
                          onClick={() => toggleReviewModal(product)}
                          style={{
                            padding: "10px",
                            backgroundColor: "#007BFF",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          리뷰 수정
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => toggleReviewModal(product)}
                        style={{
                          padding: "10px",
                          backgroundColor: "#333",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        리뷰 작성
                      </button>
                    )}
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
            문의 현황
          </h4>
          {inquireProducts
            .slice(0, showMore ? inquireProducts.length : 3)
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
                <h5
                  style={{
                    color: "#555",
                    fontSize: "14px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {
                    new Date(product.inquireDTO.inquireDate)
                      .toISOString()
                      .split("T")[0]
                      .split("-")[0]
                  }
                  <p>년</p>
                  {
                    new Date(product.inquireDTO.inquireDate)
                      .toISOString()
                      .split("T")[0]
                      .split("-")[1]
                  }
                  <p>월</p>
                  {
                    new Date(product.inquireDTO.inquireDate)
                      .toISOString()
                      .split("T")[0]
                      .split("-")[2]
                  }
                  <p>일</p>
                </h5>
                <img
                  src={`http://localhost:8080/image?imageName=${product.goodsDTO.goodsMainStoreImage}`}
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
                  제품명 : {product.goodsDTO.goodsName}
                </p>
                <p style={{ margin: "5px 0", color: "#666" }}>
                  문의제목 : {product.inquireDTO.inquireContents}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    color: "#666",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  문의상태 :{" "}
                  {product.inquireDTO.inquireAnswer !== null && (
                    <>
                      <button
                        onClick={() => toggleInquireModal(product)}
                        style={{
                          marginLeft:"5px",
                          padding: "1px",
                          backgroundColor: "#333",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          
                        }}
                      >
                        답변보기
                      </button>
                    </>
                  )}
                  {product.inquireDTO.inquireAnswer === null && (
                    <>
                    <button
                      onClick={() => toggleInquireModal(product)}
                      style={{
                        marginLeft:"5px",
                        padding: "1px",
                        backgroundColor: "#333",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        
                      }}
                    >
                      문의수정
                    </button>
                  </>
                  )}
                </p>
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
      </main>
      <CartInfo isOpen={isCartOpen} toggleCart={toggleCart} />
      <ReviewModal
        isOpen={reviewModal}
        product={selectedProduct}
        onClose={() => setReviewModal(false)}
        fetchMypageInfo={fetchMypageInfo}
      />
      <InquireModal
        isOpen={inquireModal}
        product={selectedProduct}
        onClose={() => setInquireModal(false)}
        fetchInquireInfo={fetchInquireInfo}
      />
    </div>
  );
};

export default MyInfo;
