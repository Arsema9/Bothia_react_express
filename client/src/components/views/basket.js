import React from "react";
import '../../App1.css';
//import HeroSection from '../HeroSection';
import { Button, Typography, Container, Box } from "@mui/material";


const Basket = ({ setAuth }) =>{
  return (
    <>
      Basket
      <Button size="large" variant="contained" onClick={() => setAuth(false)}>
        Logga Ut.
      </Button>
    </>
  )
}
export default Basket
  //return <h1 className='basket'>BASKET</h1>;
