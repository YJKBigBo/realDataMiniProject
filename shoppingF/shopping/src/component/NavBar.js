import React, { useState } from "react";
import LoginAPI from "../apis/LoginAPI";
import MemberApi from "../apis/MemberAPI";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    memberName: "",
    memberEmail: "",
    memberAddr: "",
    memberAddrDetail: "",
    memberPost: "",
    memberPhone1: "",
  });

  const handleLogout = async () => {
    try {
      await LoginAPI.logout();
      window.location.href = "/";
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSave = async () => {
    console.log(formData);
    try {
      const response = await MemberApi.updateInfo(formData);
      alert("정보수정을 완료했습니다.");
      toggleModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="/">
          쇼핑몰
        </a>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
        >
          <i className="fas fa-bars"></i>
        </button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={toggleModal}>
                  정보 수정
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">정보 수정</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={toggleModal}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="memberName" className="form-label">
                      이름
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="memberName"
                      placeholder="이름 입력"
                      value={formData.memberName}
                      onChange={(e) =>
                        setFormData({ ...formData, memberName: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="memberEmail" className="form-label">
                      이메일
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="memberEmail"
                      placeholder="이메일 입력"
                      value={formData.memberEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          memberEmail: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="memberAddr" className="form-label">
                      주소
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="memberAddr"
                      placeholder="주소 입력"
                      value={formData.memberAddr}
                      onChange={(e) =>
                        setFormData({ ...formData, memberAddr: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="memberAddrDetail" className="form-label">
                      상세주소
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="memberAddrDetail"
                      placeholder="상세주소 입력"
                      value={formData.memberAddrDetail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          memberAddrDetail: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="memberPost" className="form-label">
                      우편번호
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="memberPost"
                      placeholder="우편번호 입력"
                      value={formData.memberPost}
                      onChange={(e) =>
                        setFormData({ ...formData, memberPost: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="memberPhone1" className="form-label">
                      전화번호
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="memberPhone1"
                      placeholder="전화번호 입력"
                      value={formData.memberPhone1}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          memberPhone1: e.target.value,
                        })
                      }
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleModal}
                >
                  닫기
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
