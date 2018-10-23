import React, {Component} from 'react';
import {Rect, Text, Group} from 'react-konva';
import Pointer from './../BinarySearchTree/Pointer';

export default class HorizontalElement extends Component{
  render(){
    const {value, index, top, left, elementH, elementW, indexH, indexes} = this.props;
    const indexesLength = indexes.length;
    const rotationAngle = -20;
    const indexesView = indexes.map((e, i)=>{
      return (<Pointer
                rotation={(indexesLength - 1 - 2 * i) * rotationAngle - 90}
                key={e.name}
                name={e.name}
                right={left + elementW/2}
                top={top + indexH + elementH}
                height={elementH/2}/>);
    });

    return (<Group>
      <Text text={`${index}`} x={left} y={top} width={elementW} height={indexH}  align='center' verticalAlign='middle'/>
      <Rect fill={value ? 'green' : 'yellow'} x={left} y={top + indexH} width={elementW} height={elementH} stroke='dark' strokeWidth={1}/>
      {value && <Text text={`${value}`} x={left} y={top + indexH} width={elementW} height={elementH} align='center' verticalAlign='middle'/>}
      {indexesView}
    </Group>);
  }
}
