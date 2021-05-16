import React from 'react';


import { Link } from 'react-router-dom';


function Header() {
    return (
        <div id='main'>
            <div className='header-heading'>
                <h3>CONNECT THE WORLD </h3>
                <h1><span>WITH</span> A GOLDEN<br/> TOUCH</h1>
                <p className='details'>THE UNCENSORED, TAILOR-MADE SOCIAL NETWORK. </p>

                <div className='header-btns'>
                    
                          <Link to="/CreateAccount" class='animated-button1' >
                         <span></span>
                         <span></span>
                         <span></span>
                         <span></span>
                         BECOME A MEMBER

                    </Link>

                
                </div>
            </div>
        </div>
    )
}

export default Header;
