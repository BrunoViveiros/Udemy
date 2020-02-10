import React from 'react';
import ReactDOM from 'react-dom';

// import PrimeiroComponente from './components/PrimeiroComponente';
import {CompA, CompB as B} from './components/DoisComponentes'

const elemento = document.getElementById('root');
ReactDOM.render(
  <div>
    <CompA valor='Olá eu sou o A!'/>
    <B valor='B na área'/>
    {/* <PrimeiroComponente valor='Bom Dia!' /> */}
  </div>,
  elemento
);

// const jsx = <h1>Olá React</h1>;
// ReactDOM.render(jsx, elemento);
