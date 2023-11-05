import React from 'react';
import glasses from '../../Data/glasses';

export default function Glasses ({selectedGlass, setSelectedGlass}) {

    const [glassesData, setGlassesData] = React.useState(glasses);

    const handleGlassClick = (glass) => {
        setSelectedGlass(glass);

    }

    return (
        <div className="flexcenter glasses">
            {glassesData.map((glass, index) => (
                <div className={`IndividualGlass ${glass.title}`} key={index} onClick={() => handleGlassClick(glass)}>
                    <img src={glass.image} alt={glass.title} />
                    <div className='glassName'>{glass.title}</div>
                </div>
            ))}
        </div>
    );
};


