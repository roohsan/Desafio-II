import React from 'react';
import './App.css';
import Contador from './components/Contador';
import LabelTitle from './components/LabelTitle';
import Timer from './components/Timer';
import Relogio from './components/Relogio';

function App() {
  return (
    <div>
      <div>
        <Relogio timezone="Brazil/Brasilia" />
      </div>
      <div>
        <LabelTitle name="Timer" />
        <Timer />
      </div>
      <div>
        <LabelTitle name="Cronômetro" />
        <Contador />
      </div>
    </div>
  );
}

export default App;
