import React from 'react';
import '../App1.css';
import { Button } from './Button';
import './HeroSection.css';
import Results from './views/results';
import { useNavigate } from "react-router-dom"

/*
const HandleClick = (e) =>{
   e.preventDefault()
   let navigate = useNavigate()
   var searchTag = document.getElementById("search").value;
   navigate(`/results?${searchTag}`, { replace: true })

}
*/
function HeroSection() {
   let navigate = useNavigate();
  // var searchTag = document.getElementById("search").value;
 
   return (
      <div className='hero-container'>    
         <h1>BOTHNIABYRÅN</h1>
         <p>lorum ipsum</p>
         <div className='hero-btns'>
            <Button
               className='btns'
               buttonStyle='btn--outline'
               buttonSize='btn--large'
            >
               GET STARTED
            </Button>
         
         </div>
            <span>
               
            <input type="text" id="imagesearchbar"
               placeholder="Sök på bilder..." title="imagesearchbar"/>
            <button type="submit">
               <i className="fa fa-search"/></button>
            <a href="/basket"><i className="fa fa-cart-plus fa_custom fa-2x" /></a>
            <a href="/signup"><i className="fas fa-user fa_custom fa-2x" /></a>
            </span>
      </div>
   );

}

export default HeroSection;
