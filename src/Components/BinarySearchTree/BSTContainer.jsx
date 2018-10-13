import React, {Component} from 'react';
import KonvaContainer from './../KonvaContainer/KonvaContainer';
import BinarySearchTree from './BinarySearchTree';
import TreeNode from './TreeNode';
import Pointer from './Pointer';
import {Group, Rect, Text, Arrow} from 'react-konva';
import Variable from './Variable';

export default class BSTContainer extends Component {

  getNullPointers(pointers = []) {
    return pointers.filter(pointer => !pointer.pointer);
  }

  getRootPointer(isNull) {
    const {width} = this.props;
    const {w, h} = {
      w: 50,
      h: 20
    };
    const offsetFromTop = 10;
    const x = width / 2 - w / 2;
    const y = offsetFromTop;
    if (isNull)
      return (<Group>
        <Rect x={x} y={y} width={w} height={h} fill='blue' shadowBlur={5}/>
        <Text x={x} y={y} fill="white" text="root" align='center' verticalAlign='middle' width={w} height={h}/>
      </Group>);
    return (<Group>
      <Rect x={x} y={y} width={w} height={h} fill='blue' shadowBlur={5}/>
      <Text x={x} y={y} fill="white" text="root" align='center' verticalAlign='middle' width={w} height={h}/>
      <Arrow points={[
          width / 2,
          y + h,
          width / 2,
          50
        ]} stroke='black' fill='black'/>
    </Group>);
  }

  getPointersToHangingNodes(hangingNodes, pointers) {
    return pointers.filter(p => hangingNodes.some(n => p.pointer === n));
  }

  render() {
    const {root, pointers, hangingNodes} = this.props.bSTFrame;
    const {width, height} = this.props;
    const rootPointer = this.getRootPointer(root === null);
    let nullPointers = this.getNullPointers(pointers);
    nullPointers = nullPointers.map((pointer, i) => {
      return (<Variable key={pointer.name} name={pointer.name} isNull={true} right={width - 10} top={i * 25 + 5} height={20}/>);
    });
    let hangingNodesWithPointers = hangingNodes.map((node, i) => {
      let pointerToNode = pointers.find(p => p.pointer === node);
      let treeNodeRadius = 15;
      let x = width - 200;
      let y = i * 35 + 20;
      return (<Group key={node}>
        <TreeNode val={node.val} x={x} y={y} radius={15}/>
        <Pointer rotation={0} key={pointerToNode.name} name={pointerToNode.name} right={x - treeNodeRadius} top={y - treeNodeRadius / 2} height={treeNodeRadius}/>
      </Group>);
    });

    //debugger;
    return (<KonvaContainer width={width} height={height}>
      <BinarySearchTree pointers={pointers} root={root} width={width-200} x={width / 2} y={50}/>
      {rootPointer}
      {nullPointers}
      {hangingNodesWithPointers}
    </KonvaContainer>);
  }
}
