import React from "react";
import telefon from '../images/telefon.png';
import '../Sign/Sign.css';
import google from '../images/google.png'
import {Button} from 'reactstrap'
function SignUp() {
    return (  
        <>
            <img width={600}height={640} className="telefon" src={telefon} alt="" />
            <div className="acaunt">
                <h1>Create an account</h1>
                <h6>Enter your details below</h6>
               <div className="Firtname1">
               <input className="Fistname" placeholder="First name"/>
                <hr  />
               </div>
               <div className="lastname">
               <input className="Fistname" placeholder="Last_name"/>
                <hr  />
               </div>
               <div className="Email">
               <input type="email" className="Fistname" placeholder="Email"/>
                <hr  />
               </div>
               <div className="phone_number">
               <input type="number" className="Fistname" placeholder="phone_number"/>
                <hr  />
               </div>
               <div className="password">
               <input type="password" className="Fistname" placeholder="password"/>
                <hr  />
               </div>
               <Button color="danger"className="Accc" ><a className="Up" href="">Create Account</a></Button>
               <button className="regis"><img src={google} alt="..." />Sign Up with Google</button>
            </div>
        </>
    );
}

export default SignUp;