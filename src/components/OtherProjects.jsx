import React, { Component } from 'react';

class OtherProjects extends Component {
    state = [
        {
            title: 'Dog Monitor',
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
        return (
            this.state.map((project, index) => {
                return(
                    <li>
                        <h5>{project.title}</h5>
                    </li>
                );
            })
        );
    }
}

export default OtherProjects;