import React from 'react';
import Navbar from './Navbar';
import './Cover.css';
import OurVision from './OurVision';

function Cover() {
    return (
        <>
        <div className="coverContainer">
        <Navbar/>
            <h1>Cover</h1>
            <OurVision/>
        </div>
        
        </>
    )
}

export default Cover;