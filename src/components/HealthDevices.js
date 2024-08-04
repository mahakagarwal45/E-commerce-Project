// src/components/ProductCategories.js
import React from 'react';
import {Link} from 'react-router-dom';
import './HealthDevices.css';

const HealthDevices = () => {
    const devices = [
        { id: 1, name: 'Blood Pressure Monitor', description: 'Accurate blood pressure readings', imageUrl: 'bp.jpg' },
        { id: 2, name: 'Thermometer', description: 'Quick and reliable temperature readings', imageUrl: 'thermometer.jpg' },
        { id: 3, name: 'Fitness Tracker', description: 'Track your daily activities and fitness', imageUrl: 'fitnesstracker.jpg' },
        { id: 4, name: 'Glucometer', description: 'Monitor your blood sugar levels', imageUrl: 'glucometer.jpg' },
        { id: 5, name: 'Pulse Oximeter', description: 'Measure your blood oxygen levels', imageUrl: 'oximeter.jpg' }
    ];

    return (
        <div className="health-categories">
            <h2>Health Care Devices</h2>
            <ul>
                {devices.map(devices => (
                    <li key={devices.id} className="category-item">
                        <img src={process.env.PUBLIC_URL + '/' + devices.imageUrl} alt={devices.name} className="devices-image" />
                        <div className="devices-info">
                            <h3>{devices.name}</h3>
                            <p>{devices.description}</p>
                            {/* <p>{category.price} </p> */}
                            <p> <button variant ="outlined">Buy Now </button></p>
                            <p> <button variant ="outlined"> <Link to = "/Cart" >Add to cart</Link> </button></p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HealthDevices;

