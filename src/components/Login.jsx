import React from "react";
import { Link } from "react-router-dom";
import Main from "./Main";
import Button from "./Button";
import LoginBG from "../assets/LoginBG.png"


const Login = () => {
  return (
    
    <div className="BG">
        <img src={LoginBG} />
<div className="Login">

        <div className="LoginContainer">
        
<h1>Welcome To Cipher Schools!!</h1>
        </div>
        <div className="LoginContent">
        <div className='LoginText'>
                             Email
                            </div>
                            <input className="input" />
                           
        <div className='LoginText'>
                              Password
                            </div>
                            <input className="input" />
        </div>
        <div className="LoginButton">
        <Link to="/Main" link={Main}>
        <Button >Login</Button>
      </Link>
        </div>
     
       
    </div>
    </div>
    
  );
};

export default Login;
