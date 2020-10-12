import React from 'react';
import './App.css';
import Contador from './components/Contador';
import LabelTitle from './components/LabelTitle';
import Timer from './components/Timer';
import Relogio from './components/Relogio';

function App() {
  return (
    <div className="container">
      <div className="element">
        <LabelTitle name="Relógio" />
        <Relogio timezone="Brazil/Brasilia" />
        <Relogio timezone="America/New_York" />
        <Relogio timezone="Africa/Johannesburg" />
        <Relogio timezone="Europe/London" />
      </div>
      <div className="element">
        <LabelTitle name="Timer" />
        <Timer />
      </div>
      <div className="element">
        <LabelTitle name="Cronômetro" />
        <Contador />
      </div>
    </div>
  );
}

export default App;
