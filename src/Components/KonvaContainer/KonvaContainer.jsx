import React, {Component} from 'react';
import {Stage, Layer, Rect} from 'react-konva';
import {Grid, Row, Col} from 'react-bootstrap';

class KonvaContainer extends Component {
  render() {
    return (<Stage width={this.props.width} height={this.props.height}>
      <Layer>
        <Rect stroke='red' strokeWidth={5} width={this.props.width} height={this.props.height}/>{this.props.children}
      </Layer>
    </Stage>)
  }
}

export default KonvaContainer;
