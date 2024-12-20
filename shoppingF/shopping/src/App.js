import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, Suspense, lazy, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./component/SideBar";
import Navbar from "./component/NavBar"
import loginApi from "./apis/LoginAPI";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Items = lazy(() => import("./pages/Items"));
const Mypage = lazy(() => import("./pages/Mypage"));
const Main = lazy(() => import("./pages/Main"));

function App() {
  const [currentPage, setCurrentPage] = useState("loading");

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await loginApi.sessionCheck();
        if (response.data === true) {
          setCurrentPage("main");
        } else {
          setCurrentPage("login");
        }
      } catch (error) {
        console.error("세션 확인 오류:", error);
        setCurrentPage("login");
      }
    };
    checkSession();
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case "login":
        return (
          <Login
            onSignupClick={() => setCurrentPage("signup")}
            onLoginSuccess={() => setCurrentPage("main")}
          />
        );
      case "signup":
        return <Signup onLoginClick={() => setCurrentPage("login")} />;
      case "main":
        return <Main onLogout={() => setCurrentPage("login")} />;
      case "items":
        return <Items onLogout={() => setCurrentPage("login")} />;
      case "mypage":
        return <Mypage onLogout={() => setCurrentPage("login")} />;
      default:
        return <div>Loading...</div>;
    }
  };

  const isLoggedIn = ["main", "items", "mypage"].includes(currentPage);

  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        {isLoggedIn && (
          <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
              <Sidebar setCurrentPage={setCurrentPage} />
            </div>
          </div>
        )}
        <div
          className="main-container"
          style={{ flex: 1, textAlign: "center", padding: "20px" }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            {renderContent()}
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
