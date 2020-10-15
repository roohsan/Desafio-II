import React, { Component } from 'react';
import Contador from './Contador';
import LabelTitle from './LabelTitle';
import Timer from './Timer';
import Relogio from './Relogio';
import Botao from './Botao';
import './Tela.css';

class Tela extends Component {
  componentDidMount() {
    document.getElementById('clock').style.display = 'none';
    document.getElementById('timer').style.display = 'flex';
    document.getElementById('stopwatch').style.display = 'none';
  }

  show(el, el2, el3) {
    var display = document.getElementById(el).style.display;
    if (display == 'none') {
      document.getElementById(el).style.display = 'flex';
      document.getElementById(el2).style.display = 'none';
      document.getElementById(el3).style.display = 'none';
    }
  }

  render() {
    return (
      <div className="container">
        <div id="clock" className="element">
          <LabelTitle name="Relógio" />
          <Relogio timezone="Brazil/Brasilia" />
          <Relogio timezone="America/New_York" />
          <Relogio timezone="Africa/Johannesburg" />
          <Relogio timezone="Europe/London" />
        </div>
        <div id="timer" className="element">
          <LabelTitle name="Timer" />
          <Timer />
        </div>
        <div id="stopwatch" className="element">
          <LabelTitle name="Cronômetro" />
          <Contador />
        </div>
        <div className="buttons">
          <Botao
            estilo="btn menu"
            func={() => {
              this.show('clock', 'timer', 'stopwatch');
            }}
            name="Relógio"
          />
          <Botao
            estilo="btn menu"
            func={() => {
              this.show('timer', 'clock', 'stopwatch');
            }}
            name="Timer"
          />
          <Botao
            estilo="btn menu"
            func={() => {
              this.show('stopwatch', 'timer', 'clock');
            }}
            name="Crono"
          />
        </div>
      </div>
    );
  }
}

export default Tela;
