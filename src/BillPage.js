import React, { useEffect, useState } from 'react';
import punguluImage from './img/pungulu.jpeg'; // Import pungulu image
import puriImage from './img/puri.jpeg'; // Import puri image
import idlyImage from './img/idly.jpeg'; // Import idly image
import MasalaDosaImage from './img/MasalaDosa.jpeg'; // Import Masala Dosa image

function BillPage({ selectedItem }) {
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

  const placeOrder = () => {
    if (cartItems.length === 0) {
      window.alert('No items in cart');
    } else {
      // Display alert message when place order button is clicked
      window.alert('Order Placed');
    }
  };

  return (
    <div className="bill-page">
      <div className="bill-container">
      <h1>Bill Details</h1>
      <div className="bill-items">
        <h2>Items in Cart:</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {/* Display item image, name, and price */}
              <img src={getImage(item.name)} alt={item.name} />
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
          {selectedItem && (
            <li>
              {/* Display selected item name and price */}
              {selectedItem.name} - ${selectedItem.price}
            </li>
          )}
        </ul>
        <p>Total Price: ${totalPrice}</p>
      </div>
      <button onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
}

// Function to get the appropriate image for each item
function getImage(name) {
  switch (name) {
    case 'Pungulu':
      return punguluImage;
    case 'Puri':
      return puriImage;
    case 'Idly':
      return idlyImage;
    case 'Masala Dosa':
      return MasalaDosaImage;
    default:
      return ''; // Return empty string if no matching image found
  }
}

export default BillPage;
