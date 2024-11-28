import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import testImg from "../static/images/testImg01.png";

function GoodsCard() {
  const [cardData, setCardData] = useState(["test1", "test2", "test3"]);
  return (
    <div
      className="row row-cols-1 row-cols-md-3 g-4"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        width: "100%",
      }}
    >
      <div
        className="card"
        style={{
          width: "300px", // 카드의 고정 너비
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <img
          src={testImg}
          className="card-img-top"
          alt="Card Example"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <div className="card-body" style={{ padding: "15px" }}>
          <p className="card-text" style={{ fontSize: "16px", color: "#333" }}>
            {cardData[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GoodsCard;
