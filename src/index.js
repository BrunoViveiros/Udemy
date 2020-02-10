import React from 'react';
import ReactDOM from 'react-dom';

import PrimeiroComponente from './components/PrimeiroComponente';

const elemento = document.getElementById('root');
ReactDOM.render(
  <div>
    <PrimeiroComponente valor='Bom Dia!'></PrimeiroComponente>
  </div>,
  elemento
);

// const jsx = <h1>Olá React</h1>;
// ReactDOM.render(jsx, elemento);
