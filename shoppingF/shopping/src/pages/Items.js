import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GoodsCard from "../component/GoodsCard.js";
import goodsApi from "../apis/GoodsAPI.js";

function Items() {
  const [gridColumns, setGridColumns] = useState("repeat(3, 1fr)");
  const [goodsList, setGoodsList] = useState([]);

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
              onChange={(e) => console.log("Search term:", e.target.value)}
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
            {goodsList.length > 0 ? (
              goodsList.map((goods) => (
                <GoodsCard
                  key={goods.goodsNum}
                  goodsName={goods.goodsName}
                  goodsPrice={goods.goodsPrice}
                  goodsImage={goods.goodsMainImage}
                  goodsStoreImage={goods.goodsMainStoreImage}
                  goodsContents={goods.goodsContents}
                />
              ))
            ) : (
              <div>상품이 없습니다.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;