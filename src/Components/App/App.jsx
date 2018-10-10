import React, {Component} from 'react';
import './App.css';
import NavigationBar from './../Navigation/NavigationBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import BSTIndex from './../BinarySearchTree/BSTIndex';

class App extends Component {
    render() {
        return (<Router>
            <div className="App">
                <NavigationBar/>
                <Switch>
                    <Route exact="exact" path="/" component={Home}/>
                    <Route path="/BinarySearchTree" component={BSTIndex}/>
                    <Route path="/" component={NotFound}/>
                </Switch>
            </div>
        </Router>);
    }
}

const Home = () => (<div>Home</div>)
const NotFound = () => (<div>Not found</div>)

export default App;
