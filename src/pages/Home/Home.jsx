import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';


export default function Home( { cartItems, setCartItems } ) {


    const [orders, setOrders] = useState([])

    useEffect(() => {
        async function getOrders() {
          const result = await axios.get("http://localhost:3001/orders")
          setOrders(result.data)
        }
        getOrders()
      }, [])

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

    return (
        <div className="top">
            <h1>Welcome to High Skies Bar</h1>
            <p>Our bar offers a wide selection of drinks and a cozy atmosphere for you to enjoy.</p>

            {orders.map((order, index) => (
            <div className="customeDrinkContainer">
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
