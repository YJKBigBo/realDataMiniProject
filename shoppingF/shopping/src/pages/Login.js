import React, { useState } from 'react';
import loginApi from '../apis/LoginAPI';

const Login = ({ onSignupClick, onLoginSuccess }) => {
  const [memberId, setMemberId] = useState('');
  const [memberPw, setMemberPw] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await loginApi.login({ memberId: memberId, memberPw: memberPw });
      console.log(response);
      if (response.data >= 1) {
        onLoginSuccess();
      } else {
        setError(response.data);
      }
    } catch (error) {
      setError('로그인 실패');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f4f7fa',
      }}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '30px',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '10px', fontSize: '24px', color: '#333' }}>
          로그인
        </h2>
        <p style={{ marginBottom: '20px', color: '#666' }}>
        </p>
        <form
          onSubmit={handleLogin}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <label
              htmlFor="memberId"
              style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '14px',
                color: '#444',
              }}
            >
              Member ID
            </label>
            <input
              type="text"
              id="memberId"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              placeholder="Enter your ID"
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '14px',
                color: '#444',
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={memberPw}
              onChange={(e) => setMemberPw(e.target.value)}
              placeholder="Enter your password"
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            />
          </div>
          {error && (
            <p
              style={{
                color: 'red',
                fontSize: '14px',
                marginBottom: '10px',
              }}
            >
              {error}
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              color: 'white',
              background: 'gray',
              cursor: 'pointer',
              marginBottom: '10px',
              transition: 'background 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.background = '#0056b3')}
            onMouseOut={(e) => (e.target.style.background = '#007bff')}
          >
            Log In
          </button>
        </form>
        <button
          onClick={onSignupClick}
          style={{
            width: '100%',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            color: 'white',
            background: '#6c757d',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.background = '#5a6268')}
          onMouseOut={(e) => (e.target.style.background = '#6c757d')}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
