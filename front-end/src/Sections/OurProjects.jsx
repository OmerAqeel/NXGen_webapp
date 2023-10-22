import React from 'react';
import './OurProjects.css';

function OurProjects() {


    return (
        <div className="projectsContainer">
            <h1 className='ourProjectsTitle'>What we <span className='offerText'>offer</span></h1>
            <div className='mainTextContainer'>
                <p className='ourProjectMainText'>
                    Our team delivers end-to-end digital solutions designed to meet your unique needs. From web development and UI/UX design to ongoing support and maintenance, we provide a full spectrum of services to bring your digital projects to life and ensure they thrive over time. With our expertise, your digital success is our priority.
                </p>
            </div>

            <div className='service'>
                <h1 className='serviceTitle'>Web Development</h1>
                <img className='serviceImage' src='https://cdn.dribbble.com/users/2521371/screenshots/5348468/media/888df4f0bca2d55f78b4a2db4026d89f.gif' alt='web-dev' height={150} width={150}/>
            </div>

        </div>
    )
}

export default OurProjects;