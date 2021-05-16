import React, { useState, useEffect } from "react";
import "./Style.css";
import { useSpring, animated } from "react-spring";
import logo from '../../images/logo1.png';
import { Link } from 'react-router-dom';
import {css} from "@emotion/core";
import PropagateLoader from 'react-spinners/PropagateLoader';


function CreateAccount() {


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


  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
  });

  const loginBtnProps = useSpring({
    backgroundColor: registrationFormStatus
      ? " transparent"
      : " gold ",
    //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    backgroundColor: registrationFormStatus
      ? "gold"
      : "transparent", //Animate bottom border of register button
  });

  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  return (
<div>
{
        loading ? <PropagateLoader color={"#ffc506"} loading={loading} css={override} size={40}/> 
        :
        <>

    <div className="bg">
      <div className="login-register-wrapper"   >
        <div className="nav-buttons">
          <animated.button
            onClick={loginClicked}
            id="loginBtn"
            style={loginBtnProps}
          >
            LOGIN
        </animated.button>
          <animated.button
            onClick={registerClicked}
            id="registerBtn"
            style={registerBtnProps}
          >
            REGISTER
        </animated.button>
        </div>
        <div className="form-group">
          <animated.form action="" id="loginform" style={loginProps}>
            <LoginForm />
          </animated.form>
          <animated.form action="" id="registerform" style={registerProps}>
            <RegisterForm />
          </animated.form>
        </div>
        <animated.div className="forgot-panel" style={loginProps}>
          <a herf="forget-password">Forgot your password</a>
        </animated.div>
      </div>
      <nav className="nav" ></nav>
      <Link to='/' className='logo'>
        <img src={logo} alt='' />
      </Link>

    </div>
    </> 
}
    </div>
  );
}

function LoginForm() {
  return (
    <React.Fragment>
      <label for="username">USERNAME</label>
      <input type="text" id="username" />
      <label for="password">PASSWORD</label>
      <input type="text" id="password" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

function RegisterForm() {
  return (
    <React.Fragment>
      <label for="fullname">full name</label>
      <input type="text" id="fullname" />
      <label for="email">email</label>
      <input type="text" id="email" />
      <label for="password">password</label>
      <input type="text" id="password" />
      <label for="confirmpassword">confirm password</label>
      <input type="text" id="confirmpassword" />
      <input type="submit" value="submit" class="submit" />
    </React.Fragment>
  );
}

export default CreateAccount;