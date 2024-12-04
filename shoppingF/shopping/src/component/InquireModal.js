import React from "react";
import ReviewAPI from "../apis/ReviewAPI";

const InquireModal = ({ isOpen, product, onClose, fetchMypageInfo }) => {
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
      reviewNum: product.reviewNum,
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
        <h4>문의</h4>
        <form onSubmit={reviewSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              문의:
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

export default InquireModal;
