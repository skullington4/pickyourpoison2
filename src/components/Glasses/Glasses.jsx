import React from 'react';
import glasses from '../../Data/glasses';

export default function Glasses ({selectedGlass, setSelectedGlass}) {

    const div = document.querySelector('.IndividualGlass');
    const [glassesData, setGlassesData] = React.useState(glasses);

    const handleGlassClick = (glass) => {
        setSelectedGlass(glass);
        div.classList.add('selected');
    }



    return (
        <div className="flexcenter glasses">
            {glassesData.map((glass, index) => (
                <div className={`IndividualGlass ${selectedGlass === glass.title ? 'selected' : ''}`} key={index} onClick={() => handleGlassClick(glass)}>
                    <img src={glass.image} alt={glass.title} />
                    <h3>{glass.title}</h3>
                </div>
            ))}
        </div>
    );
};


