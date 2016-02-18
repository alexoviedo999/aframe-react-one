import AFRAME from 'aframe-core';
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
import layout from 'aframe-layout';

AFRAME.registerComponent('layout', layout);

console.log('layout', layout);
console.log('aframe', AFRAME);

console.log('layout', layout);

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
            <Entity rotation="0 -90 0">
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
                        dur = "6000"
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
                        position = "120 5 10">

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
                            position = "120 -5 -10">

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
                                position = "80 5 10">

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
                                position = "80 -5 -10">

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
                                position = "40 5 10">

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
                                position = "40 -5 -10">

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
                                position = "20 5 10">

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
                                position = "20 -5 -10">

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
                                position = "10 5 10">

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
                                position = "10 -5 -10">

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
