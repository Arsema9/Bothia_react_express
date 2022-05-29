import React, { useState } from "react"
import "./App1.css"
import Basket from "./components/views/basket"
import Home from "./components/views/Home"
import ImageView from "./components/views/imageView"
import Edit from "./components/views/edit"
import Results from "./components/views/results"
import Tips from "./components/views/tips"
import Upload from "./components/views/upload"
import SignUp from "./components/views/SignUp";
import Loggedin from './components/views/Loggedin'; //page when logged in
import Login from './components/views/Login'; //page when logged in
//import { useLocation } from "react-router-dom"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
//import IndexHeader from "./components/indexHeader"
import Navbar from "./components/Navbar"
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';


  function App(){

  const[auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <div className="App">
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/basket" element={<Basket />} />
        <Route exact path="/imageView" element={<ImageView />} />
        <Route exact path="/tips" element={<Tips />} />
        <Route exact path="/edit" element={<Edit />} />
        <Route exact path="/results" element={<Results />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route exact path="/signup" element={<SignUp setAuth={setAuth} />} />
        <Route
          path="/"
          element={
            auth ? (
              <Loggedin setAuth={setAuth} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default App

/*
    return (

         <>
        <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} /> 
              <Route exact path="/basket" element={<Basket />} />
              <Route exact path="/imageView" element={<ImageView />} />
              <Route exact path="/tips" element={<Tips />} />
              <Route exact path="/edit" element={<Edit />} />
              <Route exact path="/results" element={<Results />} />
              <Route exact path="/upload" element={<Upload />} />
              <Route path="/login" element={<Login setAuth={setAuth} />} />
              <Route exact path="/signup" element={<SignUp setAuth={setAuth}/>} />
              <Route
                path="/"
                element={
                  auth ? (
                    <Loggedin setAuth={setAuth} />
                  ) : (
                    <Navigate to="/login" state={{ from: location }} replace />
                  )
                }
              />
         
          </Routes>
          </>
       
    );
  }
  
      
 export default App;
 */

        