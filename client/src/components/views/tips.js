//import { Container } from "reactstrap"
//import IndexHeader from "../components/indexHeader";
//import React, { Component } from "react"

import React from 'react';
import '../../App1.css';
//import HeroSection from '../HeroSection';
//import '../Cards.css';
import { Button, Typography, Container, Box } from "@mui/material";

export default function Tips(){ 
  return (
    <>
    <div className='cards'>
        <h1>TIPSA</h1>

        <div className='cards__container'>
           <div className='cards__wrapper'>
            <div className='cards__items'>

            <form action='action_page.php'>
              <label htmlFor="meddelande"></label>
                <textarea id="meddelande" title="Meddelande" 
                placeholder="Skriv meddelande..." 
                  style={{ height: 200 + 'px' }}></textarea>
            </form>
              <div className='cards__item__info'>
                <Button size="large" variant="contained">
                  Skicka
                </Button>
              </div>
            </div>
        </div>
          </div>
        </div>
        </>
        )
        }


       

/*
function Tips() { }
        return (
        <body>
          <div>

            <form action="/upload" method="POST" enctype="multipart/form-data">
              <div class="custom-file mb-3">
                <input
                  type="file"
                  name="file"
                  id="file"
                  class="custom-file-input" />
                <label for="file" class="custom-file-label">Choose File</label>
              </div>
              <input
                type="submit"
                value="Submit"
                class="btn btn-primary btn-block" />
            </form>

          </div>
        </body>

        )
    
        export default Tips;*/