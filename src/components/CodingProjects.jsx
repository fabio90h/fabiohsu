import React, { Component } from 'react';

class CodingProjects extends Component {
    state = [
        {
            title: 'Lotto Tracker',
            description: 'A Fullstack we',
            purpose: 'After reading articles and watching tutorial videos on CSS Grid, I wanted to give it a try to see how beneficial it was. I thought that making a calculator would be the perfect project to get familiar with it since it consists in arranging the positions of the buttons.',
            image: require('./gif/Calculator.gif'),
            techs: ['ReactJS', 'Redux', 'Heroku', 'Express', 'MongoDB', 'MongooseJS', 'Puppeteer', 
                    'Cloudinary', 'GoogleAUTH', 'SendGrid', 'Middlewares'],
            github: 'https://github.com/fabio90h/lottoTracker',
            demo: 'https://hidden-tor-15255.herokuapp.com',
        },
        {
            title: 'Calculator',
            description: 'A simple calculator with the ability to perform basic arithmetics.',
            purpose: 'After reading articles and watching tutorial videos on CSS Grid, I wanted to give it a try to see how beneficial it was. I thought that making a calculator would be the perfect project to get familiar with it since it consists in arranging the positions of the buttons.',
            image: require('./gif/Calculator.gif'),
            techs: ['HTML', 'CSS Grid', 'JavaScript'],
            github: 'https://github.com/fabio90h/Calculator',
            demo: 'https://fabio90h.github.io/Calculator/',
        },
        {
            title: 'China Chef Restaurant',
            description: 'A Simple website for a local chinese restaurant',
            purpose: 'This was my very first web application project! I wanted to get more practice with HTML and CSS so I decided to create a website for one of my favorite restaurant here in Michigan.',
            image: require('./gif/ChinaChef.gif'),
            techs: ['HTML', 'CSS', 'Google Maps API', 'Bootstrap', 'JavaScript'],
            github: 'https://github.com/fabio90h/ChinaChef',
            demo: 'https://fabio90h.github.io/ChinaChef/',
        },
        {
            title: 'IOU',
            description: 'An application that keeps track of how much money someone owes you.',
            purpose: 'This idea came to me after I couldn’t keep track of all the expenses my roommate owed me. From groceries, utilities, food take outs, and more. I used to write them all in iPhone Note app but then I would have to manually calculate everything. Also, I would forget which ones were already paid and which were not. So I wanted to make an application that could keep track of all the charges, all the paid charges, and automatically calculate the total amount owed.',
            image: require('./gif/IOU.gif'),
            techs: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
            github: 'https://github.com/fabio90h/iou',
            demo: 'https://fabio90h.github.io/iou/',
        },
        {
            title: 'To Do Application',
            description: 'Simple To Do Application with the ability to record task and mark them as complete. Users are also able to view the completed task from the completed list and remove them.',
            purpose: 'The purpose of this project was for me to get familiar with React with Redux. This project really helped me get the basics of redux with react down. ',
            image: require('./gif/ToDo.gif'),
            techs: ['HTML', 'CSS', 'React', 'Redux', 'JavaScript'],
            github: 'https://github.com/fabio90h/To-Do-App',
            demo: 'https://fabio90h.github.io/To-Do-App/',
        },
        {
            title: 'Fabio Hsu Portfolio',
            description: 'This website!',
            purpose: "A place to showcase my projects and tell people a little bit about myself and my experiences. I used React for this website so I can easily create and modify the website's components.",
            image: require('./gif/Portfolio.gif'),
            techs: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
            github: 'https://github.com/fabio90h/fabiohsu',
            demo: 'https://fabio90h.github.io/fabiohsu/',
        },
    ]

    render() {
        return(
            this.state.map((project, index) => {
                return (
                    <div className={index % 2 === 0 ? 'codingProjectsEven' : 'codingProjectsOdd'}>
                         {/* INDIVIDUAL PROJECTS */}
                        <li className= {index % 2 === 0 ? 'codingProjectsZero' : 'codingProjectsOne'}>
                             {/* CODE PROJECT IMAGE */}
                            <div id='codingProjectImage'>
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                />
                            </div>
                            {/* CODE PROJECT INFORMATION */}
                            <div id='codingProjectInfo'>                         
                                <h1 id='projectTitle'>{project.title}</h1>
                                <div id='projectDescription'>
                                    <h3><u>Description</u></h3>
                                    <p>{project.description}</p>
                                </div>
                                <div id='projectPurpose'>
                                    <h3><u>Purpose</u></h3>
                                    <p>{project.purpose}</p>
                                </div>
                                {/* TECH NAMES */}
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
                                {/* PROJECT LINKS */}
                                <div className='project-links'>
                                    <div className='demoButton'>
                                        <a href={project.demo}>Live Demo</a>
                                    </div>  
                                    <div className='codeButton'>
                                        <a href={project.github}>View Code</a>
                                    </div>  
                                </div>
                            </div>
                        </li>
                    </div>
                );
            })
        );
    }
}

export default CodingProjects;