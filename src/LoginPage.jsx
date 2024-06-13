import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login || !password) {
      alert('Пожалуйста, заполните все поля.'); // Alert in Russian
      return;
    }
    onLogin();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Вход</h2>
        <div>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Логин"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            required
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;