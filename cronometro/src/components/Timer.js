import React, { Component } from 'react';
import Botao from './Botao';
import './Timer.css';
import './Relogio.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutos: 0,
      segundos: 0,
    };
  }

  decrementar() {
    this.setState((state) => {
      if (state.segundos === 0 && state.minutos === 0) {
        this.informarTermino();
        return null;
      } else if (state.segundos === 0 && state.minutos > 0) {
        this.incrementarSegundos();
        this.decrementarMinuto();
      }
      return { segundos: state.segundos - 1 };
    });
  }

  incrementarSegundos() {
    this.setState({ segundos: 59 });
  }

  decrementarMinuto() {
    this.setState({ minutos: this.state.minutos - 1 });
  }

  informarTermino() {
    clearInterval(this.timer);
    window.alert('O timer terminou!');
  }

  startTimer() {
    this.timer = setInterval(() => this.decrementar(), 1000);
  }

  render() {
    return (
      <div>
        <div className="principal-clock">
          <span className="principal-time">
            {this.state.minutos}:{this.state.segundos}
          </span>
        </div>
        <div className="config-timer">
          <input
            type="number"
            name="minutos"
            max="59"
            min="0"
            placeholder="Minutos"
            onChange={(event) => {
              this.setState({ minutos: event.target.value });
            }}
          />
          <input
            type="number"
            name="segundos"
            max="59"
            min="0"
            placeholder="Segundos"
            onChange={(event) => {
              this.setState({ segundos: event.target.value });
            }}
          />
          <Botao
            estilo="btn start"
            func={() => this.startTimer()}
            name="Play"
          />
        </div>
      </div>
    );
  }
}

export default Timer;
