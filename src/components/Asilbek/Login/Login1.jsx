import React from "react";
import telefon from '../images/telefon.png';
import '../Login/Login.css'
import {Button} from 'reactstrap'
function Login() {
    return ( 
        <>
    <img width={600}height={640} className="telefon" src={telefon} alt="" />
    <div className="Login">
    <h1>Log in to Exclusive</h1>
    <h6>Enter your details below</h6>
    <div className="Email">
        <input className="email" type="email" placeholder="Email or Phone Number" />
        <hr className="hr" />
    </div>
    <div className="password">
        <input className="email" type="password" placeholder="password" />
        <hr className="hr" />
    </div>
    <Button className="Button" color="danger">Login</Button>
    <a className="dis" href="">Forget Password?</a>
    </div>
         
    

        </>
     );
}

export default Login;