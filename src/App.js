import React from 'react';
import './App.css';
import Relogio from './Relogio'
import LabelCronometro from './LabelCronometro'



function App() {
  return (
    <div>
    <LabelCronometro name="Relógio"/>
    <Relogio/>
    </div>
  );
}

export default App;
