import React from 'react';
import { Link } from 'react-router-dom';

function Featurebox(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt=''/>
            </div>

            <div className='a-b-text'>
                <h2> {props.title} </h2>
                <Link to="/FeaturesPage" className='productbox-button' >Read More</Link>

            </div>

          </div>
        
    )
}

export default Featurebox;
