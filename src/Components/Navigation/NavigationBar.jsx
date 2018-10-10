import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'mdbreact';

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        return (<Navbar color="indigo" dark="dark" expand="md" scrolling="scrolling">
            <NavbarBrand href="/">
                <strong>Data Structure Visualization</strong>
            </NavbarBrand>
            {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick}/>}
            <Collapse isOpen={this.state.collapse} navbar="navbar">
                <NavbarNav left="left">
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/BinarySearchTree">BST</NavLink>
                    </NavItem>
                </NavbarNav>
            </Collapse>
        </Navbar>);
    }
}
