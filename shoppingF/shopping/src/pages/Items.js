import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../component/NavBar.js";
import Sidebar from "../component/SideBar.js";
import GoodsCard from "../component/GoodsCard.js";

function Items() {
  const [gridColumns, setGridColumns] = useState("repeat(3, 1fr)"); // 기본 3열

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setGridColumns("1fr");
      } else {
        setGridColumns("repeat(3, 1fr)");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
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
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              검색
            </button>
          </div>
          <div
            style={{
              padding: "50px",
              display: "grid",
              gridTemplateColumns: gridColumns, // 동적으로 열 수 조정
              gap: "20px",
              justifyItems: "center", // 카드 수평 중앙 정렬
            }}
          >
            <GoodsCard />
            <GoodsCard />
            <GoodsCard />
            <GoodsCard />
            <GoodsCard />
            <GoodsCard />
          </div>
          <nav
            aria-label="Page navigation example"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Items;
