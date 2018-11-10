import React, { Component } from 'react';
import $ from 'jquery';
import './RequestForm.scss';

export class RequestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleGroup: 'form-group',
            descriptionGroup: 'form-group',
            emailGroup: 'form-group',
            nameGroup: 'form-group',
            error: {
                title: 'Problem',
                message: 'Something went wrong. Please try again later.',
                errorDisplay: 'none'
            },
            success: {
                title: 'Request Submitted!',
                message: 'Your request has been submitted successfully. Proceed to pay $25 and complete this booking!',
                successDisplay: 'none'
            },
            formDisplay: 'block',
            payDisplay: 'none',
            requestId: null
        };
        this.validateFields = this.validateFields.bind(this);
    }

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validateFields() {
        let title = $.trim($("#title").val());
        if (title.length > 0) {
            this.setState({
                titleGroup: 'form-group'
            });
            let description = $.trim($("#description").val());
            if (description.length > 0) {
                this.setState({
                    descriptionGroup: "form-group"
                });
                let email = $.trim($("#email").val());
                if ((email.length > 0) && (this.validateEmail(email))) {
                    this.setState({
                        emailGroup: "form-group"
                    });
                    let name = $.trim($("#name").val());
                    let budget = $("#budget").val();
                    let that = this;
                    $.ajax({
                        url: "https://dun-backend.herokuapp.com/api/request/addNew",
                        method: "post",
                        data: {
                            title: title,
                            description: description,
                            email: email,
                            name: name,
                            budget: budget
                        },
                        error: function(err) {
                            console.log(err);
                        },
                        success: function(response) {
                            response = JSON.parse(response);
                            console.log(response);
                            if (response.data != null) {
                                let data = response.data[0];
                                if (data === "REQUEST_ADDED_SUCCESSFULLY") {
                                    that.setState({
                                        error: {
                                            errorDisplay: 'none'
                                        },
                                        success: {
                                            successDisplay: 'block',
                                            title: 'Request Submitted!',
                                            message: 'Your request was submitted successfully! Proceed to pay $25 and complete your booking.'
                                        },
                                        formDisplay: 'none',
                                        payDisplay: 'block',
                                        requestId: parseInt(response.data[1])
                                    })
                                }
                            }
                            else {

                            }
                        }
                    });
                }
                else {
                    this.setState({
                        emailGroup: "form-group has-error"
                    });
                    $("#email").focus();
                }
            }
            else {
                this.setState({
                    descriptionGroup: "form-group has-error"
                });
                $("#description").focus();
            }
        }
        else {
            this.setState({
                titleGroup: 'form-group has-error'
            });
            $("#title").focus();
        }

    }

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
                    <p className="text-center text-red" style={{display: this.state.formDisplay}}><strong>Fill out the form below and let's get started!</strong></p>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <form name="mvp">
                                <div className="alert alert-danger" style={{display: this.state.error.errorDisplay}}><strong>{this.state.error.title}</strong> {this.state.error.message}</div>
                                <div className="alert alert-success" style={{display: this.state.success.successDisplay}}><strong>{this.state.success.title}</strong> {this.state.success.message}</div>
                                <div style={{display: this.state.formDisplay}}>
                                    <div className={this.state.titleGroup}>
                                        <label htmlFor="title">Title of your MVP</label>
                                        <input type="text" className="form-control" placeholder="A valid name for your MVP" id="title" name="title" />
                                    </div>
                                    <div className={this.state.descriptionGroup}>
                                        <label htmlFor="description">Tell us what it's about ...</label>
                                        <textarea className="form-control" name="description" id="description" rows="10" placeholder="Feel free to describe it to the last detail! Also share any reference work if you can."></textarea>
                                    </div>
                                    <div className={this.state.emailGroup}>
                                        <label htmlFor="email">Your email ID</label>
                                        <input type="email" name="email" id="email" className="form-control" placeholder="something@example.com" />
                                    </div>
                                    <div className={this.state.nameGroup}>
                                        <label htmlFor="name">Your full name</label>
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Your real name!" />
                                    </div>
                                    <div className="form-group has-success has-feedback">
                                        <label htmlFor="budget-data" className="control-label">This will cost ...</label>
                                        <input type="text" name="budget-data" id="budget-data" value="$199 only!" className="form-control bold" disabled />
                                        <input type="hidden" name="budget" id="budget" value="199" />
                                        <span className="glyphicon glyphicon-ok form-control-feedback"></span>
                                    </div>
                                    <hr/>
                                    <div className="well">
                                        <p className="text-center text-success"> ... and that's it! Book this MVP with just <strong>$25</strong> and let's get it started! Pay the remaining once we've built it for you.</p>
                                    </div>
                                    <hr/>
                                    <div className="text-center">
                                        <button type="button" className="big-button" onClick={this.validateFields}>Pay $25 and Submit Request</button>
                                    </div>
                                    <p className="text-center small">Our payments are secured through <a href="https://paypal.com" target="_blank" rel="noopener noreferrer">PayPal's</a> secure APIs and your details are never stored at any point.</p>
                                </div>
                            </form>
                            <div style={{display: this.state.payDisplay}} className="text-center">
                                <hr/>
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                    <input type="hidden" name="hosted_button_id" value="HUL837WKYWJYL" />
                                    <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}