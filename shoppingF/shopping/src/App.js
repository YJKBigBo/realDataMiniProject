import React, { useState, Suspense, lazy, useEffect } from 'react';


const Login = lazy(() => import("./Login"));
const Signup = lazy(() => import("./SignUp"));
const Items = lazy(() => import("./pages/Items"));
const Mypage = lazy(() => import("./pages/Mypage"));
const Main = lazy(() => import("./pages/Main"));

function App() {
  const [currentPage, setCurrentPage] = useState("loading");

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await loginApi.sessionCheck();
        if (response.data.authenticated) {
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
      default:
        return <div>Loading...</div>;
    }
  };
  return (
    <div>
      <div
        className="main-container"
        style={{ textAlign: "center", padding: "20px" }}
      >
        <Suspense fallback={<div>Loading...</div>}>{renderContent()}</Suspense>
      </div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/item" element={<Items />} />
          <Route path="/Mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
