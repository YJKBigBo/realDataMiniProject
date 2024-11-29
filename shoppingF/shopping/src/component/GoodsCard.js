import React, { useEffect, useState } from "react";
import goodsApi from "../apis/GoodsAPI";

function GoodsCard({
  goodsName,
  goodsPrice,
  goodsImage,
  goodsStoreImage,
  goodsContents,
}) {
  const [img, setImg] = useState();

  useEffect(() => {
    const fetchImage = async (goodsStoreImage) => {
      try {
        const response = await goodsApi.goodsImage(goodsStoreImage);
        console.log(response);
        setImg(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
  }, []);
  return (
    <div
      className="card"
      style={{
        width: "300px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* <img
        src={"http://loaclhost:8080/image?image=" + post.imageName}
        alt="image from spring"
      /> */}
      <img
        src={`http://localhost:8080/image?imageName=${goodsStoreImage}`}
        className="card-img-top"
        alt={goodsName}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div className="card-body" style={{ padding: "15px" }}>
        <h5
          className="card-title"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
          {goodsName}
        </h5>
        <p
          className="card-text"
          style={{ fontSize: "14px", color: "#666", margin: "10px 0" }}
        >
          {goodsContents}
        </p>
        <p
          className="card-text"
          style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}
        >
          ₩{goodsPrice?.toLocaleString() || "0"}
        </p>
        <button className="btn btn-primary" style={{ marginTop: "10px" }}>
          상품 상세 보기
        </button>
      </div>
    </div>
  );
}

export default GoodsCard;
