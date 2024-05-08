<<<<<<< HEAD
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import  './App.css'

=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Home from "./Home"; // Import your Home component
>>>>>>> 894a6aebb55670dde59357992b32e599f8c5a795


function App () {
  return (
<<<<<<< HEAD
   
      <div className='navbar'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='Order' element={<Order />}/>
        </Routes>
      </div>
   
  )
=======
    <Router>
      <div>
        <Navbar />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
>>>>>>> 894a6aebb55670dde59357992b32e599f8c5a795
}

export default App;