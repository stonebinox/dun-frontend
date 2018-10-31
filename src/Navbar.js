import React, { Component } from 'react';
import './Navbar.scss';

export class Navbar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <br/>
                <div className="logo"></div>
                <br/>
                <h3 className="logo-sub text-center">Get it done, here.</h3>
            </div>
        );
    }
}