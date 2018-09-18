import React, { Component } from "react";
import Home from "./Ecom/Pages/Home/Home";
import Contact from "./Ecom/Pages/Contact/contact";
import Trees from "./Ecom/Pages/Trees/trees";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Ecom/Pages/nav";
import Footer from "./Ecom/Pages/footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/trees" component={Trees} exact />
            {/* <Route component={Error} /> */}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
