import React from 'react';
import { useCart } from './CartContext'; // Ensure this hook is properly defined
import {Link} from 'react-router-dom';
import './fitnessEquipments.css';
const FitnessEquipment = () => {
    const equipmentList = [
        { id: 1, name: 'yoga mats', description: 'fitness equipment', imageUrl: './yoga mats.jpg' },
        { id: 2, name: 'dumbles', description: 'fitness equipment', imageUrl: './dumbles.webp' },
        { id: 3, name: 'steppers', description: 'mental wellness book', imageUrl: './steppers.webp' },
        { id: 4, name: 'skipping ropes', description: 'fitness equipment', imageUrl: './skipping ropes.jpg' },
        { id: 5, name: 'kettlebells', description: 'fitness equipment', imageUrl: './kettlebells.jpg' },
        { id: 6, name: 'yoga resistance belts', description: 'fitness equipment', imageUrl: './yoga resistance belts.jpg' }
    ];

    const backgroundStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px'
    };

    return (
        <div className="FitnessEquipment" style={backgroundStyle}>
            <h2>Fitness Equipment</h2>
            <ul>
                {equipmentList.map(item => (
                    <li key={item.id} className="FitnessEquipment-item">
                        <img src={process.env.PUBLIC_URL + '/' + item.imageUrl} alt={item.name} className="FitnessEquipment-image" />
                        <div className="FitnessEquipment-info">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FitnessEquipment;
