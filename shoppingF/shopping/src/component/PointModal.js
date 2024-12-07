import React, { useState } from "react";
import PointAPI from "../apis/PointAPI";
import Payment from "./Payment";

const PointModal = ({ isOpen, onClose }) => {
  const [point, setPoint] = useState("");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [iniData, setIniData] = useState(null);

  const handlePointChange = (e) => {
    const value = e.target.value;
    if (value >= 0 || value === "") {
      setPoint(value);
    }
  };

  const Submit = async () => {
    try {
      const response = await PointAPI.charge({ memberPoint: point });
      alert("포인트 충전 완료")
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
        const paymentUrl = "http://localhost:8080/members/point/charge";
        const params = { memberPoint: point };

        const form = document.createElement("form");
        form.method = "GET";
        form.action = paymentUrl;
        form.target = "_blank";

        Object.keys(params).forEach(key => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = params[key];
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    } catch (error) {
        console.error(error);
    }
};

  if (!isOpen && !isPaymentOpen) return null;

  return (
    <>
      {/* 포인트 충전 모달 */}
      {isOpen && !isPaymentOpen && (
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
              width: "300px",
              textAlign: "center",
            }}
          >
            <h3>포인트 충전</h3>
            <input
              type="number"
              name="memberPoint"
              value={point}
              onChange={handlePointChange}
              placeholder="충전할 포인트 입력"
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              충전
            </button>
            <button
              onClick={Submit}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              바로충전
            </button>
            <button
              onClick={onClose}
              style={{
                padding: "10px 20px",
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              취소
            </button>
          </div>
        </div>
      )}

      {/* 결제 페이지 모달 */}
      {isPaymentOpen && (
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
            zIndex: 1100,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "600px",
              textAlign: "center",
            }}
          >
            <Payment iniData={iniData} />
            <button
              onClick={() => setIsPaymentOpen(false)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PointModal;
