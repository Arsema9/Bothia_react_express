/*visa alla bilder för en specifik kategori 
se till så att bil*/

import React, { Component } from "react"
import axios from "axios"
{/*sökvy */ }
class Category extends Component {
   constructor() {
      super()
      this.state = {
         searchResults: [],
         searchWord: "",
         serverURL: "localhost:5000",
      }
   }

   async componentDidMount() {
      //sets searchword
      var searchString = window.location.href
      searchString = searchString.substring(searchString.indexOf("?") + 1)
      await this.setState({ searchWord: searchString }) //await absolutely has an effect on this type of expression

      //searches DB
      const res = await axios.get(
         `${this.state.serverURL}/search`,
         { params: { searchWord: this.state.searchWord } },
         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      )

      this.setState({ searchResults: res.data })
   }

   render() {
      return (
         <div>
            <ul>
               {this.state.searchResults.map((value, index) => {
                  return (
                     <li key={index}>
                        <p>
                           <img src={`${this.state.serverURL}/image/${value}`} />
                        </p>
                        {value}
                     </li>
                  )
               })}
            </ul>
         </div>
      )
   }
}
export default Category