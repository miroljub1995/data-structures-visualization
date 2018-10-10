import React, { Component } from 'react';
import TreeNode from './TreeNode';
import { Group, Arrow, Text } from 'react-konva'
import Konva from 'konva';
import Pointer from './Pointer';

class BinarySearchTree extends Component{

  getLeftSubTree(x, y, width){
      if(this.props.root.left !== null)
        return (<BinarySearchTree pointers={this.props.pointers} root={this.props.root.left} x={x} y={y} width={width} />);
      return null;
  }

  getRightSubTree(x, y, width){
    if(this.props.root.right !== null)
      return (<BinarySearchTree pointers={this.props.pointers} root={this.props.root.right} x={x} y={y} width={width} />);
    return null;
  }

  getArrowFromRootToChild(rootX, rootY, childX, childY, treeNodeRadius){
      let points = this.getArrowPoints(rootX, rootY, childX, childY, treeNodeRadius);
      return this.getArrow(points);
  }

  getArrowPoints(rootX, rootY, childX, childY, treeNodeRadius){
    let alfa = Math.atan(Math.abs((rootX-childX)/(rootY-childY)));
    let d1 = treeNodeRadius * Math.sin(alfa);
    let d2 = treeNodeRadius * Math.cos(alfa);
    let y1 = rootY + d2;
    let y2 = childY - d2;
    if(rootX > childX){
      d1=-d1;
      d2=-d2;
    }
    let x1 = rootX + d1;
    let x2 = childX - d1;
    return [x1,y1,x2,y2];
  }

  getArrow(points){
    return (
      <Arrow points={points} stroke='black' fill='black' />
    )
  }

  getPointersToRoot(pointers = []){
    let filtered = pointers.filter(pointer => pointer.pointer === this.props.root);
    return filtered;
  }

  render(){
    let treeNodeRadius = 20;
    let levelDifferenceY = 60;

    const {x, y, root, width, pointers} = this.props;

    if(root === null)
      return null;

    let rootX = x;
    let rootY = y + treeNodeRadius;
    let rootVal = root.val;

    let leftChildX = x - width / 4;
    let rightChildX = x + width / 4;
    let childWidth = width/2;
    let childY = y + levelDifferenceY;
    let childRootY = rootY + levelDifferenceY;

    let leftSubTree = this.getLeftSubTree(leftChildX, childY, childWidth);
    let rightSubTree = this.getRightSubTree(rightChildX, childY, childWidth);
    let arrowToLeftSubTree = null;
    let arrowToRightSubTree = null;

    if(leftSubTree !== null)
      arrowToLeftSubTree = this.getArrowFromRootToChild(rootX, rootY, leftChildX, childRootY, treeNodeRadius);

    if(rightSubTree !== null)
      arrowToRightSubTree = this.getArrowFromRootToChild(rootX, rootY, rightChildX, childRootY, treeNodeRadius);

    let pointersToRoot = this.getPointersToRoot(pointers);
    pointersToRoot = pointersToRoot.map(pointer=>(
      <Pointer key={pointer.name} name={pointer.name} right={rootX - treeNodeRadius} top={rootY - treeNodeRadius/2} height={treeNodeRadius} />));
    //pointersToRoot = (<Group>{pointersToRoot}</Group>);
    //pointersToRoot = pointersToRoot[0];
    //debugger;
    return (
        <Group>
          <TreeNode val={rootVal} x={rootX} y={rootY} radius={treeNodeRadius} />
          {leftSubTree}
          {arrowToLeftSubTree}
          {rightSubTree}
          {arrowToRightSubTree}
          {pointersToRoot}
        </Group>
    );
  }
}

export default BinarySearchTree;
