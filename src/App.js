import React from "react"


import { BrowserRouter,Route,Routes } from "react-router-dom"
import './App.css'

import Home from "./components/Home"
import Header from "./components/Header"



const App = () =>  (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  )

export default App;
