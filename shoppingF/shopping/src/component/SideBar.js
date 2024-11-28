import React from "react";
import "../static/styles.css";

function Sidebar({ setCurrentPage }) {
  const sidebarStyle = {
    height: "100vh",
    position: "fixed",
    width: "250px",
  };

  return (
    <div id="layoutSidenav_nav" style={sidebarStyle}>
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">공통 항목</div>
            <a className="nav-link" onClick={() => setCurrentPage("main")}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              메인
            </a>
            <a className="nav-link" onClick={() => setCurrentPage("items")}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              상품
            </a>
            <div className="sb-sidenav-menu-heading">마이페이지</div>
            <a className="nav-link" onClick={() => setCurrentPage("mypage")}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns"></i>
              </div>
              마이페이지
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
