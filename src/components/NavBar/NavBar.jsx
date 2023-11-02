import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/create">Create</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    );
}

export default NavBar;
