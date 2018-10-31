import React, { Component } from 'react';
import './RequestForm.scss';

export class RequestForm extends Component {
    render() {
        return (
            <div className="request-form-holder">
                <div className="container-fluid">
                    <hr/>
                    <div className="text-center">
                        <div className="work-icon"></div>
                    </div>
                    <h3 className="text-center">Post An MVP</h3>
                    <hr/>
                    <p className="text-center">Have an idea that you want to see come to life? We build MVPs once a week and your idea could be up and running in a week!</p>
                    <br/>
                    <p className="text-center text-red"><strong>Fill out the form below and let's get started!</strong></p>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <form name="mvp">
                                <div className="form-group">
                                    <label htmlFor="title">Title of your MVP</label>
                                    <input type="text" className="form-control" placeholder="A valid name for your MVP" id="title" name="title" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Tell us what it's about ...</label>
                                    <textarea className="form-control" name="description" id="description" rows="10" placeholder="Feel free to describe it to the last detail! Also share any reference work if you can."></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your email ID</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="something@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Your name, though this isn't necessary</label>
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Your real name" />
                                </div>
                                <div className="form-group has-success has-feedback">
                                    <label htmlFor="budget" className="control-label">This will cost ...</label>
                                    <input type="text" name="budget" id="budget" value="$199 only!" className="form-control bold" disabled />
                                    <span className="glyphicon glyphicon-ok form-control-feedback"></span>
                                </div>
                                <hr/>
                                <div className="well">
                                    <p className="text-center text-success"> ... and that's it! Book this MVP with just <strong>$25</strong> and let's get it started!</p>
                                </div>
                                <hr/>
                                <div className="text-center">
                                    <button type="button" className="big-button">Submit Request!</button>
                                </div>
                                <hr/>
                                <p className="text-center">Our payments are secured through Stripe's secure APIs and your details are never stored at any point.</p>
                            </form>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>
        );
    }
}