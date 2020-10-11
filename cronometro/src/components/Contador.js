import React, { Component } from 'react';
import Botao from './Botao';
import LabelTitle from './LabelTitle';

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
      if (state.segundos >= 59) {
        this.zerar();
        this.incrementarMinutos();
      }
      //prettier-ignore
      return ({ segundos: state.segundos + 1 });
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
    stringParciais += `${novaParcial.minutos}:${novaParcial.segundos} | ${novaParcial.difMinutos}:${novaParcial.difSegundos} -- `;
    this.setState({ parcial: parciais, stringParciais });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.minutos}:{this.state.segundos}
        </h1>
        <Botao func={() => this.iniciarCronometro()} name="Iniciar" />
        <Botao
          func={() => this.pararCronometro()}
          name={this.state.nameButton}
        />
        <Botao func={() => this.zerarCronometro()} name="Zerar" />
        <Botao func={() => this.updateParcial()} name="Parcial" />
        <LabelTitle name="Parciais" />
        <h2>{this.state.stringParciais}</h2>
      </div>
    );
  }
}

export default Contador;
