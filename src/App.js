import React, { Component } from 'react';
import './App.css';
// import AboutMe from './components/AboutMe.jsx';
import CodingProjects from './components/CodingProjects';
import Terminal from './components/Terminal';
import Macbook from './components/MacBook';
// import OtherProjects from './components/OtherProjects';

// import * as GSAP from 'gsap';
// import indicators from 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
// import ScrollMagic from 'scrollmagic'

import { TweenMax, Sine } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'animation.gsap'
import 'debug.addIndicators'

// import ScrollMagic from 'scrollmagic'


class App extends Component {
  componentDidMount() {
    let controller = new ScrollMagic.Controller();
    console.log()
    let scene = new ScrollMagic.Scene({
      triggerElement: "#terminalContainer",
      duration: 200,
      offset: 100,
    })
    .setTween(TweenMax.to(".monitor", 1, {className: "+=expand"}))
    .addIndicators({name: "tween css class"})
    .addTo(controller);
 }

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

          {/* MACBOOK */}
          <div className='macBook'>
            <Macbook/>
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
