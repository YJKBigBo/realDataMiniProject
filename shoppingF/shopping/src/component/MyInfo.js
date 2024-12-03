import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartInfo from "./CartInfo";
import MypageAPI from "../apis/MypageAPI";
import ReviewAPI from "../apis/ReviewAPI";

const ReviewModal = ({ isOpen, product, onClose, fetchMypageInfo }) => {
  if (!isOpen) return null;

  const reviewRegist = async (reviewData) => {
    try {
      await ReviewAPI.reviewRegist(reviewData);
      alert("리뷰 등록 혹은 수정을 완료했습니다.");
      onClose();
      fetchMypageInfo();
    } catch (error) {
      console.log(error);
    }
  };

  const reviewDelete = async () => {
    console.log(product);
    const reviewData = {
      goodsNum: product.goodsNum,
      purchaseNum: product.purchaseNum,
      reviewNum: product.reviewNum
    };
    try {
      await ReviewAPI.reviewDelete(reviewData);
      alert("리뷰 삭제를 완료했습니다.");
      onClose();
      fetchMypageInfo();
    } catch (error) {
      console.log(error);
    }
  };

  const reviewSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    const reviewData = {
      rating: e.target.rating.value,
      reviewContents: e.target.reviewContents.value,
      goodsNum: product.goodsNum,
      purchaseNum: product.purchaseNum,
    };
    reviewRegist(reviewData);
  };

  return (
    <div
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
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h4>리뷰</h4>
        <form onSubmit={reviewSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              평점:
              <select
                name="rating"
                defaultValue={product.rating}
                style={{ marginLeft: "10px" }}
              >
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <textarea
              name="reviewContents"
              placeholder="리뷰를 작성하세요"
              defaultValue={product.reviewContents}
              rows="5"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {product.reviewContents ? (
            <>
              <button
              type="submit"
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              수정
            </button>

              <button
                type="button"
                onClick={() => reviewDelete()}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                삭제
              </button>
            </>
          ) : (
            <button
              type="submit"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              제출
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            style={{
              marginLeft: "10px",
              backgroundColor: "gray",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            취소
          </button>
        </form>
      </div>
    </div>
  );
};

const MyInfo = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [purchaserOrderProducts, setPurchaserOrderProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [mypageInfo, setMypageInfo] = useState([]);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const toggleReviewModal = (product) => {
    setSelectedProduct(product);
    setIsReviewModalOpen((prev) => !prev);
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

  useEffect(() => {
    fetchMypageInfo();
  }, []);

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
        purchaseNum: item.purchaseDTO.purchaseNum,
        goodsNum: item.goodsDTO.goodsNum,
        hasReview: item.reviewDTO?.reviewNum !== null,
        reviewContents: item.reviewDTO.reviewContents,
        rating: item.reviewDTO.rating,
        reviewNum: item.reviewDTO.reviewNum,
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
      </main>
      <CartInfo isOpen={isCartOpen} toggleCart={toggleCart} />
      <ReviewModal
        isOpen={isReviewModalOpen}
        product={selectedProduct}
        onClose={() => setIsReviewModalOpen(false)}
        fetchMypageInfo={fetchMypageInfo}
      />
    </div>
  );
};

export default MyInfo;
