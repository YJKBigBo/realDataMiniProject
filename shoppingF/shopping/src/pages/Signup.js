import React, { useState } from 'react';
import memberApi from '../api/memberAPI';

const Signup = ({ onLoginClick }) => {
  const [form, setForm] = useState({
    memberName: '',
    memberId: '',
    memberPw: '',
    memberPwCon: '',
    memberAddr: '',
    memberAddrDetail: '',
    memberPost: '',
    memberPhone1: '',
    memberPhone2: '',
    memberGender: '',
    memberBirth: '',
    memberEmail: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setError(null);

    try {
        const response = await memberApi.signup(form);
        console.log(response.data);
        const memberCount = response.data['회원등록수'];
      
        if (memberCount >= 1) {
          alert("회원가입이 완료되었습니다.");
          onLoginClick();
        } else {
          setError("회원가입 실패");
        }
      } catch (error) {
        setError("회원가입 실패");
      }
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>이름 : </label>
          <input
            type="text"
            name="memberName"
            value={form.memberName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>ID : </label>
          <input
            type="text"
            name="memberId"
            value={form.memberId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>비밀번호 : </label>
          <input
            type="password"
            name="memberPw"
            value={form.memberPw}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>비밀번호 확인 : </label>
          <input
            type="password"
            name="memberPwCon"
            value={form.memberPwCon}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>주소 : </label>
          <input
            type="text"
            name="memberAddr"
            value={form.memberAddr}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>상세 주소 : </label>
          <input
            type="text"
            name="memberAddrDetail"
            value={form.memberAddrDetail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>우편 번호 : </label>
          <input
            type="text"
            name="memberPost"
            value={form.memberPost}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>전화 1 : </label>
          <input
            type="text"
            name="memberPhone1"
            value={form.memberPhone1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>전화 2 : </label>
          <input
            type="text"
            name="memberPhone2"
            value={form.memberPhone2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>성별 : </label>
          <select
            name="memberGender"
            value={form.memberGender}
            onChange={handleChange}
          >
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>
        <div>
          <label>생년월일 : </label>
          <input
            type="date"
            name="memberBirth"
            value={form.memberBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>이메일 : </label>
          <input
            type="email"
            name="memberEmail"
            value={form.memberEmail}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={onLoginClick}>Back to Login</button>
    </div>
  );
};

export default Signup;