// src/App.js
import React from 'react';
import './App.css';
import '../src/components/HealthDevices.css';
import HealthDevices from '../src/components/HealthDevices.js';

function App() {
    return (
        <div className="App">
                
                <h1>Health Devices</h1>
            
            <main>
                <HealthDevices/>
            </main>
        </div>
    );
}

export default App;
