import React,{useState} from 'react';
import logo from '../../images/logo1.png';
import {Link} from 'react-router-dom'
function Navbar() {

    const[nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? "nav active" :"nav"}>
            
            <Link to='/' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt=''/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to="/CreateAccount" smooth={true} duration={2000}>Join the community</Link></li>
               
        
            </ul>
        </nav>
    )
}

export default Navbar;
