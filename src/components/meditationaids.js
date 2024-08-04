import React from 'react';
import './meditationaids.css'; // Assuming you have a CSS file for styling

const Aids = () => {
    const Aids = [
        { id: 1, name: 'ghumtree', description: 'For chanting mantras', imageUrl: 'Ghumtree.jpg' },
        { id: 2, name: 'Singing Bowl', description: 'For meditation purpose and soothing', imageUrl: 'singingbowl.jpg' },
        { id: 3, name: 'A Portable Battery', description: 'A Portable Battery Powered Meditation Aid', imageUrl: './APortableBatteryPoweredMEditationAid.jpg' },
        { id: 4, name: 'Golden Wire Mandala', description: 'A meditation Mandala', imageUrl: '.GoldWireMandala.jpeg' },
        { id: 5, name: 'Meditation Cushion', description: 'meditation cushion for meditating purpose', imageUrl: './meditationcushion.jpeg' },
        { id: 6, name: 'Sleeping Aid', description: 'It is for sleeping with meditation rythm', imageUrl: './sleepingAID.jpg' }
    ];
    const backgroundStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px'
    };

    return (
        <div className="Aids" style={backgroundStyle}>
            <h2>Meditation Aids</h2>
            <ul>
                {Aids.map(books => (
                    <li key={Aids.id} className="Aids-item">
                        <img src={process.env.PUBLIC_URL + '/' + Aids.imageUrl} alt={Aids.name} className="Aids-image" />
                        <div className="Aids-info">
                            <h3>{Aids.name}</h3>
                            <p>{Aids.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Aids;