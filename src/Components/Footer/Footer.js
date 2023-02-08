import React from 'react';
import logo from "../../Asstes/logo/gol-logo-white 1.png"
import playstore from "../../Asstes/logo/google-play-png-logo-3789 1.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className='mt-40'>
    <footer className="footer p-10 relative bg-base-200 text-base-content" style={{backgroundColor:"#42A7C3"}}>
  <div>
 <div className='mt-5'>
 <img src={logo}></img>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
 </div>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>

<div className='bg-black relative px-6 w-11/12 -mt-96 py-4 h-56 footerStyle '>
<div>
    <h1 className='text-4xl text-white font-bold mb-5'>Download Our App</h1>
    <p className='text-white'>The best travel in the world</p>
</div>
<div>
  <button className='mt-5 flex items-center px-12 font-bold text-white' style={{backgroundColor:"#3282AD"}}> <img className='mr-5 py-2' src={playstore}></img> Google Play</button>
</div>
           </div>
        </div>
    );
};

export default Footer;