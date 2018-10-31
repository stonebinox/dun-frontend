import React, { Component } from 'react';
import './App.scss';

import { Navbar } from './Navbar.js';
import { RequestForm } from './RequestForm.js';
import { Footer } from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <RequestForm />
        <Footer />
      </div>
    );
  }
}

export default App;
