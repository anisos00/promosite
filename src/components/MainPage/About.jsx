import React from 'react';
import aboutimage from '../../images/z.png';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>DISCOVER OUR CONCEPT</h1>
                <p>Golden Meet, the 1st social network that connects you to the real world. At the border between a dating site and an event platform, our concept is aimed at creative, festive and liberated individuals who are looking for freedom of thought, the experience of living unique moments, and the possibility to choose their sexuality in a different way in order to better reconnect with the real world.</p>
                <Link to="/About" className='productbox-button' >Read More</Link>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
                
            </div>
        </div>
    )
}

export default About;
