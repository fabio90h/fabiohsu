import React, { Component } from 'react';

class CodingProjects extends Component {
    state = [
        {
            title: 'Calculator',
            link: 'www.google.com',
            description: 'This was a calculator app',
            image: 'idk'
        },
        {
            title: 'IOU',
            link: 'www.google.com',
            description: 'This was a calculator app',
            image: 'idk'
        },
        {
            title: 'China Chef Restaurant',
            link: 'www.google.com',
            description: 'This was a calculator app',
            image: 'idk'
        },
        {
            title: 'To Do Application',
            link: 'www.google.com',
            description: 'This was a calculator app',
            image: 'idk'
        },
        {
            title: 'Fabio Hsu Portfolio',
            link: 'www.google.com',
            description: 'This was a calculator app',
            image: 'idk'
        },
    ]

    render() {
        return(
            this.state.map((project, index) => {
                return (
                    <li>
                        <h4>{project.title}</h4>
                    </li>
                );
            })
        );
    }
}

export default CodingProjects;