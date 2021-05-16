
import React, {useState, useEffect}  from 'react';
import './Style.css';
import About from '../../components/AboutPage/About';
import Navbar from '../../components/AboutPage/Navbar';

import Footer from '../../components/MainPage/Footer';
import {css} from "@emotion/core";
import PropagateLoader from 'react-spinners/PropagateLoader';

function AboutPage() {
    const[loading,setLoading] = useState(false);
    const override = css`
    display:block;
    border-color:white;
    margin-top:20%;
    `;
  
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    },[])


    return (
   
            <div>
            {
                    loading ? <PropagateLoader color={"#ffc506"} loading={loading} css={override} size={40}/> 
                    :
                    <>
        <div className='about-wrapper'>
            <Navbar/>
            <div className='head-text'>
                <h1>Discover Our Concept</h1>
            </div>
            <div className='des'>
                <h1>GOLDEN MEET, where all your dreams come true.</h1>
                <br></br>
                <h2>AN EXTENDED UNIVERSE !</h2>
                <br></br>
                <p>We offer a multiplatform exploring different intra-connected worlds to connect the whole world and thus use the internet to its full potential. </p>
                <br></br>
                <h2>A SOCIAL NETWORK LIKE NO OTHER...</h2>
                <br></br>
                <p>At the border between a social network, a dating site and an events platform, GOLDEN MEET is the experience of interacting with an open-minded and non-judgmental population, it is the experience of making authentic encounters, it is the experience of living unique moments, where the quality of the person is privileged to the fury of living rather than the quantity. It is the experience of living exceptional moments through sultry events between private and professional members but it is first and foremost a lifestyle and the art of living human emotions. </p>

            </div>
            <div className='aim'>
            <About />
                <Footer/>
                </div>
        </div>
        </>
            }   
</div>

    )
}
export default AboutPage;
