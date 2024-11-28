import React from 'react';
import '../static/styles.css';

function Sidebar() {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">공통 항목</div>
                        <a className="nav-link" href="/">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            메인
                        </a>
                        <a className="nav-link" href="/">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            상품
                        </a>
                        <div className="sb-sidenav-menu-heading">마이페이지</div>
                        <a className="nav-link collapsed" href="/product/regist" data-bs-toggle="collapse">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            마이페이지
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;