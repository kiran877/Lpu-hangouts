import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import punguluImage from './img/pungulu.jpeg';
import puriImage from './img/puri.jpeg';
import idlyImage from './img/idly.jpeg';
import MasalaDosaImage from './img/MasalaDosa.jpeg';
import cartIcon from './img/cart-icon.png';

function HomePage() {
  const [details, setDetails] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/details');
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Load cart items from localStorage when component mounts
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    // Save cart items to localStorage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems(prevCartItems => [...prevCartItems, item]);
    console.log('Item added to cart:', item);
  };

  const removeFromCart = (item) => {
    setCartItems(prevCartItems => prevCartItems.filter(cartItem => cartItem !== item));
    console.log('Item removed from cart:', item);
  };

  const redirectToBillPage = () => {
    navigate('/bill', { state: { cartItems: cartItems } }); // Pass cartItems to the BillPage
  };

  return (
    <div className="home">
      <div className="cart-icon-container" onClick={redirectToBillPage}>
        <img src={cartIcon} alt="Cart" className="cart-icon" />
        <span className="cart-count">{cartItems.length}</span>
      </div>
      <h1>LPU Hangouts</h1>
        <h1 className='menu'>Menu</h1>
      <div className="main">
        <div className="product-list">
          {details.map((detail, index) => (
            <div className="product-item" key={index}>
              {index === 0 && <img src={punguluImage} alt={detail.name} className="product-image" />}
              {index === 1 && <img src={puriImage} alt={detail.name} className="product-image" />}
              {index === 2 && <img src={idlyImage} alt={detail.name} className="product-image" />}
              {index === 3 && <img src={MasalaDosaImage} alt={detail.name} className="product-image" />}
              
              <p className="product-name">{detail.name}</p>
              <p className="product-detail">Price: {detail.price}</p>
              <button onClick={() => addToCart(detail)}>Add to Cart</button>
              <button onClick={() => removeFromCart(detail)}>Remove from Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
