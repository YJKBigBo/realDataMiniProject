import React, { useState, useEffect } from "react";
import DeliveryAPI from "../apis/DeliveryAPI";

const DeliveryModal = ({ isOpen, deliveryInfo, deliveryDetailInfo, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
        zIndex: 1000,
        width: "400px",
        textAlign: "center",
      }}
    >
      <h3>배송 정보</h3>
      <p>제품명: {deliveryInfo.productName}</p>
      <p>
        배송 주소: {deliveryInfo.deliveryAddr}
      </p>
      <p>상세 주소: {deliveryInfo.deliveryAddrDetail}</p>
      <p>주문 상태: {deliveryDetailInfo.deliveryStatus}</p>
      <button
        onClick={onClose}
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        닫기
      </button>
    </div>
  );
};

export default DeliveryModal;
