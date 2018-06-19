import React from 'react';

const Terminal = () => {
    return (
        // TERMINAL WINDOW
        <div id='terminalWindow'>
            {/* TERMINAL HEADER */}
            <div id='terminalHead'>
                <div id='red-circle'> </div>
                <div id='yellow-circle'> </div>
                <div id='green-circle'> </div>
                <div></div>
            </div>
            {/* TERMINAL BODY */}
            <div id='terminalBody'>
                {/* LOCATION */}
                <div className='terminal' id='location'>
                    <div className='terminalCommand'><span>></span> Fabio.currentLocation</div>
                    <div className='response'>"Detroit, Michigan" (Relocating to California)</div>
                </div>
                {/* CONTACT INFO */}
                <div className='terminal' id='contactInfo'>
                    <div className='terminalCommand'><span>></span> Fabio.contactInfo</div>
                    <div>
                        ["<a href="mailto:hsu.fabio13@gmail.com">hsu.fabio13@gmail.com</a>",
                        "<a href="https://www.linkedin.com/in/fabio-hsu-388b9255/">LinkedIn</a>",
                        "<a href="https://github.com/fabio90h">github</a>"]
                    </div>
                </div>
                {/* RESUME
                <div className='terminal' id='resume'>
                    <div className='terminalCommand'><span>></span> Fabio.resume</div>
                    <div>"<a rel="noopener" href={require('./doc/fabioResume.pdf')} target="_blank">fabiohsu.pdf</a>"</div> 
                </div> */}
                {/* INTERESTS */}
                <div className='terminal' id='interests'>
                    <div className='terminalCommand'><span>></span> Fabio.interests</div>
                    <div className='response'>["Coding", "Soccer", "Cooking", "FIFA 18", "Woodworking", "Electronics"]</div>
                </div>
                {/* EDUCATION */}
                <div  className='terminal' id='education'>
                    <div className='terminalCommand'><span>></span> Fabio.education</div>
                    <div className='response'>"B.S. Electrical and Computer Engineering - The Ohio State University"</div>
                </div>
                {/* SKILLS */}
                <div className='terminal' id='skills'>
                    <div className='terminalCommand'><span>></span> Fabio.skills</div>
                    <div className='response'>
                        ["CSS", "JavaScript", "Python", "ReactJS", "Redux", "git", "Jest", "Enzyme", "C++" ]
                    </div>
                </div>
                {/* CURSOR */}
                <div id='cursor'>
                    <span className='terminalCommand'>></span>
                    <span id='blink'>&nbsp;</span>
                </div>
            </div>
        </div>
        
    );
} 

export default Terminal;