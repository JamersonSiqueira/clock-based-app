import React from 'react';
import './App.css';
import Relogio from './Relogio'
import LabelCronometro from './LabelCronometro'
import {Navbar, Nav} from 'react-bootstrap';
import logo from './logo.png';



function App() {
  return (
    <div>
          <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Desafio 2</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/cronometro">Cronômetro</Nav.Link>
      <Nav.Link href="/">Relógio</Nav.Link>
      <Nav.Link href="/timer">Timer</Nav.Link>
    </Nav>
</Navbar>
<div class="menor inline"><img src={logo} className="App-logo" alt="logo" /></div>
    <div class="container">
      <div class="row d-flex justify-content-center">
      
    <LabelCronometro class="mx-auto display-2 titulo" name="Relógio"/>
    </div>
    <div class="col d-flex justify-content-center">
    <Relogio/>
    </div>
    </div>
    </div>
  );
}

export default App;
