import React from 'react';
import './App.css';
import Contador from './Contador'
import Timer from './Timer'
import Relogio from './Relogio'
import LabelCronometro from './LabelCronometro'



function App() {
  return (
    <div>
    <LabelCronometro name="Cronômetro"/>
    <Cronometro/>
    </div>
  );
}

export default App;
