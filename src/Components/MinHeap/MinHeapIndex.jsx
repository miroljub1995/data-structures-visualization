import React, {Component} from 'react';
import Operations from './Operations';
import MinHeapContainer from './MinHeapContainer';
import {Pseudocode} from './../Pseudocode/Pseudocode';
import Player from './../Player/Player';
import {Insert, Delete} from './Algorithms';
import KonvaContainer from './../KonvaContainer/KonvaContainer';


export default class MinHeapIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heap: [...Array(15)],
      n: 0,
      frames: [],
      currentFrame: null
    };
  }

  handleInsert = (values) => {
    let frames = [];
    let {heap, n} = this.state;
    values.forEach((value)=>{
      frames = frames.concat(Insert(heap, n, value));
      heap = frames[frames.length - 1].heap;
      n = frames[frames.length - 1].n;
    });
    this.setState({heap, n, frames, currentFrame: null});
  }

  handleDelete = () => {
    let frames = [];
    let {heap, n} = this.state;
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
    return (<div>
      <Operations onInsert={this.handleInsert} onDelete={this.handleDelete} />
      {this.state.currentFrame && <KonvaContainer width={width} height={height}><MinHeapContainer frame={currentFrame} width={width} height={height}/></KonvaContainer>}
      {currentFrame && <Pseudocode style={{width: '430px', height: '400px', float: 'left'}} text={currentFrame.pseudocode} selectedLine={currentFrame.currentLine} />}
      {(frames.length > 0) && <Player width={1100} frames={frames} onNextFrame={this.handleNextFrame}/>}
    </div>);
  }
}
