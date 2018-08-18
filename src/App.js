import React, { Component } from 'react';
import './App.css';
// import AboutMe from './components/AboutMe.jsx';
import CodingProjects from './components/CodingProjects';
import Terminal from './components/Terminal';
import Macbook from './components/MacBook';
// import OtherProjects from './components/OtherProjects';

import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import arrow from './components/img/downArrow.png';

//In order to make these files work please ref:
//https://github.com/janpaepke/ScrollMagic/issues/685
//From: yougotashovel
import 'animation.gsap'
import 'debug.addIndicators'

class App extends Component {
  componentDidMount() {
    let controller = new ScrollMagic.Controller();
    let timeline = new TimelineMax();
    
    timeline
      .to(".monitor", 0.2, {scaleX: 1, scaleY: 1})
      .to(".screen", 1, {backgroundColor: '#f6f9fc'})
      .to(".monitor", 5.0, {scaleX: 7, scaleY: 7}, '-=0.5')
      .to(".title", 0.5, {opacity: 1, y: 5}, '-=4.2')    
      .to("#terminalContainer", 0.5, {opacity: 1, x: 10}, '-=2.5')
   
    //timeline.add(tween1).add(tween2);
    let scene = new ScrollMagic.Scene({
        // triggerElement: ".macBook",
        duration: 800,
        offset: -.2,
      })
      .setTween(timeline)
      //.addIndicators({name: "tween css class"})
      .addTo(controller);
 }

  render() {
    return (
      <div className="App">
        
        {/* ==================== MACBOOK ==================== */}
        <div className='macBook'>
          <h1>Welcome!</h1>
          {/* <h4>Please feel free to use my computer. <br/> Scroll down to wake it up </h4> */}
          <Macbook/>
          <img className='arrow bounce' src={arrow} alt='scrollArrow'/>
         
        </div>
        {/* ==================== PAGE ==================== */}
        <div className='page'>
          {/* HEADER */}
          <div className='title'>
            {/* <div className='titleBackground'></div> */}
            <h1> > Fabio Hsu<span id='titleCursor' className='blink'>&nbsp;</span></h1>
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

      </div>
    );
  }
}

export default App;
