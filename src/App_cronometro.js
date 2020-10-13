import React from 'react';
import './App.css';
import Contador from './Contador'
import LabelCronometro from './LabelCronometro'
import {Navbar, Nav} from 'react-bootstrap';
import logo from './logo.png';



function App_cronometro() {
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
    <div class='container'>
    <div class="col d-flex justify-content-center">
    <LabelCronometro class="display-2 dark titulo"name="Cronômetro"/>
    </div>
    <div class="col d-flex justify-content-center">
    <Contador/>
    </div>
    </div>
    </div>
  );
}

export default App_cronometro;
