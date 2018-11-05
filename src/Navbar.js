import React, { Component } from 'react';
import './Navbar.scss';

export class Navbar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <br/>
                <div className="row">
                    <div className="col-sm-4">
                        <h1 className="logo-sub text-center faded link" style={{marginTop: "100px"}}>About</h1>
                    </div>
                    <div className="col-sm-4">
                        <div className="logo"></div>
                        <br/>
                        <h3 className="logo-sub text-center">Get it done, here.</h3>
                    </div>
                    <div className="col-sm-4">
                        <h1 className="logo-sub text-center faded link" style={{marginTop: "100px"}}>Contact</h1>
                    </div>
                </div>
            </div>
        );
    }
}