import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/AboutMe.jsx';
import CodingProjects from './components/CodingProjects';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Fabio Hsu</h1>
          <AboutMe />
          <ul>
             <CodingProjects/>
          </ul>
          
      </div>
    );
  }
}

export default App;
