import React, { Component } from 'react';
import './Process.scss';

export class Process extends Component {
    render() {
        return (
            <div className="process">
                <div className="container">
                    <hr/>
                    <div className="text-center">
                        <div className="process-icon"></div>
                    </div>
                    <h3 className="text-center">Our Process</h3>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="review-icon"></div>
                        </div>
                        <div className="col-sm-8"><strong>First</strong>, we accept your request. Once you fill out the form above and complete the booking via Paypal, we review your request and contact you to discuss the idea further. This gives us a better understanding of what needs to be done.</div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="discuss-icon"></div>
                        </div>
                        <div className="col-sm-8">
                            <strong>Second,</strong> we communicate our thoughts on the scope of an MVP for your idea and once we're firm about our goals, we get started.
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="design-icon"></div>
                        </div>
                        <div className="col-sm-8">
                            <strong>Third,</strong> we design and develop an initial prototype and host the same on <a href="https://www.heroku.com" target="_blank" rel="noopener noreferrer">Heroku</a>. We use this platform to temporarily host and test our apps.
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="complete-icon"></div>
                        </div>
                        <div className="col-sm-8">
                            <strong>Lastly,</strong> once we've finished building the MVP, we ask you to take one good look at how things are. When you're satisfied, we give you the entire code along with instructions on how to set it up!
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}