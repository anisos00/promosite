import React from 'react';
import { Link } from 'react-router-dom';

function Planbox(props) {
    return (
        <div className='p-box'>
            <div className='first'>
            <div className='a-b-text'>
                <h2> {props.title} </h2>
                <Link to='/Subscription' className='productbox-button'>Read More</Link>
            </div>
            </div>
        </div>
    )
}

export default Planbox;
