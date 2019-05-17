import React, { Component } from 'react';
import './ControlPanel.css';

export default class ControlPanel extends Component {
  render() {
    const { run } = this.props;
    return (
      <div>
        <button onClick={run}>Next Generation</button>
      </div>
    )
  }
}
