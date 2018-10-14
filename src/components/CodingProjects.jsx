import React, { Component } from 'react';

class CodingProjects extends Component {
    state = [
        {
            title: 'Lotto Tracker (Full Stack)',
            description: 'Lotto pool website that automatically keeps track of all the participants’ payments, and how much was won from each drawing.',
            purpose: 'My friends and I have a lotto pool where I am responsible to purchase Mega Millions and Powerball every week. Instead of keeping a long spreadsheet and emailing the participants on how much we won and how much they owe to the lotto pool every week, I decided to create a full stack web application that can do most of the work for me. It can track each participants’ credit, send automatic reminders when they are due, and grab information from the lotto website on how much was won. Most importantly, however, this project was for me to get familiar with developing full stack applications.',
            video: require('./video/Lotto.mp4'),
            techs: ['ReactJS', 'Redux', 'Heroku', 'Express', 'MongoDB', 'MongooseJS', 'Puppeteer', 
                    'Cloudinary', 'GoogleAUTH', 'SendGrid', 'Middlewares'],
            github: 'https://github.com/fabio90h/lottoTracker',
            demo: 'https://hidden-tor-15255.herokuapp.com',
        },
        {
            title: 'Calculator',
            description: 'A simple calculator with the ability to perform basic arithmetics.',
            purpose: 'After reading articles and watching tutorial videos on CSS Grid, I wanted to give it a try to see how beneficial it was. I thought that making a calculator would be the perfect project to get familiar with it since it consists in arranging the positions of the buttons.',
            video: require('./video/Calculator.mp4'),
            techs: ['HTML', 'CSS Grid', 'JavaScript'],
            github: 'https://github.com/fabio90h/Calculator',
            demo: 'https://fabio90h.github.io/Calculator/',
        },
        {
            title: 'World Cup Madness',
            description: 'A website to view all the participant’s world cup bracket and their points.',
            purpose: 'My friends and I had a World Cup Bracket Contest during the World Cup of 2018 to see who had the most accurate bracket. The purpose of this website is to have a common place where the participants can see each other’s bracket and leaderboard, and post comments.',
            video: require('./video/WorldCup.mp4'),
            techs: ['CSS', 'HTML', 'JavaScript', 'Firebase', 'ReactJS', 'Redux'],
            github: 'https://github.com/fabio90h/worldcup2018',
            demo: 'https://fabio90h.github.io/worldcup2018/',
        },
        {
            title: 'China Chef Restaurant',
            description: 'A Simple website for a local chinese restaurant',
            purpose: 'This was my very first web application project! I wanted to get more practice with HTML and CSS so I decided to create a website for one of my favorite restaurant here in Michigan.',
            video: require('./video/ChinaChef.mp4'),
            techs: ['HTML', 'CSS', 'Google Maps API', 'Bootstrap', 'JavaScript'],
            github: 'https://github.com/fabio90h/ChinaChef',
            demo: 'https://fabio90h.github.io/ChinaChef/',
        },
        {
            title: 'IOU',
            description: 'An application that keeps track of how much money someone owes you.',
            purpose: 'This idea came to me after I couldn’t keep track of all the expenses my roommate owed me. From groceries, utilities, food take outs, and more. I used to write them all in iPhone Note app but then I would have to manually calculate everything. Also, I would forget which ones were already paid and which were not. So I wanted to make an application that could keep track of all the charges, all the paid charges, and automatically calculate the total amount owed.',
            video: require('./video/IOU.mp4'),
            techs: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
            github: 'https://github.com/fabio90h/iou',
            demo: 'https://fabio90h.github.io/iou/',
        },
        {
            title: 'To Do Application',
            description: 'Simple To Do Application with the ability to record task and mark them as complete. Users are also able to view the completed task from the completed list and remove them.',
            purpose: 'The purpose of this project was for me to get familiar with React with Redux. This project really helped me get the basics of redux with react down. ',
            video: require('./video/ToDo.mp4'),
            techs: ['HTML', 'CSS', 'React', 'Redux', 'JavaScript'],
            github: 'https://github.com/fabio90h/To-Do-App',
            demo: 'https://fabio90h.github.io/To-Do-App/',
        },
        {
            title: 'Fabio Hsu Portfolio',
            description: 'This website!',
            purpose: "A place to showcase my projects and tell people a little bit about myself and my experiences. I used React for this website so I can easily create and modify the website's components.",
            video: require('./video/Portfolio.mp4'),
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
                                <video 
                                    src={project.video} 
                                    alt={project.title}
                                    muted
                                    play
                                    type='video/mp4' 
                                    autoPlay
                                    loop
                                    playsinline
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