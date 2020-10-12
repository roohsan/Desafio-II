import React, { Component } from 'react';
import './Relogio.css';

class Relogio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horario: '',
    };
    this.updateClock = this.updateClock.bind(this);
  }

  componentDidMount() {
    this.relogio = setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    var moment = require('moment-timezone');
    let localTime = moment()
      .tz(this.props.timezone)
      .format('HH:mm:ss')
      .toString();
    this.setState({ horario: localTime });
  }

  render() {
    return (
      <div
        className={
          this.props.timezone === 'Brazil/Brasilia'
            ? 'principal-clock'
            : 'clock'
        }
      >
        <span
          className={
            this.props.timezone === 'Brazil/Brasilia'
              ? 'principal-timezone'
              : 'timezone'
          }
        >
          {this.props.timezone}
        </span>
        <span
          className={
            this.props.timezone === 'Brazil/Brasilia'
              ? 'principal-time'
              : 'time'
          }
        >
          {this.state.horario}
        </span>
      </div>
    );
  }
}

export default Relogio;
