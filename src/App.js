import React, { Component } from 'react';
import './App.css';
// import AboutMe from './components/AboutMe.jsx';
import CodingProjects from './components/CodingProjects';
import Terminal from './components/Terminal';
// import OtherProjects from './components/OtherProjects';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* HEADER */}
          <div className='title'>
            {/* <div className='titleBackground'></div> */}
            <h1> > Fabio Hsu</h1>
            <h3>
            I am a software engineer at General Motors. My passion is to build simple, and beautiful user experience while solving challenging problems.
            </h3>
            {/* <AboutMe /> */}
          </div>
          
          {/* TERMINAL */}
          <div id='terminalContainer'>
            <Terminal/>
          </div>

          {/* PROJECT LIST */}
          <ul className='codingProjectsList'>
             <h2>Coding Projects</h2>
             <CodingProjects/>
          </ul>
      </div>
    );
  }
}

export default App;
