import React, { useState, useEffect } from "react"
import { Button } from './Button';
import { Link } from "react-router-dom"
import './Navbar.css';
//<> is fragments

function Navbar() {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(false);
      } else {
         setButton(true);
      }
   };

   useEffect(() => {
      showButton();
   }, []);

   window.addEventListener('resize', showButton);

   return (
      <>
      <nav className="navbar">
         <div className="navbar-container">
            {/*link replaces a tag via react-router */}
               <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  BB <i className='fab fa-typo3' />
            </Link>
               <div className="menu-icon" onClick={handleClick}>
            {/*here we set hamburger menu 
            if its clicked*/}
                  <i className={click ? 'fas-fa-times' : 'fas fa-bars'} />
            </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                     <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        HOME
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link
                        to='/basket'
                        className='nav-links'
                        onClick={closeMobileMenu}
                     >
                        BASKET
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link
                        to='/edit'
                        className='nav-links'
                        onClick={closeMobileMenu}
                     >
                        EDIT
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link
                        to='/imageView'
                        className='nav-links'
                        onClick={closeMobileMenu}
                     >
                        IMAGEVIEW
                     </Link>
                  </li>
{/*RADERA DETTA 
                  <li className='nav-item'>
                     <Link
                        to='/menu'
                        className='nav-links'
                        onClick={closeMobileMenu}
                     >
                        MENU
                     </Link>
                  </li>
         */}

                  <li className='nav-item'>
                     <Link
                        to='/results'
                        className='nav-links'
                        onClick={closeMobileMenu}
                     >
                        RESULTS
                     </Link>
                  </li>

                  <li className='nav-item'>
                     <Link
                        to='/tips'
                        className='nav-links'
                        onClick={closeMobileMenu}
                     >
                        TIPS
                     </Link>
                  </li>

                  <li className='nav-item'>
                     <Link
                        to='/upload'
                        className='nav-links'
                        onClick={closeMobileMenu}
                     >
                        UPLOAD
                     </Link>
                  </li>

                  <li>
                     <Link
                        to='/signup'
                        className='nav-links-mobile'
                        onClick={closeMobileMenu}
                     >
                        SIGN UP
                     </Link>
                  </li>
               </ul>
               {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
         </div>
      </nav>
      </>   

   );
}
export default Navbar