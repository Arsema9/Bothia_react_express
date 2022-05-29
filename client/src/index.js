import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
//import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter, HashRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter history={HashRouter}>
    <App />
  </BrowserRouter>);
/*

registerServiceWorker();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)
*/

/*


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'));
registerServiceWorker();
*/
/*
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
 */
