import React, { Component } from 'react';
import './About.scss';

export class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="overlay">
                    <div className="container-fluid">
                        <div className="text-center">
                            <div className="about-icon"></div>
                        </div>
                        <h3 className="text-center">About Dun</h3>
                        <br/>
                        <p className="text-center">Every idea needs a start. And every idea needs to be validated. It doesn't have to look fancy (unless good design <i>is</i> the idea) and it doesn't have to be complete. The core idea has to <b>work</b> ... that's when you have an MVP (minimum viable product).
                        </p>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <blockquote>
                                    <p>“As you consider building your own minimum viable product, let this simple rule suffice ... remove any feature, process, or effort that does not contribute directly to the learning you seek."</p>
                                    <footer>Eric Ries, The Lean Startup</footer>
                                </blockquote>
                            </div>
                        </div>
                        <hr/>
                        <p className="text-center">We are a team of developers from all around the world and we work together to bring your idea to life! We've worked for top companies like <b>Microsoft, Google, Facebook, Apple, Amazon, Envato, Asana, Stripe, and a whole lot more.</b></p>
                        <hr/>                        
                    </div>
                </div>
            </div>
        );
    }
}