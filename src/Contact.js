import React, { Component } from 'react';
import $ from 'jquery';
import './Contact.scss';

export class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailError: 'form-group',
            messageError: 'form-group',
            errorDisplay: 'none',
            successDisplay: 'none'
        };

        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage() {
        let email = $.trim($("#contact_email").val());
        if (email.length > 0) {
            this.setState({
                emailError: 'form-group'
            });
            let message = $.trim($("#message").val());
            if (message.length > 0) {
                this.setState({
                    messageError: 'form-group'
                });
                let that = this;
                $.ajax({
                    url: 'https://dun-backend.herokuapp.com/api/contact/addMessage',
                    method: 'post',
                    data: {
                        email: email,
                        message: message
                    },
                    error: function(err) {
                        that.setState({
                            errorDisplay: 'block'
                        });
                    },
                    success: function(response) {
                        response = JSON.parse(response);
                        if (response.data) {
                            that.setState({
                                successDisplay: 'block'
                            });
                            document.contact.reset();
                        }
                        else {
                            that.setState({
                                errorDisplay: 'block'
                            });
                        }
                    },
                    beforeSend: function() {
                        that.setState({
                            errorDisplay: 'none',
                            successDisplay: 'none'
                        });
                    }
                })
            }
            else {
                this.setState({
                    messageError: 'form-group has-error'
                });
            }
        }
        else {
            this.setState({
                emailError: 'form-group has-error'
            });
        }
    }

    render() {
        return (
            <div className="contact">
                <div className="overlay">
                    <div className="container-fluid">
                        <div className="text-center">
                            <div className="contact-icon"></div>
                        </div>
                        <h3 className="text-center">Contact Us</h3>
                        <div className="alert alert-danger text-center" style={{display: this.state.errorDisplay}}>
                            <strong>Problem</strong> Something went wrong while sending your message and failed. Please tr again later.
                        </div>
                        <div className="alert alert-success text-center" style={{display: this.state.successDisplay}}>
                            <strong>Message Sent!</strong> Your message was sent successfully. We will revert with 24 hours.
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4">
                                <p className="text-center">Have questions? Want to chat? Ran into a bug? Write to us!</p>
                                <hr />
                                <form name="contact">
                                    <div className={this.state.emailError}>
                                        <label htmlFor="contact_email">Email</label>
                                        <input type="email" name="contact_email" id="contact_email" placeholder="A valid email ID" className="form-control" />
                                    </div>
                                    <div className={this.state.messageError}>
                                        <label htmlFor="message">Your message</label>
                                        <textarea name="message" id="message" className="form-control" placeholder="Enter your message here ..." rows="10"></textarea>
                                    </div>
                                    <br />
                                    <div className="text-center">
                                        <button type="button" className="btn btn-default" onClick={this.sendMessage}><strong>Send Message</strong></button>
                                    </div>
                                </form>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}