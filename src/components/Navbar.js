import React from 'react';
import './css/Navbar.css';
const Navbar = ()=>{
    return(
        <div className="navbar">
            <a href="/" className="logo">Fullyworld Web Tutorials</a>
            <ul>
                <li className="active"><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#portfolio">Porfolio</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
    );
} 

export default Navbar;