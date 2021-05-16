import React from 'react';
import Planbox from './Planbox';
import month from '../../images/month.png';
import months from '../../images/months.png';
import year from '../../images/year.png';
 
function PaymentSection() {
    return (
        <div id='payment'>
            <h1>Choose your GOLDEN MEET Plan </h1>
            <p></p>
            <div className='a-container'>
                <Planbox  title="Standard Formula" />
                <Planbox  title="Gold Formula" />

               

            </div>
        </div>
    )
}


export default PaymentSection;