import React, { useState } from 'react';

export default function Menu({ cartItems, setCartItems }) {

    const menuItems = [
        {
            name: "Margarita",
            price: 10,
            description: "Tequila, lime juice, triple sec",
            category: "Cocktails"
        },
        {
            name: "Mojito",
            price: 12,
            description: "Rum, lime juice, mint leaves, soda water",
            category: "Cocktails"
        },
        {
            name: "Long Island Iced Tea",
            price: 15,
            description: "Vodka, gin, rum, tequila, triple sec, lemon juice, cola",
            category: "Cocktails"
        },
        {
            name: "Cosmopolitan",
            price: 12,
            description: "Vodka, triple sec, cranberry juice, lime juice",
            category: "Cocktails"
        },
        {
            name: "Old Fashioned",
            price: 14,
            description: "Bourbon, sugar, bitters, orange peel",
            category: "Cocktails"
        },
        {
            name: "Manhattan",
            price: 14,
            description: "Whiskey, sweet vermouth, bitters, cherry",
            category: "Cocktails"
        },
        {
            name: "Martini",
            price: 12,
            description: "Gin, vermouth, olive",
            category: "Cocktails"
        },
        {
            name: "Gin and Tonic",
            price: 10,
            description: "Gin, tonic, lime",
            category: "Cocktails"
        },
        {
            name: "Aviation",
            price: 12,
            description: "Gin, maraschino liqueur, crème de violette, lemon juice",
            category: "Cocktails"
        },
        {
            name: "Negroni",
            price: 12,
            description: "Gin, vermouth, Campari, orange peel",
            category: "Cocktails"
        },
        {
            name: "French 75",
            price: 12,
            description: "Gin, champagne, lemon juice, sugar",
            category: "Cocktails"
        },
        {
            name: "Aperol Spritz",
            price: 12,
            description: "Aperol, prosecco, soda water, orange slice",
            category: "Cocktails"
        },

    ];

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <div className="top">
            <h1>Menu</h1>
            <ul>
                {menuItems.map((item, index) => (
                    <li className='menuItems' key={index}>
                        <span>{item.name}</span>
                        <span>${Number(item.price)}</span>
                        <p>{item.description}</p>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

