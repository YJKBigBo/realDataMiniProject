import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MyInfo from "../component/MyInfo";
import Navbar from "../component/NavBar";
import Sidebar from "../component/SideBar";

import "../static/styles.css";

function Main() {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <MyInfo />
        </div>
      </div>
    </div>
  );
}

export default Main;
