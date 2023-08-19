import React from "react"


import { BrowserRouter,Route,Routes } from "react-router-dom"
import './App.css'


import Login from "./components/Login"

import Home from "./components/Home"
import Header from "./components/Header"
import Contact  from "./components/Contact"
import About from "./components/About"



const App = () =>  (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  </BrowserRouter>
  )

export default App;
