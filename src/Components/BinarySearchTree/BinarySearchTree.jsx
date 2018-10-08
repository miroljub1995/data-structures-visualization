import React, { Component } from 'react';
import TreeNode from './../TreeNode/TreeNode';
import { Group, Arrow } from 'react-konva'

class BinarySearchTree extends Component{
  constructor(props){
    super(props);

    this.treeNodeRadius = 20;
    this.levelDifferenceY = 60;

    this.rootX = this.props.x;
    this.rootY = this.props.y + this.treeNodeRadius;
    this.rootVal = this.props.root.val;

    this.leftChildX = this.props.x - this.props.width / 4;
    this.rightChildX = this.props.x + this.props.width / 4;
    this.childWidth = this.props.width/2;
    this.childY = this.props.y + this.levelDifferenceY;
    this.childRootY = this.rootY + this.levelDifferenceY;

    this.leftSubTree = this.getLeftSubTree(this.leftChildX, this.childY, this.childWidth);
    this.rightSubTree = this.getRightSubTree(this.rightChildX, this.childY, this.childWidth);
    this.arrowToLeftSubTree = this.leftSubTree !== null ? this.getArrowToLeftSubTree(this.rootX, this.rootY, this.leftChildX, this.childRootY, this.treeNodeRadius) : null;
    this.arrowToRightSubTree = this.rightSubTree !== null ? this.getArrowToRightSubTree(this.rootX, this.rootY, this.rightChildX, this.childRootY, this.treeNodeRadius) : null;
  }
  getLeftSubTree(x, y, width){
      if(this.props.root.left !== null)
        return (<BinarySearchTree root={this.props.root.left} x={x} y={y} width={width} />);
      return null;
  }

  getRightSubTree(x, y, width){
    if(this.props.root.right !== null)
      return (<BinarySearchTree root={this.props.root.right} x={x} y={y} width={width} />);
    return null;
  }

  getArrowToLeftSubTree(rootX, rootY, childX, childY, treeNodeRadius){
    let alfa = Math.atan(Math.abs((rootX-childX)/(rootY-childY)));
    console.log(alfa);
    let d1 = treeNodeRadius * Math.sin(alfa);
    let d2 = treeNodeRadius * Math.cos(alfa);
    console.log(`d1=${d1}, d2=${d2}`);
    let x1 = rootX - d1;
    let y1 = rootY + d2;
    let x2 = childX + d1;
    let y2 = childY - d2;
    return this.getArrow(x1,y1,x2,y2);
  }

  getArrowToRightSubTree(rootX, rootY, childX, childY, treeNodeRadius){
    let alfa = Math.atan(Math.abs((rootX-childX)/(rootY-childY)));
    console.log(alfa);
    let d1 = treeNodeRadius * Math.sin(alfa);
    let d2 = treeNodeRadius * Math.cos(alfa);
    console.log(`d1=${d1}, d2=${d2}`);
    let x1 = rootX + d1;
    let y1 = rootY + d2;
    let x2 = childX - d1;
    let y2 = childY - d2;
    return this.getArrow(x1,y1,x2,y2);
  }

  getArrow(x1, y1, x2, y2){
    console.log(x1,x2,y1,y2);
    return (
      <Arrow points={[x1,y1,x2,y2]} stroke='black' fill='black' x={0} y={0} />
    )
  }

  render(){
    return (
        <Group>
          <TreeNode val={this.rootVal} x={this.rootX} y={this.rootY} radius={this.treeNodeRadius} />
          {this.leftSubTree}
          {this.arrowToLeftSubTree}
          {this.rightSubTree}
          {this.arrowToRightSubTree}
        </Group>
    );
  }
}

export default BinarySearchTree;
