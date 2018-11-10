import React, { Component } from 'react';
import $ from 'jquery';
import './App.scss';

import { Navbar } from './Navbar.js';
import { RequestForm } from './RequestForm.js';
import { About } from './About.js';
import { Process } from './Process.js';
import { Contact } from './Contact.js';
import { Footer } from './Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    let currentLocation = window.location.href;
    
    if (currentLocation.indexOf("localhost") === -1) {
      if (currentLocation.indexOf("www") === -1) {
        window.location = "http://www.dun.company";
      }
    }

    this.storeVisitor();
  }

  storeVisitor() {
    $.ajax({
      url: 'https://dun-backend.herokuapp.com/api/visitor/addVisitor',
      method: 'get',
      error: function(err) {
        console.log(err);
      },
      success: function(response) {
        // response = JSON.parse(response);
        console.log(response);
      }
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <RequestForm />
        <About />
        <Process />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
