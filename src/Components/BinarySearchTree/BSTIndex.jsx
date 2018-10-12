import React, {Component} from 'react';
import BSTContainer from './BSTContainer';
import Operations from './Operations';
import Player from './../Player/Player';
import {Insert, Insert2} from './Algorithms';
import {Pseudocode} from './../Pseudocode/Pseudocode';

export default class BSTIndex extends Component {
  constructor(props) {
    super(props);
    let root = {
      val: 5,
      left: {
        val: 1,
        left: {
          val: -1,
          left: null,
          right: null
        },
        right: {
          val: 4,
          left: null,
          right: null
        }
      },
      right: {
        val: 7,
        left: {
          val: 6,
          left: null,
          right: null
        },
        right: {
          val: 10,
          left: null,
          right: {
            val: 11,
            left: null,
            right: null
          }
        }
      }
    };
    this.state = {
      root: null,
      frames: [],
      currentFrame: null
    };

  }

  handleInsert = (value) => {
    let frames = Insert2(this.state.root, value);
    let root = frames[frames.length - 1].root;
    this.setState({root, frames, currentFrame: null});
  }

  handleNextFrame = (frame) => {
    this.setState({currentFrame: frame});
  }

  render() {
    const {root, frames, currentFrame} = this.state;

    return (<div>
      <Operations onInsert={this.handleInsert}/>
      {this.state.currentFrame && <BSTContainer bSTFrame={currentFrame} width={700} height={400}/>}
      {currentFrame && <Pseudocode style={{width: '430px', height: '400px', float: 'left'}} text={currentFrame.pseudocode} selectedLine={currentFrame.currentLine} />}
      <Player width={1100} frames={frames} onNextFrame={this.handleNextFrame}/>
    </div>);
  }
}
