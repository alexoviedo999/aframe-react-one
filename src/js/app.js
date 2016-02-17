import 'aframe-core';
import 'babel-polyfill';
import {
    Animation, Entity, Scene
}
from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Light from './components/Light';
import Sky from './components/Sky';

class BoilerplateScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
    }

    changeColor = () => {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
        this.setState({
            color: colors[Math.floor(Math.random() * colors.length)],
        });
    };

    render() {
        return (
            <div>
              <a-assets>
                <img id="sky" src="../img/fiji2.jpg"/>
              </a-assets>

            <Scene>
            <Entity rotation="0 -85 0">
                <Camera >
                    <Cursor/>
                </Camera>
            </Entity>
                <Sky/>

                <Light
                type = "ambient"
                color = "#888" />
                <Light
                type = "directional"
                intensity = "0.5"
                position = "-1 1 0" />
                <Light
                type = "directional"
                intensity = "1"
                position = "1 1 0" />
                <Entity>
                    <Animation
                        attribute = "rotation"
                        dur = "4000"
                        easing= "linear"
                        repeat = "indefinite"
                        to = "360 0 0" />
                    <Entity
                        geometry = "primitive: box"
                        material = {
                            {
                                color: this.state.color
                            }
                        }
                        onClick = {
                            this.changeColor
                        }
                        position = "60 10 0">

                        </Entity>

                    <Entity
                        geometry = "primitive: box"
                        material = {
                            {
                                color: this.state.color
                            }
                        }
                        onClick = {
                            this.changeColor
                        }
                        position = "50 10 5">

                    </Entity>

                    <Entity
                        geometry = "primitive: box"
                        material = {
                            {
                                color: this.state.color
                            }
                        }
                        onClick = {
                            this.changeColor
                        }
                        position = "40 10 10">

                        <Animation
                            attribute = "rotation"
                            dur = "5000"
                            repeat = "indefinite"
                            to = "0 0 360" />
                    </Entity>
                    <Entity
                        geometry = "primitive: box"
                        material = {
                            {
                                color: this.state.color
                            }
                        }
                        onClick = {
                            this.changeColor
                        }
                        position = "30 10 15">

                        <Animation
                            attribute = "rotation"
                            dur = "5000"
                            repeat = "indefinite"
                            to = "0 0 360" />
                    </Entity>
                <Entity
                    geometry = "primitive: box"
                    material = {
                        {
                            color: this.state.color
                        }
                    }
                    onClick = {
                        this.changeColor
                    }
                    position = "20 10 20">


                    <Animation
                        attribute = "rotation"
                        dur = "5000"
                        repeat = "indefinite"
                        to = "0 0 360" />
                </Entity>



                </Entity>
            </Scene>
            </div>
        );
    }
}

ReactDOM.render( <BoilerplateScene />, document.querySelector('.scene-container'));
