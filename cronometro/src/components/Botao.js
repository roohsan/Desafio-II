import React, { Component } from 'react';
import './Botao.css';

const Botao = (props) => (
  <button className={props.estilo} onClick={props.func}>
    {props.name}
  </button>
);

export default Botao;
