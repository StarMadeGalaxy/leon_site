import { useState } from 'react'
import './App.css'
import MainPage from './MainPage'; // Import MainPage component
import LoginPage from './LoginPage'; // Import LoginPage component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <MainPage />;
  } else {
    return <LoginPage onLogin={handleLogin} />;
  }
}

export default App
