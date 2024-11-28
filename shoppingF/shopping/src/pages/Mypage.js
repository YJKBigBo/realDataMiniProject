import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MyInfo from "../component/MyInfo";
import Navbar from "../component/NavBar";

import "../static/styles.css";

function Main() {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">

        <div id="layoutSidenav_content">
          <MyInfo />
        </div>
      </div>
    </div>
  );
}

export default Main;
