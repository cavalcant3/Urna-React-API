import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import Add from "./Add";
import Form from "./Form";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Router>
      <Header />
      <App />
      <Switch>
        <Route path="/" exact component={Add} />{" "}
        {/* Só aparece na tela inicial */}
        <Route path="/add" component={Form} /> {/* Só aparece na página /add */}
      </Switch>
      <Footer />
    </Router>
  </div>,
  rootElement
);
