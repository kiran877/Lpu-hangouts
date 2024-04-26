import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './LoginPage.css'; // Importing the CSS file for styling

function LoginPage({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login validation
    if (username === 'root' && password === 'root') {
      // Call the handleLogin function passed down from the parent component
      // This function should handle the navigation to the homepage
      handleLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login Page</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <Link to="/Home">
            <button type="submit">Login</button>
          </Link>
        </form>
        {/* Use Link to navigate to the signup page */}
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginPage;
