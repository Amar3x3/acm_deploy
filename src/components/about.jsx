import React, { Component } from 'react';
import '../styles/main.css';

const About = () => {
    return <>
    <h1 className="title">About Us</h1>
        <div className="mega-grid-2-abt">
            
            <div className="col-1">
                <img src={require('../assets/aboutimg.png')} alt="" />
            </div>
            
            <div> <hr className="middle-line"/></div> 
            <div className="col-2">
                <p className="text">
                    ACM is the world's largest educational and scientific computing society, 
                    aimed at increasing the level and visibility of ACM activities across the globe. 
                    ACM is a society of dedicated professionals, academicians, and research scientists, 
                    who contribute towards the growth of technological innovations. 
                    The purpose of Society is to inculcate computational thinking aiding in career development and a lifelong learning experience. 
                    Read More..
                </p>
            </div>


            <div className="overlay-upper-left"></div>
            <div className="overlay-down-right"></div>
        </div>
    </>
}

export default About;