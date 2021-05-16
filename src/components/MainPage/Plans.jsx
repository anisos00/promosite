import React from 'react';
import Planbox from './Planbox';
import pimage1 from '../../images/month.png';
import pimage2 from '../../images/months.png';
import pimage3 from '../../images/year.png';
 
function Features() {
    return (
        <div id='products'>
            <div className='a-container'>
                <Planbox  title="Standard Formula" />
                <Planbox title="Gold Formula"/>
         
            </div>
        </div>
    )
}

export default Features;
