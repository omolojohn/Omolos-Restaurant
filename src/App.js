import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
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