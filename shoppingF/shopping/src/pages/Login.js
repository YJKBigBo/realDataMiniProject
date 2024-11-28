import React, { useState } from 'react';
import loginApi from '../apis/LoginAPI';

const Login = ({ onSignupClick, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await loginApi.login({ userId: username, userPw: password });
      if (response.data === "로그인 성공") {
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
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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