import React, {Component} from 'react';
import BSTContainer from './BSTContainer';
import Operations from './Operations';
import Player from './../Player/Player';
import {Insert2} from './Algorithms';
import {Pseudocode} from './../Pseudocode/Pseudocode';

export default class BSTIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      root: null,
      frames: [],
      currentFrame: null
    };

  }

  handleInsert = (values) => {
    debugger;
    let frames = [];
    let root = this.state.root;
    values.forEach((value)=>{
      frames = frames.concat(Insert2(root, value));
      root = frames[frames.length - 1].root;
    });
    this.setState({root, frames, currentFrame: null});
  }

  handleNextFrame = (frame) => {
    this.setState({currentFrame: frame});
  }

  render() {
    const {frames, currentFrame} = this.state;

    return (<div>
      <Operations onInsert={this.handleInsert}/>
      {this.state.currentFrame && <BSTContainer bSTFrame={currentFrame} width={700} height={400}/>}
      {currentFrame && <Pseudocode style={{width: '430px', height: '400px', float: 'left'}} text={currentFrame.pseudocode} selectedLine={currentFrame.currentLine} />}
      {(frames.length > 0) && <Player width={1100} frames={frames} onNextFrame={this.handleNextFrame}/>}
    </div>);
  }
}
