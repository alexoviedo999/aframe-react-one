import 'aframe-core';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Light from './components/Light';
import Sky from './components/Sky';

import ui from 'popmotion';
import aframeRole from 'popmotion-aframe-role';

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  changeColor = () => {
    console.log('change color');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  cylinderChange = () => {
    console.log('cylinderchange');
    const cylinder = new ui.Actor({
        element: document.getElementById('cylinder'),
        as: aframeRole,
        values: {
          segmentsHeight: 4,
          segmentsWidth: 8
        }
    });

    const moveBackAndForth = new ui.Tween({
        values: {
            x: 50
        },
        duration: 5000,
        ease: 'easeInOut',
        yoyo: true
    });

    cylinder.start(moveBackAndForth);

  };

  render () {
    return (
      <div>
        <a-assets>
          <img id="sky" src="../img/fiji2.jpg"/>
        </a-assets>


        <Scene>
          <Camera><Cursor/></Camera>

          <Sky/>

          <Light type="ambient" color="#888"/>
          <Light type="directional" intensity="0.5" position="-1 1 0"/>
          <Light type="directional" intensity="1" position="1 1 0"/>



          <Entity id="cylinder" geometry="primitive: sphere; height: 0.5; `segmentsRadial: 6" material={{color: this.state.color}}
            onMouseEnter={this.cylinderChange}
            position="0 0 -5">

            <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
          </Entity>

        </Scene>
      </div>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
