/*
  import React, { Fragment, useState } from "react"
  import { useNavigate } from "react-router-dom"

  import { Container } from "reactstrap"
  import background from "./img/leaves_plant_green.jpg"

  // core components
  rcfc
  function IndexHeader() {
    const [searchValue, setSearchValue] = useState("")

    let navigate = useNavigate()

    async function handleClick(e) {
      e.preventDefault()

      var searchTag = document.getElementById("search").value
      navigate(`/results?${searchTag}`, { replace: true })
    }

    return (
      <>
        <div
          className="page-header section-dark"
          style={{
            backgroundImage: `url(${background})`,
            backgroundColor: "green",
          }}
        >
          <div className="filter" />
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">Bothniabyrån</h1>
              </div>
              <h2 className="presentation-subtitle text-center">Lorem ipsum</h2>
            </Container>
          </div>
          <h6 className="category category-absolute">
            Designad och kodad av Grupp 2
          </h6>
        </div>
        <div>
          <input type="text" id="search" />
          <button type="button" onClick={handleClick}>
            {" "}
            Search{" "}
          </button>
        </div>
      </>
    )
  }
*/
  
  {/*return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: "green",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Bothniabyrån</h1>
              
                <div id="topnav">
                    <nav className="mobile-nav">
                    
                      <div id="mobile-nav-menuToogle"> 
                        <input type="checkbox" />
                          <span></span>
                          <span></span>
                          <span></span>
                          
                          <ul id="menu">
                          
                            <a href="/basket"><li>Basket</li></a>
                            <a href="/edit"><li>Edit</li></a>
                            <a href="/menu"><li>Menu</li></a>
                            <a href="/"><li>Home</li></a>
                            <a href="/ImageView"><li>ImageView</li></a>
                            <a href="/results"><li>Results</li></a>
                            <a href="/tips"><li> Tips</li></a> 
                            <a href="/upload"><li>Upload</li></a> 
                        </ul>
                      </div>

                    </nav>
                  </div>
      
                      
            </div>
            <h2 className="presentation-subtitle text-center"> Designad och kodad av Grupp 2</h2>
          </Container>
        </div>
        <h6 className="category category-absolute">
         
          <input type="text" id="imagesearchbar" onkeyup="imageSearchBarFunction()"
            placeholder="Sök på bilder..." title="imagesearchbar" />
        </h6>
      </div>
    </>
  */}
export default IndexHeader;

