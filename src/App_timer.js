import React from 'react';
import './App.css';
import Timer from './Timer'
import LabelCronometro from './LabelCronometro'



function App_timer() {
  return (
    <div>
    <LabelCronometro name="Timer"/>
    <Timer/>
    </div>
  );
}

export default App_timer;
