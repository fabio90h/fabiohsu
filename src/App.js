import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/AboutMe.jsx';
import CodingProjects from './components/CodingProjects';
// import OtherProjects from './components/OtherProjects';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <header>
            <span>Fabio</span>
          </header> */}
          <div className='title'>
          <div className='titleBackground'></div>
            <h1>Hi, I am Fabio Hsu</h1>
          </div>
          <AboutMe />
          <ul className='codingProjectsList'>
             <h2>Coding Projects</h2>
             <CodingProjects/>
          </ul>
      </div>
    );
  }
}

export default App;
