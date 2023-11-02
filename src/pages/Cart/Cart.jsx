import React from 'react';
import CartItem from '../../components/CartItem/CartItem';

const Cart = ({ cartItems, setCartItems }) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price), 0);
    
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
        </div>
    );
};

export default Cart;
