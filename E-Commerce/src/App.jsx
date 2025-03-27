import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Footer />}/> */}
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart />}/>
        
    </Routes>    

    </BrowserRouter>
    </>
  )
}
