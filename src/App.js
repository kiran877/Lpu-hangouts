import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar component
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import HomePage from './HomePage';
import MenuPage from './MenuPage';
import BillPage from './BillPage';
import SlotPage from './SlotPage';

function App() {
  const [cartItems, setCartItems] = React.useState([]); // Define cartItems state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} /> {/* Redirect to LoginPage by default */}
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/Home" element={<ProtectedRoute component={HomePage} setCartItems={setCartItems} />} /> {/* Redirect to HomePage after login */}
        <Route path="/MenuPage" element={<ProtectedRoute component={MenuPage} />} />
        <Route path="/bill" element={<ProtectedRoute component={BillPage} cartItems={cartItems} />} />
        <Route path="/SlotPage" element={<SlotPage/>} />
      </Routes>
    </Router>
  );
}

// Higher-order component to handle protected routes
function ProtectedRoute({ component: Component, ...rest }) {
  // Implement your authentication logic here
  const isAuthenticated = true; // Change this based on your authentication state

  // If user is not authenticated, redirect to LoginPage
  if (!isAuthenticated) {
    return <Navigate to="/Login" />;
  }

  // If user is authenticated, render the component
  return <Component {...rest} />;
}

export default App;
