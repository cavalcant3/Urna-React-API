import React from "react";
import ReactDOM from "react-dom";
import Box from "@material-ui/core/Box";
import "./style.css";

import App from "./App";
import Header from "./Header";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Header />
    <App />
    <Footer />
  </div>,
  rootElement
);
