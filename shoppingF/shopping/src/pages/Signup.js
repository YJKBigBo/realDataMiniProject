import React, { useState } from 'react';
import loginApi from '../apis/LoginAPI';
import memberApi from '../apis/MemberAPI';

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
      const memberCount = response.data;

      if (memberCount >= 1) {
        alert('회원가입이 완료되었습니다.');
        onLoginClick();
      } else {
        setError('회원가입 실패');
      }
    } catch (error) {
      setError('회원가입 실패');
    }
  };

  const styles = {
    container: {
      maxWidth: '500px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      marginBottom: '20px',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '8px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '5px',
    },
    button: {
      width: '100%',
      padding: '10px 0',
      marginTop: '20px',
      fontSize: '16px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
    secondaryButton: {
      marginTop: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
    },
    secondaryButtonHover: {
      backgroundColor: '#0056b3',
    },
    errorMessage: {
      color: 'red',
      fontSize: '14px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>회원가입</h2>
      <form style={styles.form} onSubmit={handleSignup}>
        <div style={styles.formGroup}>
          <label style={styles.label}>이름</label>
          <input
            style={styles.input}
            type="text"
            name="memberName"
            value={form.memberName}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>ID</label>
          <input
            style={styles.input}
            type="text"
            name="memberId"
            value={form.memberId}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>비밀번호</label>
          <input
            style={styles.input}
            type="password"
            name="memberPw"
            value={form.memberPw}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>비밀번호 확인</label>
          <input
            style={styles.input}
            type="password"
            name="memberPwCon"
            value={form.memberPwCon}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>주소</label>
          <input
            style={styles.input}
            type="text"
            name="memberAddr"
            value={form.memberAddr}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>상세 주소</label>
          <input
            style={styles.input}
            type="text"
            name="memberAddrDetail"
            value={form.memberAddrDetail}
            onChange={handleChange}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>우편 번호</label>
          <input
            style={styles.input}
            type="text"
            name="memberPost"
            value={form.memberPost}
            onChange={handleChange}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>전화 1</label>
          <input
            style={styles.input}
            type="text"
            name="memberPhone1"
            value={form.memberPhone1}
            onChange={handleChange}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>전화 2</label>
          <input
            style={styles.input}
            type="text"
            name="memberPhone2"
            value={form.memberPhone2}
            onChange={handleChange}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>성별</label>
          <select
            style={styles.input}
            name="memberGender"
            value={form.memberGender}
            onChange={handleChange}
          >
            <option value="M">남성</option>
            <option value="F">여성</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>생년월일</label>
          <input
            style={styles.input}
            type="date"
            name="memberBirth"
            value={form.memberBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>이메일</label>
          <input
            style={styles.input}
            type="email"
            name="memberEmail"
            value={form.memberEmail}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p style={styles.errorMessage}>{error}</p>}
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
        >
          회원가입
        </button>
      </form>
      <button
        onClick={onLoginClick}
        style={{ ...styles.button, ...styles.secondaryButton }}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.secondaryButtonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        로그인으로 돌아가기
      </button>
    </div>
  );
};

export default Signup;
