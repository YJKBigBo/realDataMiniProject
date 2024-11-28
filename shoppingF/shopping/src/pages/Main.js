import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "../component/NavBar.js";
import GoodsCard from "../component/GoodsCard.js";
import Carousel from "../component/Carousel.js";

import "../static/styles.css";

function Main() {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
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
            <h2 style={{ textAlign: "center" }}>현재 가장 인기있는 상품</h2>
          </div>
          <div style={{ padding: "50px", display: "flex", gap: "20px" }}>
            <GoodsCard />
            <GoodsCard />
            <GoodsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
