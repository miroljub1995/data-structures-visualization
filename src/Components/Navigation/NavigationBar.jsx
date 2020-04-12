import React, {Component} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {IndexLinkContainer} from "react-router-bootstrap";

export default class NavigationBar extends Component {
    render() {
        return (<Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/data-structures-visualization/">Data Structure Visualization</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <IndexLinkContainer to="/data-structures-visualization/">
                        <NavItem>Home</NavItem>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/data-structures-visualization/BinarySearchTree">
                        <NavItem>BST</NavItem>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/data-structures-visualization/MinHeap">
                        <NavItem>MinHeap</NavItem>
                    </IndexLinkContainer>
                    {/* <IndexLinkContainer to="/About">
                        <NavItem>About</NavItem>
                    </IndexLinkContainer> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
}
