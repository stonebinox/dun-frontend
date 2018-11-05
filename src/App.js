import React, { Component } from 'react';
import './App.scss';

import { Navbar } from './Navbar.js';
import { RequestForm } from './RequestForm.js';
import { About } from './About.js';
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
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <RequestForm />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
