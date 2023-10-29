import React from 'react';
import './Navbar.css';

function Navbar() {

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth',
        });
    }
    
        return (
            <div className="navbarContainer">
                <li onClick={() => scrollToSection('section1')}>
                    OUR VISON
                </li>
                <li onClick={() => scrollToSection('section2')}>
                    SERVICES
                </li>
                <li onClick={() => scrollToSection('section3')}>
                    OUR TEAM
                </li>
                <li onClick={() => scrollToSection('section4')}>
                    CONTACT US
                </li>
                </div>
        )
    }   

export default Navbar;