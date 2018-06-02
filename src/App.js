import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/AboutMe.jsx';
import CodingProjects from './components/CodingProjects';
import OtherProjects from './components/OtherProjects';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className='title'>Fabio Hsu</h1>
          <AboutMe />
          <h3>Coding Projects</h3>
          <ul className='codingProjectsList'>
             <CodingProjects/>
          </ul>
          <h3>Other Projects</h3>
          <ul>
            <OtherProjects/>
          </ul>
      </div>
    );
  }
}

export default App;
