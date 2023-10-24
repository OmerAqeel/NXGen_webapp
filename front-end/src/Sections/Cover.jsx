import React from 'react';
import Navbar from './Navbar';
import './Cover.css';
import OurVision from './OurVision';
import OurProjects from './OurProjects';
import OurTeam from './OurTeam';
function Cover() {
    return (
        <>
        <div className="coverContainer">
        <Navbar/>
            <h1>Cover</h1>
            <OurVision/>   
            <OurProjects/>
            <OurTeam/>
        </div>
        
        </>
    )
}

export default Cover;