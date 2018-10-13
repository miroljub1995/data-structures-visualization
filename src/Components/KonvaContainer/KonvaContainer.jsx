import React, {Component} from 'react';
import {Stage, Layer, Rect} from 'react-konva';

class KonvaContainer extends Component {
  render() {
    return (<Stage style={{float: 'left'}} width={this.props.width} height={this.props.height}>
      <Layer>
        <Rect stroke='green' strokeWidth={2} width={this.props.width} height={this.props.height}/>{this.props.children}
      </Layer>
    </Stage>)
  }
}

export default KonvaContainer;
