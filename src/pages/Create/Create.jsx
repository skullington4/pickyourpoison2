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
    { value: 'Aperol', label: 'Aperol' },
    { value: 'Bourbon', label: 'Bourbon' },
    { value: 'Brandy', label: 'Brandy' },
    { value: 'Gin', label: 'Gin' },
    { value: 'Mezcal', label: 'Mezcal' },
    { value: 'Rum', label: 'Rum' },
    { value: 'Scotch', label: 'Scotch' },
    { value: 'Tequila', label: 'Tequila' },
    { value: 'Vodka', label: 'Vodka' },
    { value: 'Whiskey', label: 'Whiskey' },
    { value: 'Wine', label: 'Wine' },
    { value: 'Champagne', label: 'Champagne' },
    { value: 'Liqueur', label: 'Liqueur' },
];

const MixerIngredientOptions = [
    { value: 'Bitters', label: 'Bitters' },
    { value: 'Coke', label: 'Coke' },
    { value: 'Cranberry', label: 'Cranberry' },
    { value: 'Diet Coke', label: 'Diet Coke' },
    { value: 'Ginger Ale', label: 'Ginger Ale' },
    { value: 'Grenadine', label: 'Grenadine' },
    { value: 'Lemon Juice', label: 'Lemon Juice' },
    { value: 'Lime Juice', label: 'Lime Juice' },
    { value: 'Orange Juice', label: 'Orange Juice' },
    { value: 'Pineapple Juice', label: 'Pineapple Juice' },
    { value: 'Soda Water', label: 'Soda Water' },
    { value: 'Sweet Vermouth', label: 'Sweet Vermouth' },
    { value: 'Syrup', label: 'Syrup' },
    { value: 'Tonic', label: 'Tonic' },
    { value: 'Triple Sec', label: 'Triple Sec' },
    { value: 'Vermouth', label: 'Vermouth' },
    { value: 'Water', label: 'Water' },
];

const GarnishIngredientOptions = [
    { value: 'Orange Peel', label: 'Orange Peel' },
    { value: 'Orange Slice', label: 'Orange Slice' },
    { value: 'Lemon', label: 'Lemon Slice' },
    { value: 'Lime', label: 'Lime Slice' },
    { value: 'Cherry', label: 'Cherry' },
    { value: 'Olive', label: 'Olive' },
    { value: 'Pineapple', label: 'Pineapple' },
    { value: 'Strawberry', label: 'Strawberry' },
    { value: 'Mint', label: 'Mint' },
    { value: 'Cinnamon', label: 'Cinnamon' },
    { value: 'Sugar', label: 'Sugar' },
    { value: 'Salt', label: 'Salt' },
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
            glass: selectedGlass.title,
            spirits: selectedSpirits.map((spirit) => spirit.value),
            mixers: selectedMixers.map((mixer) => mixer.value),
            garnishes: selectedGarnishes.value,
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
    