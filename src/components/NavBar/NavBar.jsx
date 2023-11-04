import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHome } from 'react-icons/fa';

function NavBar( {cartItems} ) {
    
    return (
        <nav>
            <Link to="/"> <FaHome> </FaHome></Link>
            <Link to="/menu">Menu</Link>
            <Link to="/create">Create</Link>
            <Link to="/cart">
                <FaShoppingCart />
                {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </Link>
        </nav>
    );
}

export default NavBar;
