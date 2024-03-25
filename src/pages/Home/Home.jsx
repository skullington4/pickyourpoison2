import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import * as orderService from '../../utilities/order-service.js';

export default function Home( { cartItems, setCartItems } ) {
    const [orders, setOrders] = useState([]);
    const [filter, setFilter] = useState('');


    /* useEffect(() => {
        async function getOrders() {
            const result = await orderService.getAll();
            setOrders(result)
        }
        getOrders()
    }, []) */

    const handleAddToCart = (order) => {
        const drink = { 
            category: 'custom',
            name: order.title,
            price: order.price,
            glass: order.glass,
            spirits: order.spirits,
            mixers: order.mixers,
            garnishes: order.garnishes,
        };
        setCartItems([...cartItems, drink]);
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    const filteredOrders = orders.filter((order) => {
       const filterLower = filter.toLowerCase();
       return (
           order.glass.toLowerCase().includes(filterLower)  ||
           order.spirits.some((spirit) => spirit.toLowerCase().includes(filterLower)) ||
           order.mixers.some((mixer) => mixer.toLowerCase().includes(filterLower)) ||
           order.garnishes.toLowerCase().includes(filterLower)
        );
    });


    return (
        <div className="top">
            <h1>Welcome to High Skies Bar</h1>
            <p>Our bar offers a wide selection of drinks and a cozy atmosphere for you to enjoy.</p>
            <div>Please feel free to check out our menu for classic cocktails, 
                got to the create tab to create a cocktail from scratch, or check out below for 
                some of our customer's favorite custom drinks.
            </div>
            <div>
            
                <label htmlFor="filter">Filter by:</label>
                <select id="filter" value={filter} onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="Lowball">Glass: Lowball</option>
                    <option value="Highball">Glass: Highball</option>
                    <option value="Collins">Glass: Collins</option>
                    <option value="Martini">Glass: Martini</option>
                    <option value="Cosmo">Glass: Cosmo</option>
                    <option value="Coupe">Glass: Coupe</option>
                    <option value="Fizzio">Glass: Fizzio</option>
                    <option value="NickandNora">Glass: Nick and Nora</option>
                    <option value="Zombie">Glass: Zombie</option>
                    <option value="Sour">Glass: Sour</option>
                    <option value="Sling">Glass: Sling</option>
                    <option value="Margarita">Glass: Margarita</option>
                    <option value="Hurricane">Glass: Hurricane</option>
                    <option value="PicoGrande">Glass: Pico Grande</option>
                    <option value="MoscowMule">Glass: Moscow Mule</option>
                    <option value="Tiki">Glass: Tiki</option>

                    <option value="Aperol">Spirit: Aperol</option>
                    <option value="Bourbon">Spirit: Bourbon</option>
                    <option value="Brandy">Spirit: Brandy</option>
                    <option value="Gin">Spirit: Gin</option>
                    <option value="Mezcal">Spirit: Mezcal</option>
                    <option value="Rum">Spirit: Rum</option>
                    <option value="Scotch">Spirit: Scotch</option>
                    <option value="Tequila">Spirit: Tequila</option>
                    <option value="Vodka">Spirit: Vodka</option>

                    <option value="Bitters">Mixer: Bitters</option>
                    <option value="Coke">Mixer: Coke</option>
                    <option value="Cranberry">Mixer: Cranberry</option>
                    <option value="Diet Coke">Mixer: Diet Coke</option>
                    <option value="Ginger Ale">Mixer: Ginger Ale</option>
                    <option value="Grenadine">Mixer: Grenadine</option>
                    <option value="Lemon Juice">Mixer: Lemon Juice</option>
                    <option value="Lime Juice">Mixer: Lime Juice</option>
                    <option value="Orange Juice">Mixer: Orange Juice</option>
                    <option value="Pineapple Juice">Mixer: Pineapple Juice</option>
                    <option value="Soda Water">Mixer: Soda Water</option>
                    <option value="Sweet Vermouth">Mixer: Sweet Vermouth</option>
                    <option value="tonic">Mixer: Tonic</option>
                    <option value="Triple Sec">Mixer: Triple Sec</option>
                    <option value="Vermouth">Mixer: Vermouth</option>
                    <option value="Water">Mixer: Water</option>

                    <option value="Orange Peel">Garnish: Orange Peel</option>
                    <option value="Orange Slice">Garnish: Orange Slice</option>
                    <option value="Lemon">Garnish: Lemon</option>
                    <option value="Lime">Garnish: Lime</option>
                    <option value="Cherry">Garnish: Cherry</option>
                    <option value="Olive">Garnish: Olive</option>
                    <option value="Pineapple">Garnish: Pineapple</option>
                    <option value="Strawberry">Garnish: Strawberry</option>
                    <option value="Mint">Garnish: Mint</option>
                    <option value="Cinnamon">Garnish: Cinnamon</option>
                    <option value="Sugar">Garnish: Sugar</option>
                    <option value="Salt">Garnish: Salt</option>
                </select>
            </div>

            {filteredOrders.map((order, index) => (
                <div className="customeDrinkContainer border" key={index}>
                    <span className='name'>The "{order.title}" - ${order.price}</span>
                    <span className="desc">Glass: {order.glass}</span>
                    <span className="desc">Spirits: {order.spirits.map((spirit, index) => (
                        <span key={index}>{spirit}{index === order.spirits.length - 1 ? '' : ', '}</span>
                    ))}</span>
                    <span className="desc">Mixers: {order.mixers.map((mixer, index) => (
                        <span key={index}>{mixer}{index === order.mixers.length - 1 ? '' : ', '}</span>
                    ))}</span>
                    <span className="desc">Garnish: {order.garnishes}</span>
                    <button onClick={() => handleAddToCart(order)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}