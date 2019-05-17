import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { World, ControlPanel } from './components';

export default class App extends Component {

  state = {
    population : [],
  }

  componentDidMount() {
    this.initPopulation();
  }

  initPopulation = () => {
    const { population } = this.state;

    for (let i = 0; i < 10; i++) {
      const unit = {
        id: uuid(),
        pos: {
          x: Math.random() * 400,
          y: Math.random() * 400,
        },
        genes: {
          size: 2,
        },
      };

      population.push(unit);
    }
    this.setState({
      population,
    });
  }

  run = () => {
    console.log(this.state.population)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <World population={this.state.population} />
        <ControlPanel run={this.run} />
      </div>
    );
  }

}
