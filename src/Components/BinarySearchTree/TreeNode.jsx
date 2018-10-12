import React, { Component } from 'react';
import { Text, Circle, Group } from 'react-konva';

class TreeNode extends Component
{
  state = {
    color: 'green'
  };

  width=this.props.radius * 2;
  height=this.props.radius * 2;

  render(){
    return (
      <Group>
        <Circle
          x={this.props.x}
          y={this.props.y}
          width={this.width}
          height={this.height}
          fill={this.state.color}
          shadowBlur={5}
        />
        <Text
          x={this.props.x-this.width/2}
          y={this.props.y-this.height/2}
          text={`${this.props.val}`}
          align='center'
          verticalAlign='middle'
          width={this.width}
          height={this.height}
        />
      </Group>
    );
  }
}

export default TreeNode;
