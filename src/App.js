import React from "react"


import { BrowserRouter,Route,Routes } from "react-router-dom"
import './App.css'


import Login from "./components/Login"

import Home from "./components/Home"
import Header from "./components/Header"
import Product  from "./components/Product"
import Cart from "./components/Cart"



const App = () =>  (
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/contact" element={<Product/>}/>
    <Route exact path="/about" element={<Cart/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )

export default App;
