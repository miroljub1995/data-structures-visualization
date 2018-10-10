import React, { Component } from 'react';
import {Arrow, Group} from 'react-konva';
import Variable from './Variable';

export default class Pointer extends Component{
  render(){
    const {right, height, top, name} = this.props;
    let middle = top + height/2;
    let arrowWidth = 20;
    let arrowPoints = [right-arrowWidth, middle, right, middle];
    return (
      <Group>
        <Arrow points = {arrowPoints} stroke='red' fill='red' x={0} y={0} pointerLength={7} pointerWidth={7} shadowBlur={5} />
        <Variable height={height} right={right - arrowWidth} top={top} name={name} />
      </Group>);
  }
}
