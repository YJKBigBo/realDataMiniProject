import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Goods from "../component/Goods.js";
import Carousel from "../component/Carousel.js";
import GoodsAPI from "../apis/GoodsAPI.js";

import "../static/styles.css";

function Main() {
  const [gridColumns, setGridColumns] = useState("repeat(3, 1fr)");
  const [activeCategory, setActiveCategory] = useState("topSelling");
  const [topSellingGoods, setTopSellingGoods] = useState([]);

  const goodsCount = async () => {
    try {
      const response = await GoodsAPI.goodsCount();
      setTopSellingGoods(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    goodsCount();
  }, []);

  // 샘플 데이터
  const wishlistProducts = [6, 7, 8, 9, 10];

  // 활성화된 카테고리의 상품들 (최대 3개로 제한)
  const displayedProducts =
    activeCategory === "topSelling"
      ? topSellingGoods.slice(0, 3)
      : wishlistProducts.slice(0, 3);

  useEffect(() => {
    const handleResize = () => {
      setGridColumns(window.innerWidth <= 768 ? "1fr" : "repeat(3, 1fr)");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sb-nav-fixed">
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <Carousel />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            <h2 style={{ textAlign: "center" }}>
              {activeCategory === "topSelling"
                ? "가장 많이 판매된 상품"
                : "찜 목록 상품"}
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
              gap: "10px",
            }}
          >
            <button
              className={`btn btn-${
                activeCategory === "topSelling" ? "primary" : "secondary"
              }`}
              onClick={() => setActiveCategory("topSelling")}
            >
              가장 많이 판매된 상품
            </button>
            <button
              className={`btn btn-${
                activeCategory === "wishlist" ? "primary" : "secondary"
              }`}
              onClick={() => setActiveCategory("wishlist")}
            >
              찜 목록 상품
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
            {displayedProducts.map((goods) => (
              <Goods
                key={goods.goodsNum}
                goodsName={goods.goodsName}
                goodsPrice={goods.goodsPrice}
                goodsImage={goods.goodsMainImage}
                goodsMainStoreImage={goods.goodsMainStoreImage}
                goodsDetailImage={goods.goodsDetailImage}
                goodsDetailStoreImage={goods.goodsDetailStoreImage}
                visitCount={goods.visitCount}
                goodsContents={goods.goodsContents}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
