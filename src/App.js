import React, { Component } from 'react';
import Header from './Header';
import AddEntry from './AddEntry';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddEntry />
        <Footer />
      </div>
    );
  }
}

export default App;
