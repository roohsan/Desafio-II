import React, { Component } from 'react';
import Botao from './Botao';
import LabelTitle from './LabelTitle';
import './Relogio.css';
import './Contador.css';

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segundos: 0,
      minutos: 0,
      paused: false,
      nameButton: 'Pause',
      parcial: [],
      stringParciais: '',
    };
    this.pararCronometro = this.pararCronometro.bind(this);
    this.updateParcial = this.updateParcial.bind(this);
  }

  incrementar() {
    this.setState((state) => {
      if (state.paused === false) {
        if (state.segundos >= 59) {
          this.zerar();
          this.incrementarMinutos();
        }
        //prettier-ignore
        return ({ segundos: state.segundos + 1 });
      }
    });
  }

  zerar() {
    this.setState({ segundos: 0 });
  }

  incrementarMinutos() {
    this.setState({ minutos: this.state.minutos + 1 });
  }

  /*componentDidMount() {
    this.timer = setInterval(() => this.incrementar(), 1000);
  }*/

  iniciarCronometro() {
    this.timer = setInterval(() => this.incrementar(), 1000);
  }

  zerarCronometro() {
    this.setState({ minutos: 0, segundos: 0, parcial: [], stringParciais: '' });
    clearInterval(this.timer);
  }

  pararCronometro() {
    if (this.state.paused === false) {
      clearInterval(this.timer);
      this.setState({ paused: true });
      this.setState({ nameButton: 'Play' });
    } else {
      this.setState({ nameButton: 'Pause' });
      this.setState({ paused: false });
      this.timer = setInterval(() => this.incrementar(), 1000);
    }
  }

  updateParcial() {
    const parciais = this.state.parcial;
    let { minutos, segundos, stringParciais } = this.state;
    const anterior = parciais[parciais.length - 1];
    let novaParcial = {
      minutos,
      segundos,
      difMinutos:
        parciais.length === 0
          ? 0
          : minutos > anterior.minutos && segundos >= anterior.segundos
          ? minutos - anterior.minutos
          : 0,
      difSegundos:
        parciais.length === 0
          ? 0
          : segundos >= anterior.segundos
          ? segundos - anterior.segundos
          : 60 - (anterior.segundos - segundos),
    };
    parciais.push(novaParcial);
    stringParciais += `${novaParcial.minutos}:${novaParcial.segundos} - ${novaParcial.difMinutos}:${novaParcial.difSegundos} | `;
    this.setState({ parcial: parciais, stringParciais });
  }

  render() {
    return (
      <div>
        <div className="principal-clock">
          <span className="principal-time">
            {this.state.minutos}:{this.state.segundos}
          </span>
        </div>
        <div className="cronometro-btns">
          <Botao
            estilo="btn start"
            func={() => this.iniciarCronometro()}
            name="Iniciar"
          />
          <Botao
            estilo="btn other"
            func={() => this.pararCronometro()}
            name={this.state.nameButton}
          />
          <Botao
            estilo="btn other"
            func={() => this.zerarCronometro()}
            name="Zerar"
          />
          <Botao
            estilo="btn other"
            func={() => this.updateParcial()}
            name="Parcial"
          />
        </div>
        <div id="container-parc">
          <LabelTitle name="Parciais" />
          <span id="parcial">{this.state.stringParciais}</span>
        </div>
      </div>
    );
  }
}

export default Contador;
