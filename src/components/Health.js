// src/components/ProductCategories.js
import React from 'react';
import './Health.css';
import { useCart } from './CartContext'; // Ensure this hook is defined

const HealthDevices = () => {
  const devices = [
    { id: 1, name: 'Blood Pressure Monitor', description: 'Accurate blood pressure readings', imageUrl: 'bp.jpg' },
    { id: 2, name: 'Thermometer', description: 'Quick and reliable temperature readings', imageUrl: 'thermometer.jpg' },
    { id: 3, name: 'Fitness Tracker', description: 'Track your daily activities and fitness', imageUrl: 'fitnesstracker.jpg' },
    { id: 4, name: 'Glucometer', description: 'Monitor your blood sugar levels', imageUrl: 'glucometer.jpg' },
    { id: 5, name: 'Pulse Oximeter', description: 'Measure your blood oxygen levels', imageUrl: 'oximeter.jpg' }
  ];

  const { addToCart } = useCart(); // Extract addToCart function from useCart

  const handleAddToCart = (product) => {
    addToCart(product); // Use addToCart with the product argument
  };

  return (
    <div className="health-categories">
      <h2>Health Care Devices</h2>
      <ul>
        {devices.map((device) => (
          <li key={device.id} className="category-item">
            <img src={process.env.PUBLIC_URL + '/' + device.imageUrl} alt={device.name} className="devices-image" />
            <div className="devices-info">
              <h3>{device.name}</h3>
              <p>{device.description}</p>
              <p><button className="buy-now-button">Buy Now</button></p>
              <p><button className="add-to-cart-button" onClick={() => handleAddToCart(device)}>Add To Cart</button></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthDevices;
