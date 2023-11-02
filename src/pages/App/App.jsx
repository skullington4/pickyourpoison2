import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Create from '../Create/Create';
import Cart from '../Cart/Cart';
import './App.css';
import glasses from '../../Data/glasses';

export default function App() {

    const [cartItems, setCartItems] = React.useState([]);
    const [user, setUser] = React.useState(null);


  return (
    <div className="App">
      <header className="App-header">
          <NavBar/>
      </header>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/create" element={<Create glasses={glasses} cartItems={cartItems} setCartItems={setCartItems}/>} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
        </Routes>
    </div>
  );
}

