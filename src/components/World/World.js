import React, { Component } from 'react';
import posed from 'react-pose';
import './World.css';

export default class World extends Component {

  state = {
    time: 'start',
  }

  componentDidMount() {
    setInterval(() => this.setState({ time: 'end' }), 500)
  }

  render() {

    const { time } = this.state;

    return (
      <div className='World'>
        <svg>
          {this.props.population.map(unit => {
            const Circle = posed.circle({
              start: {cx: unit.pos.x, cy: unit.pos.y},
              end: {cx: unit.pos.x + 5, cy: unit.pos.y + 5, transition: { type: 'physics', velocity: 20 }}
            })
            return (
              <Circle key={unit.id} id={unit.id} pose={time} r={unit.genes.size} />
            )

          })}
        </svg>
      </div>
    )
  }
}
