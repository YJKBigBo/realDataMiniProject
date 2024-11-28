import Main from "./pages/Main";
import Items from "./pages/Items";
import Mypage from "./pages/Mypage";
import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/item" element={<Items />} />
          <Route path="/Mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
