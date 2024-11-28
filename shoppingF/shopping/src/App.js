import React, { useState, Suspense, lazy, useEffect } from "react";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter 임포트
import Sidebar from "./component/SideBar";
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

  return (
    <BrowserRouter>
      {" "}
      {/* Router로 App을 감싸기 */}
      <div style={{ display: "flex" }}>
        <div id="layoutSidenav">
          <Sidebar setCurrentPage={setCurrentPage} />
        </div>
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
