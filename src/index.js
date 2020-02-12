import React from 'react';
import ReactDOM from 'react-dom';

// import PrimeiroComponente from './components/PrimeiroComponente';
// import CompA, { CompB as B } from './components/DoisComponentes';
// import MultiElementos from './components/MultiElementos';
// import FamiliaSilva from './components/FamiliaSilva';
import Familia from './components/Familia';
import Membro from './components/Membro';

const elemento = document.getElementById('root');
ReactDOM.render(
  <div>
    <Familia sobrenome='Pereira'>
      <Membro nome='Andre' />
      <Membro nome='Mariana' />
    </Familia>
    {/* <FamiliaSilva /> */}
    {/* <MultiElementos /> */}
    {/* <CompA valor='Olá eu sou o A!' />
    <B valor='B na área' /> */}
    {/* <PrimeiroComponente valor='Bom Dia!' /> */}
  </div>,
  elemento
);

// const jsx = <h1>Olá React</h1>;
// ReactDOM.render(jsx, elemento);
