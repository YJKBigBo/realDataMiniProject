import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GoodsCard from "../component/GoodsCard.js";
import goodsApi from "../apis/GoodsAPI.js";

function Items() {
  const [gridColumns, setGridColumns] = useState("repeat(3, 1fr)");
  const [goodsList, setGoodsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGoods, setSelectedGoods] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const response = await goodsApi.goodsList();
        setGoodsList(response.data);
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

  const filteredGoods = goodsList.filter((goods) =>
    goods.goodsName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedGoods = filteredGoods.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredGoods.length / itemsPerPage);

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

      {/* 모달 정보창 */}
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
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>상품명 : {selectedGoods.goodsName}</h2>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
            
            <div style={{paddingTop:"5px", paddingBottom:"5px"}}></div>
            <p>상품상세 : {selectedGoods.goodsContents}</p>
            <div style={{paddingTop:"5px", paddingBottom:"5px"}}></div>
            <p>가격 : {selectedGoods.goodsPrice?.toLocaleString()} ₩</p>
            <div style={{paddingTop:"5px", paddingBottom:"5px"}}></div>
            <p>조회수 : {selectedGoods.visitCount}</p>
            <button
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              바로구매
            </button>
            <div style={{paddingTop:"5px", paddingBottom:"5px"}}></div>
            <button
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              장바구니
            </button>
            <div style={{paddingTop:"5px", paddingBottom:"5px"}}></div>
            <button
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
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
