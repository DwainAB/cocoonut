import {Routes,Route, BrowserRouter} from "react-router-dom"
import React from "react"
import "../src/App.css"
import Home from "./Pages/Home"
import Admin from "./Pages/Admin"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"



function App(){  

	return (
    
    <BrowserRouter>
    <div className="app">
      <Navbar/>
      <div className="global"> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
	)
}

export default App