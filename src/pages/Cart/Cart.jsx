import React from 'react';
import CartItem from '../../components/CartItem/CartItem';
import axios from 'axios';

const Cart = ({ cartItems, setCartItems }) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price), 0);
    
    const handleCheckout = () => {
        cartItems.forEach((drink) => {
            if (drink.category === 'custom') {
                console.log("custom drink added to db")
                handleAddCustomDrink(drink);
            }
        });
        // setCartItems([]);
    }

    const handleAddCustomDrink = (drink) => {
        axios.post('http://localhost:3001/orders', drink)
            console.log(drink)
            // .then((response) => {
            //     console.log(response);
            // })
            // .catch((error) => {
            //     console.log(error);
            // })
    }

    const handleClearCart = () => {
        if (window.confirm('Are you sure you want to clear your cart?')) {
            setCartItems([]);
        }
    }

    return (
        <div>
            <h1 className='top'>Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className='fullCart'>
                    {cartItems.map((item, index) => (
                        <CartItem key={item.id} 
                            item={item}
                            cartItems={cartItems}
                            setCartItems={setCartItems} 
                            index={index}
                        />
                    ))}
                    <p>Total price: ${Number(totalPrice.toFixed(2))}</p>
                </div>
            )}
            <button className='clearCart' onClick={() => handleClearCart()}>Clear Cart</button>
            <button className='checkout' onClick={() => handleCheckout()}>Checkout</button>
        </div>
    );
};

export default Cart;
