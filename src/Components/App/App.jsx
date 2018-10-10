import React, { Component } from 'react';
//import logo from './../../logo.svg';
import './App.css';
//import TreeNode from './../TreeNode/TreeNode';
import BSTContainer from './../BinarySearchTree/BSTContainer';

class App extends Component
{
  render() {
    let tree = {
      val:5,
      left:{
        val:1,
        left:{
          val:-1,
          left:null,
          right:null
        },
        right:{
          val:4,
          left:null,
          right:null
        }
      },
      right:{
        val:7,
        left:{
          val:6,
          left:null,
          right:null
        },
        right:{
          val:10,
          left:null,
          right:{
            val:11,
            left:null,
            right:null
          }
        }
      }
    };

    let pointers = [{name: "current", pointer: tree.left}];
    return (
      <div className="App">
        <div>
          <BSTContainer bSTFrame={{tree, pointers}} width={1000} height={800} />
        </div>
      </div>
    );
  }
}

export default App;
