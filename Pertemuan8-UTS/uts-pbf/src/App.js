import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./componentsMenu/Home";
import About from "./componentsMenu/About";
import Keranjang from "./componentsMenu/Keranjang";
import Produk from "./componentsMenu/listProduk";

class App extends Component {
  Navbar() {
    return (
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              Microwave Store
            </Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/produk">
                    List Produk
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/keranjang">
                    Keranjang
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }

  render() {
    return (
      <Router>
        <div className="col-12">
          {this.Navbar()}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/produk">
              <Produk />
            </Route>
            <Route path="/keranjang">
              <Keranjang />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

