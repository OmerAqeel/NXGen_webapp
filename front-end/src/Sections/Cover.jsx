import React from 'react';
import Navbar from './Navbar';
import './Cover.css';
import OurVision from './OurVision';
import OurProjects from './OurProjects';
function Cover() {
    return (
        <>
        <div className="coverContainer">
        <Navbar/>
            <h1>Cover</h1>
            <OurVision/>
            <OurProjects/>
        </div>
        
        </>
    )
}

export default Cover;