import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './Navbar';
import Home from './Home';
import Menu from './Menu';
import Order from './Order';
import  './App.css'


function App () {
  return (
      <div className='app'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='Order' element={<Order />}/>
        </Routes>
      </div>
   
  )

}

export default App;