import React, {Component} from 'react';
import KonvaContainer from './../KonvaContainer/KonvaContainer';
import BinarySearchTree from './BinarySearchTree';
import {Group, Rect, Text, Arrow} from 'react-konva';

export default class BSTContainer extends Component{

  getRootPointer(isNull){
    const {width} = this.props;
    const {w, h} = {w:50,h:20};
    const offsetFromTop = 10;
    const x = width/2 - w/2;
    const y = offsetFromTop;
    if(isNull)
      return (
        <Group>
          <Rect x={x} y={y} width={w} height={h} fill='blue' shadowBlur={5} />
          <Text x={x} y={y} fill="white" text="root" align='center' verticalAlign='middle' width={w} height={h} />
        </Group>
      );
    return (
      <Group>
        <Rect x={x} y={y} width={w} height={h} fill='blue' shadowBlur={5} />
        <Text x={x} y={y} fill="white" text="root" align='center' verticalAlign='middle' width={w} height={h} />
        <Arrow points={[width/2, y + h, width/2, 50]} stroke='black' fill='black' />
      </Group>
    );
  }

  render(){
    const {root, pointers} = this.props.bSTFrame;
    const {width, height} = this.props;
    const rootPointer = this.getRootPointer(root === null);
    return (
      <KonvaContainer width={width} height={height}>
        <BinarySearchTree pointers = {pointers} root={root} width={width} x={width/2} y={50} />
        {rootPointer}
      </KonvaContainer>);
  }
}
