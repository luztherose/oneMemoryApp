import React, { Component } from 'react';
import firebase from './firebase';
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
        <h1>One Memory App</h1>

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
