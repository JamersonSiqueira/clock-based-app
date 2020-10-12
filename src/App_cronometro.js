import React from 'react';
import './App.css';
import Contador from './Contador'
import LabelCronometro from './LabelCronometro'



function App_cronometro() {
  return (
    <div>
    <LabelCronometro name="Cronômetro"/>
    <Contador/>
    </div>
  );
}

export default App_cronometro;
