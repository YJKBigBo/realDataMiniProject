import Main from "./pages/Main";
import Items from "./pages/Items";
import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/item" element={<Items />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
