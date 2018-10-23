import React, {Component} from 'react';
import {Group} from 'react-konva';
import HorizontalArray from './../Array/HorizontalArray';
import Variable from './../Variables/Variable';

export default class MinHeapContainer extends Component {
  render() {
    const {frame, width} = this.props;
    const {heap, n, indexes, variables} = frame;
    const variablesView = variables.map((v, i) => {
      debugger;
      return (<Variable key={v.name} top={i*30 + 10} right={width-20} height={20} name={v.name} value={v.value} />);
    });
    return (<Group>
      {variablesView}
      <HorizontalArray top={5} left={70} array={heap} n={n} indexes={indexes}/>
    </Group>);
  }
}
