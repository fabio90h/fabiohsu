import React, { Component } from 'react';

class CodingProjects extends Component {
    state = [
        {
            title: 'Calculator',
            description: 'Simple Calculator App that is able to perform some basic arithmetic. ',
            purpose: 'Hello World',
            image: require('./calculatorApp.png'),
            techs: ['HTML', 'CSS Grid', 'JavaScript']
        },
        {
            title: 'IOU',
            description: 'This was a calculator app',
            purpose: 'Hello World',
            image: require('./calculatorApp.png'),
            techs: ['HTML', 'CSS', 'React']
        },
        {
            title: 'China Chef Restaurant',
            description: 'This was a calculator app',
            purpose: 'Hello World',
            image: require('./calculatorApp.png'),
            techs: ['HTML', 'CSS']
        },
        {
            title: 'To Do Application',
            description: 'Simple To Do Application with the ability to record task and mark them as complete. Users are also able to view the completed task from the completed list and remove them.',
            purpose: 'The purpose of this project was for me to get familiar with React with Redux. This project really helped me get the basics of redux with react down. ',
            image: require('./calculatorApp.png'),
            techs: ['HTML', 'CSS', 'React', 'Redux']
        },
        {
            title: 'Fabio Hsu Portfolio',
            description: 'This was a calculator app',
            purpose: 'Hello World',
            image: require('./calculatorApp.png'),
            techs: ['HTML', 'CSS', 'React']
        },
    ]

    render() {
        return(
            this.state.map((project, index) => {
                return (
                    <li className='codingProjects'>
                        {/* CODE PROJECT IMAGE */}
                        <div id='codingProjectImage'>
                            <img 
                                src={project.image} 
                                alt={project.title}
                            />
                        </div>
                        {/* CODE PROJECT INFORMATION */}
                        <div id='codingProjectInfo'>                         
                            <h3 id='projectTitle'>{project.title}</h3>
                            <div id='projectDescription'>
                                <h5><u>Description</u></h5>
                                <p>{project.description}</p>
                            </div>
                            <div id='projectPurpose'>
                                <h5><u>Purpose</u></h5>
                                <p>{project.purpose}</p>
                            </div>
                            <ul className='techNameList'>
                                {project.techs.map((tech) => {
                                    return(
                                        <li className='techName'>
                                            {tech}
                                        </li>
                                    );
                                })}
                            </ul>
                            <br/>
                            <button>Demo</button>  <button>View Code</button>
                        </div>
                    </li>
                );
            })
        );
    }
}

export default CodingProjects;