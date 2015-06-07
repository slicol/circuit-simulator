import React from 'react';
import Animator from 'react-mainloop';

import CircuitCanvas from './CircuitCanvas.jsx';
import Updater from '../update/Updater.js';

const FPS = 10;
const TIMESTEP = 1000 / FPS;

const animate = new Animator(TIMESTEP);

export default class AnimatedDiagram extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      updater: new Updater()
    };
  }

  render() {
    const Diagram = animate(CircuitCanvas, this.state.updater.getUpdateFor);
    return (
      <Diagram
        width={this.props.width}
        height={this.props.height}
        pushEvent={() => { console.log('pushEvent not registered yet'); }} // this should get overidden after first render - this is a bit nasty
      />
    );
  }
}

AnimatedDiagram.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  circuitStore: React.PropTypes.any.isRequired // TODO type
};
