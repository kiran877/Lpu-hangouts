import React, { useState } from 'react';
import Navbar from './Navbar';
import './SlotPage.css';


const BookSlot = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data (e.g., submit to backend, etc.)
    console.log('Form submitted:', { name, email, selectedDate, selectedTime });
    // Clear form fields after submission
    setName('');
    setEmail('');
    setSelectedDate('');
    setSelectedTime('');
  };

  return (

    <div>
      <Navbar links={Navbar}/>
   
    <div className="book-slot">
      <h2>Book a Slot</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Select a Date:</label>
          <input type="date" id="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Select a Time:</label>
          <input type="time" id="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
    </div>
  );
};

export default BookSlot;
