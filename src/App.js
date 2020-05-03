import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import Cart from "./pages/CartPage";
import About from "./pages/AboutPage";
import Products from "./pages/Products";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/Default";

import {Route,Switch} from "react-router-dom";

import Navbar from './components/Navbar';
import Sidecart from './components/Sidecart';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


class  App extends Component {
  render(){
    return( <>
    {/* {} */}
    <Navbar></Navbar>
    <Sidecart></Sidecart>
    <Sidebar></Sidebar>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/products" component={Products}></Route>
      <Route path="/product/id" component={SingleProduct}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route component={Default}></Route>

    </Switch>
    <Footer></Footer>
    </>
    );
  }
  
}




export default App;
