import React from 'react';
import Featurebox from './Featurebox';
import pimage1 from '../../images/event.jpg';
import pimage2 from '../../images/post.jpg';
import pimage3 from '../../images/chat.jpg';
import { Link } from 'react-router-dom';


function Features() {
    return (
        <div id='products'>
            <h1>EXPLORE OUR APP </h1>
            <h2>A variety of features connecting all users</h2>
            <div className='a-container'>
                <Featurebox image={pimage1} title="Create and Share Events" />

                <Featurebox image={pimage2} title="Create and Share Posts" />
                <Featurebox image={pimage3} title="Keep in touch with everyone" />
            </div>

        </div>
    )
}

export default Features;
