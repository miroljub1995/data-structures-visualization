import React, {Component} from 'react';
import './App.css';
import NavigationBar from './../Navigation/NavigationBar';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Grid} from 'react-bootstrap';

import BSTIndex from './../BinarySearchTree/BSTIndex';
import MinHeapIndex from './../MinHeap/MinHeapIndex';

class App extends Component {
  render() {
    return (<Router>
      <div className="App">
        <NavigationBar/>
        <Switch>
          <Route exact={true} path="/data-structures-visualization/" component={() => (<div id='app-image'>
              <Grid><Home/></Grid>
            </div>)}/>
          <Route path="/data-structures-visualization/BinarySearchTree" component={() => (<Grid><BSTIndex/></Grid>)}/>
          <Route path="/data-structures-visualization/MinHeap" component={() => (<Grid><MinHeapIndex/></Grid>)}/>
          <Route path="/data-structures-visualization/" component={() => (<Grid><NotFound/></Grid>)}/>
        </Switch>
      </div>
    </Router>);
  }
}

const Home = () => (<div className='logo-container'>
  <Link className='logo-link' to='/data-structures-visualization/BinarySearchTree'>
    <h3>Binary Search Tree</h3>
    <div id='bst-logo'></div>
  </Link>
  <Link className='logo-link' to='/data-structures-visualization/MinHeap'>
    <h3>Min Heap</h3>
    <div id='min_heap-logo'></div>
  </Link>
</div>)
const NotFound = () => (<div>Not found</div>)

export default App;
