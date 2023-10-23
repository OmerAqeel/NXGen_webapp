import React from 'react';
import './OurProjects.css';

function OurProjects() {

    const services = [
        {
            title: 'Web Development',
            image: 'https://cdn.dribbble.com/users/2521371/screenshots/5348468/media/888df4f0bca2d55f78b4a2db4026d89f.gif'
        },
        {
            title: 'UI/UX Design',
            image: 'https://cdn.dribbble.com/users/795597/screenshots/5885477/media/edb340bba09d20e95bec4b30d9e2d174.gif'
        },
        {
            title: 'Support & Maintenance',
            image: 'https://cdn.dribbble.com/users/2521371/screenshots/5348468/media/888df4f0bca2d55f78b4a2db4026d89f.gif'
        },
        {
            title : 'Photo and Video Editing',
            image: 'https://cdn.dribbble.com/users/2521371/screenshots/5348468/media/888df4f0bca2d55f78b4a2db4026d89f.gif'
        }
    ]


    return (
        <div className="projectsContainer">
            <h1 className='ourProjectsTitle'>What we <span className='offerText'>offer</span></h1>
            <div className='mainTextContainer'>
                <p className='ourProjectMainText'>
                    Our team delivers end-to-end digital solutions designed to meet your unique needs. From web development and UI/UX design to ongoing support and maintenance, we provide a full spectrum of services to bring your digital projects to life and ensure they thrive over time. With our expertise, your digital success is our priority.
                </p>
            </div>

            <div className='servicesContainer'>
                {services.map((service, index) => (
                    <div className='service' key={index}>
                         <h3 className='serviceTitle'>{service.title}</h3>
                        <img src={service.image} alt='service' className='serviceImage' height={100} width={150}  />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OurProjects;