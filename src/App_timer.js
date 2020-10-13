import React from 'react';
import './App.css';
import Timer from './Timer'
import LabelCronometro from './LabelCronometro'
import {Navbar, Nav} from 'react-bootstrap';



function App_timer() {
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
    <div class="container">
    <div class="col d-flex justify-content-center">
    <LabelCronometro class="display-2 titulo" name="Timer"/>
    </div>
    <div class="col d-flex justify-content-center">
    <Timer/>
    </div>
    </div>
    </div>
  );
}

export default App_timer;
