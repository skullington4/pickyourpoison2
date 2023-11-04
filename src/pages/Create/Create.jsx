import React from 'react';
import Select from 'react-select';
import Glasses from '../../components/Glasses/Glasses';
import glasses from '../../Data/glasses';


export default function Create({cartItems, setCartItems}) {

const glassOptions = glasses.map((glass, index) => ({
    title: glass.title,
    image: glass.image,
    index: index
}));

const SpiritIngredientOptions = [
    'Aperol',
    'Bourbon',
    'Brandy',
    'Gin',
    'Mezcal',
    'Rum',
    'Scotch',
    'Tequila',
    'Vodka',
    'Whiskey',
    'Wine',
    'Champagne',
    'Liqueur'
];

const MixerIngredientOptions = [
    'Bitters',
    'Coke',
    'Cranberry',
    'Diet Coke',
    'Ginger Ale',
    'Grenadine',
    'Lemon Juice',
    'Lime Juice',
    'Orange Juice',
    'Pineapple Juice',
    'Soda Water',
    'Sweet Vermouth',
    'Syrup',
    'Tonic',
    'Triple Sec',
    'Vermouth',
    'Water'
];

const GarnishIngredientOptions = [
    'Orange Peel',
    'Orange Slice',
    'Lemon',
    'Lime',
    'Cherry',
    'Olive',
    'Pineapple',
    'Strawberry',
    'Mint',
    'Cinnamon',
    'Sugar',
    'Salt',
];

    const [selectedGlass, setSelectedGlass] = React.useState(null);
    const [selectedSpirits, setSelectedSpirits] = React.useState([]);
    const [selectedMixers, setSelectedMixers] = React.useState([]);
    const [selectedGarnishes, setSelectedGarnishes] = React.useState([]);
    const [drinkName, setDrinkName] = React.useState([]);


    const handleSpiritsChange = (selectedSpirits) => {
        setSelectedSpirits(selectedSpirits);
    }

    const handleMixersChange = (selectedMixes) => {
        setSelectedMixers(selectedMixes);
    }

    const handleGarnishesChange = (selectedGarnishes) => {
        setSelectedGarnishes(selectedGarnishes);
    }

    const handleDrinkName = (event) => {
        setDrinkName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!selectedGlass) {
            alert('Please select a glass');
            return;
        }
        const drink = {
            category: 'custom',
            name: drinkName,
            price: 20,
            glass: selectedGlass,
            spirits: selectedSpirits,
            mixers: selectedMixers,
            garnishes: selectedGarnishes,
        };
        setCartItems([...cartItems, drink]);
        setSelectedGlass(null);
        setSelectedSpirits([]);
        setSelectedMixers([]);
        setSelectedGarnishes([]);
        setDrinkName([]);
    }


    return (
        <div className="top">
            <h1>Create your drink from scratch</h1>
            <form onSubmit={handleSubmit}>
                <label className="bigText" htmlFor="glass">Select your Glass</label>
                <div className="bigText">
                    {selectedGlass ? selectedGlass.title : 'None'} 
                </div>

                <div className="flexcenter">
                    <Glasses 
                        setSelectedGlass={setSelectedGlass} 
                    />
                </div>
                <div className="bigText">Ingredients</div>

                <div className="ingredientsContainer">
                <div className="mediumText">Spirits</div>
                    <Select
                        styles={{ 
                            container: (provided) => ({
                                ...provided,
                                width: '65%',
                            })
                        }}
                        id="Spirits"
                        isMulti
                        options={SpiritIngredientOptions}
                        value={selectedSpirits}
                        onChange={handleSpiritsChange}
                    />
                </div>

                <div className="ingredientsContainer">
                <div className="mediumText">Mixers</div>
                    <Select
                        styles={{ 
                            container: (provided) => ({
                                ...provided,
                                width: '65%',
                            })
                        }}
                        id="Mixers"
                        isMulti
                        options={MixerIngredientOptions}
                        value={selectedMixers}
                        onChange={handleMixersChange}
                    />
                </div>

                <div className="ingredientsContainer">
                <div className="mediumText">Garnishes</div>
                    <Select
                        styles={{ 
                            container: (provided) => ({
                                ...provided,
                                width: '65%',
                            })
                        }}
                        id="Garnishes"
                        options={GarnishIngredientOptions}
                        value={selectedGarnishes}
                        onChange={handleGarnishesChange}
                    />
                </div>

                <div className="ingredientsContainer">
                    <div className="mediumText">What do you call this?</div>
                    <input className='drinkName' type="text" id="name" name="name" placeholder="Name your drink" onChange={handleDrinkName} />
                </div>
                <button className="smallText" type="submit">Add to cart</button>
            </form>
        </div>
    );
}
    