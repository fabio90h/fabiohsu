import React from 'react';
import appleLogo from './img/apple-logo.png'

const Macbook = () => {
    return(
        <div className="center">
            <div className="monitor">
                <div className="screen"></div>
                <img src={appleLogo} alt="Apple Logo"/>
            </div>
        </div>
    );
}

export default Macbook;