import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "../component/NavBar.js";
import Sidebar from "../component/SideBar.js";
import GoodsCard from "../component/GoodsCard.js";

import "../static/styles.css";

function Items() {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <div style={{ padding: "50px", display: "flex", gap: "20px" }}>
            <GoodsCard />
            <GoodsCard />
            <GoodsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
