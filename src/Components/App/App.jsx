import React, { Component } from 'react';
import logo from './../../logo.svg';
import './App.css';
//import TreeNode from './../TreeNode/TreeNode';
import KonvaContainer from './../KonvaContainer/KonvaContainer';
import BinarySearchTree from './../BinarySearchTree/BinarySearchTree';

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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <KonvaContainer width={800} height={800}>
            <BinarySearchTree root={tree} width={800} x={400} y={20} />
          </KonvaContainer>
        </div>
      </div>
    );
  }
}

export default App;
