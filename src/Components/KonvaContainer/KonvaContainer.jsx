import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

class KonvaContainer extends Component{
  render(){
    return (
      <Stage width={this.props.width} height={this.props.height}>
        <Layer>
          <Rect stroke='red' strokeWidth={5} width={this.props.width} height={this.props.height} />
          {this.props.children}
        </Layer>
      </Stage>
    )
  }
}

export default KonvaContainer;
