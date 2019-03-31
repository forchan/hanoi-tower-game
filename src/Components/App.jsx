import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import GameContainer from './GameContainer.jsx';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <GameContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
