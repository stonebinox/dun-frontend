import React, { Component } from 'react';
import './Footer.scss';

export class Footer extends Component {
    render() {
        let currYear = new Date().getFullYear();
        return (
            <div className="footer">
                <div className="container-fluid">
                    <p className="text-center">Copyright &copy; {currYear} Dun Inc.</p>
                </div>
            </div>
        );
    }
}