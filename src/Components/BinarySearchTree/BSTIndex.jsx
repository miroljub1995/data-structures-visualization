import React, {Component} from 'react';
import BSTContainer from './BSTContainer';
import Operations from './Operations';
import Player from './../Player/Player';

export default class BSTIndex extends Component {



  handleInsert = (value)=>{
    debugger;
  }

  handleNextFrame = (frame)=>{
    console.log(frame);
  }

    render() {
        let tree = {
            val: 5,
            left: {
                val: 1,
                left: {
                    val: -1,
                    left: null,
                    right: null
                },
                right: {
                    val: 4,
                    left: null,
                    right: null
                }
            },
            right: {
                val: 7,
                left: {
                    val: 6,
                    left: null,
                    right: null
                },
                right: {
                    val: 10,
                    left: null,
                    right: {
                        val: 11,
                        left: null,
                        right: null
                    }
                }
            }
        };

        let pointers = [
            {
                name: "current",
                pointer: tree.left
            }
        ];

        return (<div>
            <Player frames={[1,2,3,4,5,6,7,8,9]} onNextFrame={this.handleNextFrame} />
            <Operations onInsert={this.handleInsert}/>
            <BSTContainer bSTFrame={{
                    tree,
                    pointers
                }} width={1000} height={800}/>
        </div>);
    }
}
