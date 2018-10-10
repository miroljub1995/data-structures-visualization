import React, {Component} from 'react';

export default class Player extends Component {
    constructor(props) {
        super(props);

        const {frames} = this.props;

        this.state = {
            frames: frames,
            currentFrameIndex: 0
        }

    }

    componentDidMount() {
        var intervalId = setInterval(this.timer, 1000);
        this.setState({intervalId: intervalId});
        this.props.onNextFrame(this.state.frames[this.state.currentFrameIndex]);
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    timer = ()=>{
        const newFrameIndex = this.state.currentFrameIndex + 1;
        if (newFrameIndex < this.state.frames.length) {
            this.setState({currentFrameIndex: newFrameIndex});
            this.props.onNextFrame(this.state.frames[newFrameIndex]);
        }
    }

    render() {
        return (<div>{this.state.currentFrameIndex}</div>)
    }
}
