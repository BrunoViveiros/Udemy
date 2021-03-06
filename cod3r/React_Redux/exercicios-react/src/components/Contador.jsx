import React, { Component } from 'react';

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial
  };

  maisUm = () => {
    this.setState({ numero: this.state.numero + 1 });
    // this.state.numero = this.state.numero + 1;
  };
  menosUm = () => {
    this.setState({ numero: this.state.numero - 1 });
  };

  alterarNumero = diferenca => {
    this.setState({ numero: this.state.numero + diferenca });
  };

  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={this.maisUm}>Inc</button>
        <button onClick={this.menosUm}>Inc</button>
        <button onClick={() => this.alterarNumero(10)}>Inc10</button>
        <button onClick={() => this.alterarNumero(-10)}>Dec10</button>
      </div>
    );
  }
}

// Solução 01 - Função bind
// constructor(props) {
//   super(props);
//   this.maisUm = this.maisUm.bind(this);
// }

// Solução 02 - Função Arrow no click
// <button onClick={() => this.maisUm()}>Inc</button>

// Solução 03 - Função Arrow
// maisUm = () => {
//   // this.props.numero++;
//   console.log(this);
// }
