import React, {Component} from 'react';
import {Arrow, Group} from 'react-konva';
import Variable from './Variable';

export default class Pointer extends Component {
  render() {
    const {
      right,
      height,
      top,
      name,
      rotation = 0
    } = this.props;
    let middle = top + height / 2;
    let arrowWidth = 20;
    let arrowPoints = [
      right - arrowWidth,
      middle,
      right,
      middle
    ];
    debugger;
    return (<Group offsetX={-right} offsetY={-middle}>
      <Group rotation={rotation} offsetX={right} offsetY={middle}>
        <Arrow points={arrowPoints} stroke='red' fill='red' x={0} y={0} pointerLength={7} pointerWidth={7} shadowBlur={5}/>
        <Variable height={height} right={right - arrowWidth} top={top} name={name}/>
      </Group>
    </Group>);
  }
};
