import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './mental.css'; // Assuming you have a CSS file for styling

const MentalWellness = () => {
    const backgroundStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px'
    };

    return (
        <div style={backgroundStyle}>
            <h2>Select a Category</h2>
            <select onChange={(e) => window.location.href = e.target.value}>
                <option value="">Select an option</option>
                <option value="/meditationaids"><Link to = '/Meditationaids'>Meditation Aids</Link></option>
                <option value="/mentalwellnessbooks">Mental Wellness Books</option>
                <option value="/stressrelieftool">Stress Relief Tool</option>
            </select>
        </div>
    );
};

export default MentalWellness;
