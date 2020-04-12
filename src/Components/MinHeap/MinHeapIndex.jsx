import React, {Component} from 'react';
import Operations from './Operations';
import MinHeapContainer from './MinHeapContainer';
import {Pseudocode} from './../Pseudocode/Pseudocode';
import Player from './../Player/Player';
import {Insert, Delete} from './Algorithms';
import KonvaContainer from './../KonvaContainer/KonvaContainer';
import BinaryTreeContainer from './../BinaryTree/BinaryTreeContainer';


export default class MinHeapIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heap: [...Array(16)],
      n: 0,
      frames: [],
      currentFrame: null
    };
  }

  handleInsert = (values) => {
    let {heap, n} = this.state;
    if(n >= heap.length)
      return;
    let frames = [];
    values.forEach((value)=>{
      frames = frames.concat(Insert(heap, n, value));
      heap = frames[frames.length - 1].heap;
      n = frames[frames.length - 1].n;
    });
    this.setState({heap, n, frames, currentFrame: null});
  }

  handleDelete = () => {
    let {heap, n} = this.state;
    if(n < 1)
      return;
    let frames = [];
    frames = Delete(heap, n);
    heap = frames[frames.length - 1].heap;
    n = frames[frames.length - 1].n;
    this.setState({heap, n, frames, currentFrame: null});
  }

  handleNextFrame = (frame) => {
    this.setState({currentFrame: frame});
  }

  render(){
    const {frames, currentFrame} = this.state;
    const {width, height} = {width: 700,height: 500};
    debugger;
    return (<div>
      <Operations onInsert={this.handleInsert} onDelete={this.handleDelete} />
      {this.state.currentFrame && <KonvaContainer width={width} height={height}>
                                      <MinHeapContainer frame={currentFrame} width={width} height={height}/>
                                      <BinaryTreeContainer frame={currentFrame.binaryTreeFrame} width={width} top={150} />
                                  </KonvaContainer>}
      {currentFrame && <Pseudocode style={{width: '430px', height: '400px', float: 'left'}} text={currentFrame.pseudocode} selectedLine={currentFrame.currentLine} />}
      {(frames.length > 0) && <Player width={1130} frames={frames} onNextFrame={this.handleNextFrame}/>}
    </div>);
  }
}
