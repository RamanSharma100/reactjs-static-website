import React from 'react';
import './css/Services.css';
const Services = ()=>{
    return(
        <div className="services" id="services">
            <h1 className="heading">Services</h1>
            <p className="sub-heading">We offer many awesome and secured services and some of them are here:-</p>
            <div className="services-cards">
                <div className="card">
                    <i className="fa fa-youtube-play"></i>
                    <h1>Video Tutorials</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="card">
                    <i className="fa fa-youtube-play"></i>
                    <h1>Video Tutorials</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
                <div className="card">
                    <i className="fa fa-youtube-play"></i>
                    <h1>Video Tutorials</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services;