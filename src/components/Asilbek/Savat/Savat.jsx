import React from "react";
import '../Savat/Savat.css';
import Sumka from '../images/Sumka.jpg';
import Arra from '../images/Arra.png';
import ss from '../images/ss.png';
import kalonka from '../images/kalonka1.png'
import pult from '../images/pult.png'
import kiyim from '../images/kiyim.png'
import kopiyuter from '../images/kopiyuter.png'
import none from '../images/none.png'
import pul from '../images/pul.png'
import klavitura from '../images/kalvitura.png'
import see from '../images/see.png'
function Savat() {
    return ( 
        <>
       <div className="Wish"> 
        <h5 className="www">Wishlist (4)</h5>
        <button className="name">Move All To Bag</button>
       </div>
       <div className="Box">
               <img className="dd" src={ss} alt="" />
            <img className="Sumka" src={Sumka} alt="" />
            <button className="Arra"> <img src={Arra} alt="" /> Add To Cart</button>
            <h6 className="Gucci">Gucci duffle bag</h6>
            <h6 className="Gucci1">$960</h6><h6 className="Gucci2">$1160</h6>
       </div>
       <div className="Box1">
               <img className="dd" src={ss} alt="" />
            <img className="Sumka" src={kalonka} alt="" />
            <button className="Arra"> <img src={Arra} alt="" /> Add To Cart</button>
            <h6 className="Gucci">RGB liquid CPU Cooler</h6>
            <h6 className="Gucci1">$1960</h6>
       </div>
       <div className="Box3">
               <img className="dd" src={ss} alt="" />
            <img className="Sumka" src={pult} alt="" />
            <button className="Arra"> <img src={Arra} alt="" /> Add To Cart</button>
            <h6 className="Gucci">GP11 Shooter USB Gamepad</h6>
            <h6 className="Gucci1">$550</h6>
       </div>

       <div className="Box4">
               <img className="dd" src={ss} alt="" />
            <img className="Sumka" src={kiyim} alt="" />
            <button className="Arra"> <img src={Arra} alt="" /> Add To Cart</button>
            <h6 className="Gucci">Quilted Satin Jacket</h6>
            <h6 className="Gucci1">$750</h6>
       </div>
       <div className="Wish1"> 
        <h5 className="www">Just For You </h5>
        <button className="name">See All</button>
       </div>
{/* paski qator */}
<div className="boxlar">
       <div className="Box">
               <img className="dd" src={see} alt="" />
            <img className="Sumka" src={kopiyuter} alt="" />
            <button className="Arra"> <img src={Arra} alt="" /> Add To Cart</button>
            <h6 className="Gucci">ASUS FHD Gaming Laptop</h6>
            <h6 className="Gucci1">$960</h6><h6 className="Gucci2">$1160</h6>
       </div>
       <div className="Box1">
               <img className="dd" src={see} alt="" />
            <img className="Sumka" src={none} alt="" />
            <button className="Arra"> <img src={Arra} alt="" /> Add To Cart</button>
            <h6 className="Gucci">IPS LCD Gaming Monitor</h6>
            <h6 className="Gucci1">$1160</h6>
       </div>
       <div className="Box3">
               <img className="dd" src={see} alt="" />
            <img className="Sumka" src={pul} alt="" />
            <button className="Arra"> <img src={Arra} alt="" /> Add To Cart</button>
            <h6 className="Gucci">HAVIT HV-G92 Gamepad</h6>
            <h6 className="Gucci1">$560</h6>
       </div>

       <div className="Box4">
               <img className="dd" src={see} alt="" />
            <img className="Sumka" src={klavitura} alt="" />
            <button className="Arra"> <img src={Arra} alt="" /> Add To Cart</button>
            <h6 className="Gucci">AK-900 Wired Keyboard</h6>
            <h6 className="Gucci1">$200</h6>
       </div>
       </div>
        </>
     );
}

export default Savat;