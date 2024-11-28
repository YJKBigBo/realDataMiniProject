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
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>memberId:</label>
          <input
            type="text"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={memberPw}
            onChange={(e) => setMemberPw(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <button onClick={onSignupClick}>Sign Up</button>
    </div>
  );
};

export default Login;