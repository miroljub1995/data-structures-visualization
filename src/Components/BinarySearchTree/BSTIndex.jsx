import React, {Component} from 'react';
import BinaryTreeContainer from './../BinaryTree/BinaryTreeContainer';
import Operations from './Operations';
import Player from './../Player/Player';
import {Insert2} from './Algorithms';
import {Pseudocode} from './../Pseudocode/Pseudocode';
import KonvaContainer from './../KonvaContainer/KonvaContainer';

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

    const width = 700;
    const height = 400;

    return (<div>
      <Operations onInsert={this.handleInsert}/>
      {this.state.currentFrame && <KonvaContainer width={width} height={height}><BinaryTreeContainer frame={currentFrame} width={width} height={height}/></KonvaContainer>}
      {currentFrame && <Pseudocode style={{width: '430px', height: `${height}px`, float: 'left'}} text={currentFrame.pseudocode} selectedLine={currentFrame.currentLine} />}
      {(frames.length > 0) && <Player width={1130} frames={frames} onNextFrame={this.handleNextFrame}/>}
    </div>);
  }
}
