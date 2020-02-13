import React, { Component } from 'react';

export default class Contador extends Component {
  maisUm = () => {
    this.props.numero++;
  };

  render() {
    return (
      <div>
        <div>Número: {this.props.numero}</div>
        <button onClick={this.maisUm}>Inc</button>
        <button>Dec</button>
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
