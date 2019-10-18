import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent';
import Example from './components/Example';
import './App.css';
import { DISHES } from './shared/dishes'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dishes: DISHES
    }  
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Example />
        <Menu dishes={ this.state.dishes }/>
      </div>
    );
  }
}

export default App;
