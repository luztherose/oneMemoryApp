import React, { Component } from 'react';
import firebase from './firebase';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      usermemory:["It's working!"]
    }
  }


  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        
        {
        this.state.usermemory.map( (memoryEntry) => {
          return <div>{memoryEntry}</div>
        })
      }
      </div>
    );
  }
}

export default App;
