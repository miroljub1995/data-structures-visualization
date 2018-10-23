import React, {Component} from 'react';
import Pointer from './../BinarySearchTree/Pointer';
import HorizontalElement from './HorizontalElement';
import {Group, Rect} from 'react-konva';

export default class HorizontalArray extends Component{
  render(){
    const {top, left, array, n, indexes} = this.props;
    const elementH = 30, elementW = 30;
    const arrayWidth = array.length * elementW;
    const indexH = 20;

    const elements = array.map((e, i)=>{
      const indexesToThisElement = indexes.filter((e)=>e.index === i);
      return (<HorizontalElement key={i} top={top} left={left + i*elementW} elementH={elementH} elementW={elementW} value={e} index={i} indexH={indexH} indexes={indexesToThisElement} />);
    });

    return (<Group>
      <Rect fill='dark' x={left} y={top+indexH} height={elementH} width={arrayWidth} shadowBlur={7} />
      {elements}
      <Pointer
                rotation={0}
                key={`heap`}
                name={`heap`}
                right={left-3}
                top={top + indexH + elementH/4}
                height={elementH/2} />
    </Group>);
  }
}
