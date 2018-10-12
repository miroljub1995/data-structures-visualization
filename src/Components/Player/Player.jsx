import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Slider from '@material-ui/lab/Slider';

export default class Player extends Component {
  constructor(props) {
    super(props);

    const {frames} = this.props;

    this.state = {
      isPlaying: true,
      frames: frames,
      currentFrameIndex: 0
    };
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId});
    this.props.onNextFrame(this.state.frames[this.state.currentFrameIndex]);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.frames === this.props.frames)
      return;
    clearInterval(this.state.intervalId);
    const {frames} = nextProps;
    this.setState({isPlaying: true, frames: frames, currentFrameIndex: 0});
    var intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId});
    if (frames.length > 0)
      this.props.onNextFrame(frames[0]);
  }

  timer = () => {
    const newFrameIndex = this.state.currentFrameIndex + 1;
    if (newFrameIndex < this.state.frames.length) {
      this.handleFrameIndexChange(newFrameIndex);
    } else {
      this.handlePause();
    }
  }

  handleFrameIndexChange = (value) => {
    this.setState({currentFrameIndex: value});
    this.props.onNextFrame(this.state.frames[value]);
  }

  handleSliderChange = (event, value) => {
    this.handleFrameIndexChange(value);
  }

  handlePause = () => {
    clearInterval(this.state.intervalId);
    this.setState({isPlaying: false});
  }

  handlePlay = () => {
    var intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId, isPlaying: true});
  }

  handleNext = () => {
    const index = this.state.currentFrameIndex;
    this.handleFrameIndexChange(index + 1);
  }

  handlePrev = () => {
    const index = this.state.currentFrameIndex;
    this.handleFrameIndexChange(index - 1);
  }

  render() {
    const {currentFrameIndex, isPlaying} = this.state;
    const {length: framesLength} = this.state.frames;

    return (<div style={{
        width: `${this.props.width}px`,
        float: 'left'
      }}>
      <div style={{
          width: '180px'
        }}>
        {
          !isPlaying && <Button style={{
                float: "left"
              }} onClick={this.handlePlay}>Play</Button>
        }
        {
          isPlaying && <Button style={{
                float: "left"
              }} onClick={this.handlePause}>Pause</Button>
        }
        <Button style={{
            float: "left"
          }} disabled={isPlaying || currentFrameIndex === 0} onClick={this.handlePrev}>Prev</Button>
        <Button style={{
            float: "left"
          }} disabled={isPlaying || currentFrameIndex === (framesLength - 1)} onClick={this.handleNext}>Next</Button>
      </div>
      <div style={{
          width: '100%',
          paddingLeft: '185px',
          paddingRight: '5px'
        }}>
        <Slider style={{
            padding: '17px 0px'
          }} value={currentFrameIndex} min={0} max={framesLength - 1} step={1} onChange={this.handleSliderChange}/>
      </div>
    </div>);
  }
}
