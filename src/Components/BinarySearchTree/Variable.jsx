import React, {Component} from 'react';
import {Rect, Text, Group} from 'react-konva';

export default class Variable extends Component{
  constructor(props){
    super(props);
    this.state =  {
      textWidthCalculated: false
    };
  }
  componentDidMount() {
    //debugger;
    if(this.state.textWidthCalculated)
      return;
    const width = this.textNode.getTextWidth();
    this.setState({textWidthCalculated: true, width: width});
  }
  render() {
    const {top, right, height, name} = this.props;
    if(!this.state.textWidthCalculated)
      return (<Text ref={node => {this.textNode = node;}} height={height} text={name} />);
    const width = this.state.width;
    const horisontalPadding = 3;
    return (
      <Group>
        <Rect x={right - width - 2 * horisontalPadding} y={top} width={width + 2 * horisontalPadding} height={height} fill="yellow" cornerRadius={5} shadowBlur={5} />
        <Text
          ref={node => {
            this.textNode = node;
          }}
           x={right - width - horisontalPadding} y={top} width={width} height={height}
           align="center"
           verticalAlign="middle"
          text={name}
        />
      </Group>
    );
  }
}
