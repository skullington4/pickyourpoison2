import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Menu from '../Menu/Menu.jsx';
import Create from '../Create/Create.jsx';
import Cart from '../Cart/Cart.jsx';
import './App.css';
import glasses from '../../Data/glasses';

export default function App() {

    const [cartItems, setCartItems] = React.useState([]);

  return (
    <div className="App">
      <header className="App-header">
          <NavBar cartItems={cartItems}/>
      </header>
        
        <Routes>
            <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/menu" element={<Menu cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/create" element={<Create glasses={glasses} cartItems={cartItems} setCartItems={setCartItems}/>} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
        </Routes>
    </div>
  );
}

