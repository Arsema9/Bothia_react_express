import React from 'react';
import '../App1.css';
import { Button } from './Button';
import './HeroSection.css';
import Results from './views/results';
import { useNavigate } from "react-router-dom"

/*
function HandleClick {
   e.preventDefault()
   let navigate = useNavigate()
   var searchTag = document.getElementById("search").value;
   navigate(`/results?${searchTag}`, { replace: true })

}
*/
function HeroSection() {

   let navigate = useNavigate()
   //const query = new URLSearchParams(search).get('s');

   const SearchBar = () => (
      <form action="/" method="get">
         <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
         </label>
         <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="results"
         />
         <button type="submit">Search</button>
      </form>
   );

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
         {/*
         <SearchBar />
        <div>
            {document.getElementById("search")}
        </div>
 */}
            <span>

            <input type="text" id="imagesearchbar"
               placeholder="Sök bilder..." title="imagesearchbar"/>
            <button type="submit">
               <i className="fa fa-search"/></button>
          {/*  <a href="/signup"><i className="fas fa-user fa_custom fa-2x" /></a>*/}
            </span>
  
      </div>
   );

}

export default HeroSection;
