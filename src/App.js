import React, { Component } from 'react';
import Header from './Header';
import AddEntry from './AddEntry';
import Entries from './Entries'
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <AddEntry />
          <section className="tableau">
            <h2>Pin Your Entry <span className="pinImg" role="img" aria-label="pin image">📌</span></h2>
            <Entries />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
