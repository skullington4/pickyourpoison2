import React from 'react';
import CartItem from '../../components/CartItem/CartItem';

const Cart = ({ cartItems, setCartItems }) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price), 0);
    
    const handleCheckout = () => {
        alert(`Your total is $${Number(totalPrice.toFixed(2))}. Thank you for your order!`);
        setCartItems([]);
    }

    return (
        <div>
            <h1 className='top'>Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className='fullCart'>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} 
                            item={item}
                            cartItems={cartItems}
                            setCartItems={setCartItems} 
                        />
                    ))}
                    <p>Total price: ${Number(totalPrice.toFixed(2))}</p>
                </div>
            )}
            <button className='clearCart' onClick={() => setCartItems([])}>Clear Cart</button>
            <button className='checkout' onClick={() => handleCheckout()}>Checkout</button>
        </div>
    );
};

export default Cart;
