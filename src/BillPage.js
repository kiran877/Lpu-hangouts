import React, { useEffect, useState } from 'react';

function BillPage({ location }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Load cart items from localStorage when component mounts
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    // Calculate total price whenever cartItems change
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(item => item !== itemToRemove);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update localStorage
  };

  return (
    <div className="bill-page">
      <h1>Bill Details</h1>
      <div className="bill-items">
        <h2>Items in Cart:</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
}

export default BillPage;
