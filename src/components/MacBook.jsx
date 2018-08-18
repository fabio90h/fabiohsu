import React from 'react';
import appleLogo from './img/apple-logo.png'

const Macbook = () => {
    return(
        <div className="center">
            <div className="monitor">
                <div className="screen">
                </div>
                <img src={appleLogo} alt="Apple Logo"/>
                <div className="stand">
                    <div className="neck"></div>
                    <div className="base"></div>
                </div>
            </div>
        </div>
    );
}

export default Macbook;