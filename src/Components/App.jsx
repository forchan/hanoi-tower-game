import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import GameContainer from './GameContainer.jsx';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <DragDropContextProvider backend={HTML5Backend}>
          <GameContainer />
        </DragDropContextProvider>
        <Footer />
      </div>
    );
  }
}

export default App;
