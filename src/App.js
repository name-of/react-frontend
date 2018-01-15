import React, { Component } from 'react';
import './App.css';
import Register from './components/firebase/js/register';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Register/>
      </div>
    );
  }
}

export default App;
