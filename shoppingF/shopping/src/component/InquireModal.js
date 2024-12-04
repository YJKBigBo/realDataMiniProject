import React, { useState, useEffect } from "react";
import InquireAPI from "../apis/InquireAPI";

const InquireModal = ({ isOpen, product, onClose, fetchInquireInfo }) => {
  if (!isOpen) return null;

  const inquireUpdate = async (data) => {
    try {
      await InquireAPI.updateInquire(data);
      alert("문의 수정이 완료되었습니다.");
      onClose();
      fetchInquireInfo();
    } catch (error) {
      console.error(error);
    }
  };

  const inquireUpdateSubmit = async (e) => {
    e.preventDefault();
    const inquireUpdateData = {
      inquireNum: product.inquireDTO.inquireNum,
      memberNum: product.inquireDTO.memberNum,
      goodsNum: product.inquireDTO.goodsNum,
      inquireSubject: e.target.inquireSubject.value,
      inquireContents: e.target.inquireContents.value,
      inquireKind: e.target.inquireKind.value,
      inquireDate: product.inquireDTO.inquireDate,
    };
    inquireUpdate(inquireUpdateData);
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
        {product.inquireDTO.inquireAnswer !== null && (
          <div style={{ marginBottom: "10px" }}>
            <textarea
              readOnly="readonly"
              name="reviewContents"
              placeholder="답변을 기다려주세요."
              defaultValue={product.inquireDTO.inquireAnswer}
              rows="5"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
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
          </div>
        )}

        {product.inquireDTO.inquireAnswer === null && (
          <>
            <form onSubmit={inquireUpdateSubmit}>
              <div style={{ marginBottom: "10px" }}>
                제목<input
                  type="text"
                  required="required"
                  name="inquireSubject"
                  placeholder="제목을 입력해주세요."
                  defaultValue={product.inquireDTO.inquireSubject}
                  rows="5"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />

                종류<input
                  type="text"
                  required="required"
                  name="inquireKind"
                  placeholder="종류를 입력해주세요."
                  defaultValue={product.inquireDTO.inquireKind}
                  rows="5"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />

                내용<textarea
                  required="required"
                  name="inquireContents"
                  placeholder="문의글을 입력해주세요."
                  defaultValue={product.inquireDTO.inquireContents}
                  rows="5"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <button
                type="submit"
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
                수정
              </button>
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
          </>
        )}
      </div>
    </div>
  );
};

export default InquireModal;
