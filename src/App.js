// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import HomePage from './HomePage';
import BillPage from './BillPage'; // Import BillPage component

function App() {
  const [cartItems, setCartItems] = React.useState([]); // Define cartItems state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* Pass setCartItems function to HomePage */}
        <Route path="/Home" element={<HomePage setCartItems={setCartItems} />} /> 
        {/* Pass cartItems state to BillPage */}
        <Route path="/bill" element={<BillPage cartItems={cartItems} />} /> 
      </Routes>
    </Router>
  );
}

export default App;
