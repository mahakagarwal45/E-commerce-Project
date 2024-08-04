import React from 'react';

const StressReliefTool = () => {
    const stressReliefTools = [
        { id: 1, name: '5 pc Fidget Toy', description: '5 PC Fidget Toy Stress Reliever', imageUrl: '5 PC Fidget Toy Stress Reliever.jpg' },
        { id: 2, name: 'Corona Virus Squeeze', description: 'Buy Dhjrefhhd 1Pcs Covid_19 Coronavirus Squeeze Stress Ball Stress Relief Tools', imageUrl: 'Buy Dhjrefhhd 1Pcs Covid_19 Coronavirus Squeeze Stress Ball Stress Relief Tools.jpg' },
        { id: 3, name: 'Kemendra pop', description: 'Stress Relief Tool', imageUrl: 'stressRelieftool.jpg' }, // Changed file extension to .jpg
        { id: 4, name: 'Wooden Handheld Massager', description: 'Wooden Handheld Foot Roller Acupressure Massager', imageUrl: 'Wooden Handheld Foot Roller Acupressure Massager.jpg' },
        { id: 5, name: 'Tangles Fidget Toys', description: 'Ycvsad tangles Fidget Toys for Kids and Adults', imageUrl: 'Ycvsad tangles Fidget Toys for Kids and Adult.jpg' }
    ];

    const backgroundStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px'
    };

    return (
        <div className="stress-relief-tool" style={backgroundStyle}>
            <h2>Stress Relief Tools</h2>
            <ul>
                {stressReliefTools.map(tool => (
                    <li key={tool.id} className="stress-relief-tool-item">
                        <img src={process.env.PUBLIC_URL + '/' + tool.imageUrl} alt={tool.name} className="stress-relief-tool-image" />
                        <div className="stress-relief-tool-info">
                            <h3>{tool.name}</h3>
                            <p>{tool.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StressReliefTool;
