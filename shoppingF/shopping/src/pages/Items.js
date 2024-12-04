import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GoodsCard from "../component/GoodsCard.js";
import goodsApi from "../apis/GoodsAPI.js";
import CartAPI from "../apis/CartAPI.js";
import PurchaseAPI from "../apis/PurchaseAPI.js";
import WishAPI from "../apis/WishAPI.js";
import { FaHeart } from "react-icons/fa";
import ReviewAPI from "../apis/ReviewAPI.js";

function Items() {
  const [gridColumns, setGridColumns] = useState("repeat(3, 1fr)");
  const [goodsList, setGoodsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGoods, setSelectedGoods] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [isFavorited, setIsFavorited] = useState();
  const itemsPerPage = 3;
  const [reviews, setReviews] = useState([]);
  const [reviewsView, setReviewsView] = useState(false);

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const response = await goodsApi.goodsList();
        const filteredGoods = response.data.filter(
          (goods) => goods.totalQty >= 1
        );
        setGoodsList(filteredGoods);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGoods();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setGridColumns(window.innerWidth <= 768 ? "1fr" : "repeat(3, 1fr)");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addCart = async (goodsNum) => {
    console.log(goodsNum);
    try {
      const data = await CartAPI.addCart({ goodsNum });
      console.log(data);
      alert("장바구니에 추가되었습니다.");
    } catch (error) {
      console.error(error);
      alert("장바구니 추가에 실패했습니다.");
    }
  };

  const filteredGoods = goodsList.filter((goods) =>
    goods.goodsName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedGoods = filteredGoods.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredGoods.length / itemsPerPage);

  const deliverySubmit = async (e) => {
    e.preventDefault();

    const purchaseData = {
      purchasePrice: selectedGoods.goodsPrice,
      deliveryAddr: e.target.deliveryAddr.value,
      deliveryAddrDetail: e.target.deliveryAddrDetail.value,
      deliveryPost: e.target.deliveryPost.value,
      deliveryPhone: e.target.deliveryPhone.value,
      message: e.target.message.value,
      goodsNum: selectedGoods.goodsNum,
      goodsUnitPrice: selectedGoods.goodsPrice,
      purchaseQty: e.target.purchaseQty.value,
    };

    try {
      await PurchaseAPI.deliveryInfo(purchaseData);
      alert("주문이 완료되었습니다.");
      setShowAddressModal(false);
    } catch (error) {
      console.error(error);
      alert("주문 처리 중 문제가 발생했습니다.");
    }
  };

  const wishForItem = async (goodsNum) => {
    try {
      const response = await WishAPI.fetchWish(goodsNum);
      console.log(response.data);
      if (response.data >= 1) {
        setIsFavorited(true);
      } else {
        setIsFavorited(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const registWish = async (goodsNum) => {
    try {
      await WishAPI.registWish(goodsNum);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWish = async (goodsNum) => {
    try {
      await WishAPI.deleteWish(goodsNum);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReviews = async (goodsNum) => {
    try {
      const response = await ReviewAPI.reviewList(goodsNum);
      setReviews(response.data);
      setReviewsView(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sb-nav-fixed">
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <div
            className="input-group mb-3"
            style={{
              paddingLeft: "80px",
              paddingRight: "110px",
              paddingTop: "30px",
            }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="상품을 검색하세요."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <button className="btn btn-outline-secondary" type="button">
              검색
            </button>
          </div>

          <div
            style={{
              padding: "50px",
              display: "grid",
              gridTemplateColumns: gridColumns,
              gap: "20px",
              justifyItems: "center",
            }}
          >
            {paginatedGoods.length > 0 ? (
              paginatedGoods.map((goods) => (
                <GoodsCard
                  key={goods.goodsNum}
                  goodsName={goods.goodsName}
                  goodsPrice={goods.goodsPrice}
                  goodsImage={goods.goodsMainImage}
                  goodsMainStoreImage={goods.goodsMainStoreImage}
                  goodsDetailImage={goods.goodsDetailImage}
                  goodsDetailStoreImage={goods.goodsDetailStoreImage}
                  visitCount={goods.visitCount}
                  goodsContents={goods.goodsContents}
                  onDetailClick={(goods) => {
                    setSelectedGoods(goods);
                    setShowModal(true);
                  }}
                  goodsNum={goods.goodsNum}
                  wishForItem={() => {
                    wishForItem(goods.goodsNum);
                    setSelectedGoods(goods);
                  }}
                />
              ))
            ) : (
              <div>상품이 없습니다.</div>
            )}
          </div>

          <div
            className="pagination-container"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              className="pagination"
              style={{ display: "inline-flex", gap: "10px" }}
            >
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`btn ${
                    currentPage === index + 1
                      ? "btn-primary"
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 상품 상세 모달 */}
      {showModal && selectedGoods && (
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
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "1000px",
              height: "600px",
              overflow: "hidden",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                height: "100%",
                overflowY: "auto",
                paddingRight: "10px",
              }}
            >
              <h2>
                상품명: {selectedGoods.goodsName}
                <FaHeart
                  onClick={() => {
                    if (isFavorited) {
                      deleteWish(selectedGoods.goodsNum);
                    } else {
                      registWish(selectedGoods.goodsNum);
                    }
                    setIsFavorited(!isFavorited);
                  }}
                  style={{
                    marginLeft: "10px",
                    color: isFavorited ? "red" : "gray",
                    cursor: "pointer",
                  }}
                />
              </h2>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src={`http://localhost:8080/image?imageName=${selectedGoods.goodsMainStoreImage}`}
                  alt={selectedGoods.goodsName}
                  style={{
                    width: "30%",
                    height: "auto",
                    maxHeight: "150px",
                    objectFit: "contain",
                  }}
                />
                {selectedGoods.goodsDetailStoreImage.split("/").map(
                  (imageName, index) =>
                    imageName.trim() && (
                      <img
                        key={index}
                        src={`http://localhost:8080/image?imageName=${imageName}`}
                        alt={`Detail ${index + 1}`}
                        style={{
                          width: "30%",
                          height: "auto",
                          maxHeight: "150px",
                          objectFit: "contain",
                        }}
                      />
                    )
                )}
              </div>
              <p>상품상세: {selectedGoods.goodsContents}</p>
              <p>가격: {selectedGoods.goodsPrice?.toLocaleString()} ₩</p>
              <p>조회수: {selectedGoods.visitCount}</p>
              {reviews.length > 0 && reviewsView === true && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <h3>리뷰 목록</h3>
                  <table
                    className="table table-bordered"
                    style={{
                      marginTop: "10px",
                      width: "80%",
                      margin: "0 auto",
                    }}
                  >
                    <thead>
                      <tr>
                        <th>내용</th>
                        <th>평점</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reviews.map((review, index) => (
                        <tr key={index}>
                          <td>{review.reviewContents}</td>
                          <td>{review.rating}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {reviewsView === false && (
                <>
                  <button
                    style={{ width: "100%" }}
                    className="btn btn-secondary"
                    onClick={() => {
                      fetchReviews(selectedGoods.goodsNum);
                    }}
                  >
                    리뷰보기
                  </button>
                  <div
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  ></div>
                  <button
                    style={{ width: "100%" }}
                    className="btn btn-secondary"
                    onClick={() => {
                      addCart(selectedGoods.goodsNum);
                    }}
                  >
                    장바구니
                  </button>
                  <div
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  ></div>
                  <button
                    style={{ width: "100%" }}
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowModal(false);
                      setShowAddressModal(true);
                    }}
                  >
                    바로구매
                  </button>
                  <div
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  ></div>
                  <button
                    style={{ width: "100%" }}
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    닫기
                  </button>
                </>
              )}
              {reviewsView === true && (
                <>
                  <button
                    style={{ width: "100%" }}
                    className="btn btn-secondary"
                    onClick={() => setReviewsView(false)}
                  >
                    리뷰 닫기
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

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
                placeholder="상품 갯수를 입력하세요"
                name="purchaseQty"
                className="form-control"
                style={{ marginBottom: "10px" }}
              />

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
  );
}

export default Items;
